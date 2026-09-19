# Server Actions Reference

This document provides a comprehensive reference for all Server Actions in the FCAI E-Club application.

## Overview

Server Actions are server-side functions that can be called from client components. They handle form submissions, data mutations, and authentication. All Server Actions are located in the `actions/` directory.

---

## Authentication Actions

Location: `actions/auth.ts`

### signIn(formData: FormData)

Signs in a user with email and password.

**Inputs:**
- `formData`: FormData object containing:
  - `email`: User's email address
  - `password`: User's password

**Outputs:**
- Redirects to `/dashboard` on success
- Redirects to `/login?message=...` on error with error message

**Side Effects:**
- Creates Supabase auth session
- Sets session cookies via middleware

**Usage:**
```tsx
<form action={signIn}>
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">Sign In</button>
</form>
```

---

### signUp(formData: FormData)

Registers a new user with email and password.

**Inputs:**
- `formData`: FormData object containing:
  - `email`: User's email address
  - `password`: User's password

**Outputs:**
- Redirects to `/login?message=Check email to continue sign in process` on success
- Redirects to `/signup?message=...` on error with error message

**Side Effects:**
- Creates Supabase auth user
- Sends confirmation email (if email confirmation is enabled)
- Triggers `handle_new_user()` function to create profile row

**Usage:**
```tsx
<form action={signUp}>
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">Sign Up</button>
</form>
```

---

### signOut()

Signs out the current user.

**Inputs:**
- None

**Outputs:**
- Redirects to `/login`

**Side Effects:**
- Clears Supabase auth session
- Clears session cookies

**Usage:**
```tsx
<button onClick={signOut}>Sign Out</button>
```

---

## Registration Actions

Location: `actions/registration.ts`

### submitRegistration(eventId, formData)

Submits an event registration with optional CV upload.

**Inputs:**
- `eventId`: UUID string of the event
- `formData`: Object containing:
  - `full_name`: Registrant's full name
  - `email`: Registrant's email
  - `academic_year`: Academic year (1st, 2nd, 3rd, 4th, 5th, graduate)
  - `department`: Department/major
  - `screening_answers`: Record of screening question responses
  - `cv_file`: File object or null (optional CV upload)

**Outputs:**
```typescript
{
  success: boolean;
  error: string | null;
}
```

**Validation:**
- **Input sanitization**: Removes angle brackets, javascript: protocols, and event handlers
- **Rate limiting**: Prevents duplicate registrations from same email within 1 hour
- **File validation** (if CV provided):
  - Max size: 5MB
  - Allowed MIME types: application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document
  - Allowed extensions: .pdf, .doc, .docx

**Side Effects:**
- Uploads CV to Supabase Storage bucket `cv-uploads` (if provided)
- Inserts registration record into `registrations` table
- File path format: `cvs/{email}-{timestamp}.{ext}`

**Security Notes:**
- Currently public (no auth required) per Phase 4 being postponed
- RLS policy requires email match with authenticated user - will need adjustment when auth is implemented

**Usage:**
```tsx
const result = await submitRegistration(eventId, {
  full_name: "John Doe",
  email: "john@example.com",
  academic_year: "3rd",
  department: "Computer Science",
  screening_answers: { "experience": "3 years", "goal": "Learn React" },
  cv_file: fileObject,
});

if (result.success) {
  // Show success message
} else {
  // Show error: result.error
}
```

---

## Partner Actions

Location: `actions/partners.ts`

### submitPartnerProposal(formData: FormData)

Submits a partnership proposal inquiry.

**Inputs:**
- `formData`: FormData object containing:
  - `company_name`: Company name
  - `contact_email`: Contact email
  - `interest`: Partnership interest (sponsorship, mentorship, recruitment)
  - `motives`: Motives for partnership
  - `gains`: Expected gains from partnership

**Outputs:**
```typescript
{
  success: boolean;
  errors: Record<string, string[]> | null;
}
```

**Validation:**
- **Authentication check**: Requires user to be logged in
- **Input sanitization**: Removes angle brackets, javascript: protocols, and event handlers
- **Zod schema validation**:
  - `company_name`: Required, min 1 character
  - `contact_email`: Required, valid email format
  - `interest`: Required, min 1 character
  - `motives`: Required, min 1 character
  - `gains`: Required, min 1 character

**Side Effects:**
- Inserts proposal record into `partner_proposals` table

**Usage:**
```tsx
<form action={submitPartnerProposal}>
  <input name="company_name" />
  <input name="contact_email" type="email" />
  <select name="interest">
    <option value="sponsorship">Sponsorship</option>
    <option value="mentorship">Mentorship</option>
    <option value="recruitment">Recruitment</option>
  </select>
  <textarea name="motives" />
  <textarea name="gains" />
  <button type="submit">Submit Proposal</button>
</form>
```

---

## Profile Actions

Location: `actions/profiles.ts`

### loadMoreProfiles(page, committeeId?)

Loads more profiles for pagination on the Team page.

**Inputs:**
- `page`: Page number (1-based)
- `committeeId`: Optional UUID string to filter by committee

**Outputs:**
```typescript
{
  profiles: ProfileWithCommittee[];
  hasMore: boolean;
}
```

**Side Effects:**
- None (read-only)

**Usage:**
```tsx
const { profiles, hasMore } = await loadMoreProfiles(currentPage, committeeId);
```

---

## Security Features

All Server Actions include security measures:

### 1. CSRF Protection
- Enabled by default in Next.js 16 Server Actions
- Framework handles token generation and validation automatically
- Configured in `next.config.ts` with `bodySizeLimit: '5mb'`

### 2. Input Sanitization
Applied to all text inputs to prevent XSS:
- Removes angle brackets (`<`, `>`)
- Removes `javascript:` protocol
- Removes event handlers (`onclick=`, `onload=`, etc.)
- Trims whitespace
- Normalizes email to lowercase

### 3. Authentication Checks
- `submitPartnerProposal`: Requires authenticated user
- `submitRegistration`: Currently public (noted for future auth implementation)
- `signIn`, `signUp`, `signOut`: Auth-specific actions

### 4. Rate Limiting
- `submitRegistration`: 1-hour cooldown per email per event
- Prevents spam/duplicate registrations

### 5. File Upload Validation
- Size limit: 5MB max
- MIME type validation: PDF, DOC, DOCX only
- Extension validation: .pdf, .doc, .docx only
- Server-side and client-side validation

---

## Error Handling

All Server Actions follow consistent error handling patterns:

### Form Actions (auth, partners)
- On error: Redirect with error message in URL query param
- Example: `/login?message=Invalid%20login%20credentials`

### Direct Actions (registration)
- On error: Return object with `success: false` and `error` message
- Example: `{ success: false, error: "File size exceeds 5MB limit" }`

### Validation Errors (partners)
- On validation failure: Return object with `success: false` and `errors` object
- Example: `{ success: false, errors: { email: ["Valid email is required"] } }`

---

## Type Exports

### registration.ts
```typescript
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
```

### partners.ts
```typescript
export type PartnerProposalInput = z.infer<typeof partnerProposalSchema>;
```

---

## Best Practices

1. **Always validate inputs** - Use Zod schemas for structured validation
2. **Sanitize user input** - Apply sanitization before database operations
3. **Handle errors gracefully** - Provide clear error messages to users
4. **Use rate limiting** - Prevent abuse and spam
5. **Check authentication** - Verify user permissions before sensitive operations
6. **Log errors** - Use `console.error()` for debugging (server-side only)
7. **Return consistent types** - Follow the established patterns for success/error responses

---

## Future Actions

When Phase 4 (Authentication & Member Dashboards) is implemented, additional Server Actions will be needed:

- `updateProfile` - Update user profile data
- `uploadAvatar` - Upload profile avatar
- `submitContribution` - Add member contribution
- `approveRegistration` - Admin action to approve registrations
- `rejectRegistration` - Admin action to reject registrations
- `updateEvent` - Admin action to update event details
- `deleteEvent` - Admin action to delete events

These will follow the same security patterns and error handling conventions established in the existing actions.
