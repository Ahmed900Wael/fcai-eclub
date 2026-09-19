# Repository Guide & Contribution Guidelines

This document provides guidelines for contributing to the FCAI E-Club project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Git Workflow](#git-workflow)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

---

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

---

## Getting Started

1. Read the [Setup Guide](./SETUP-GUIDE.md) to set up your development environment
2. Review the [Supabase Reference](./SUPABASE-REFERENCE.md) to understand the database
3. Read the [Server Actions Reference](./SERVER-ACTIONS-REFERENCE.md) to understand server-side logic
4. Check the [Design System](../design/DESIGN-SYSTEM.md) for UI patterns
5. Review [TASKS.md](../TASKS.md) to understand the project roadmap

---

## Development Workflow

### 1. Choose a Task

- Check `TASKS.md` for pending tasks
- Look for issues in the project's issue tracker (if available)
- Discuss with the team before starting major features

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

**Branch naming conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/changes

### 3. Make Changes

- Follow the coding standards below
- Use the design system classes
- Add TypeScript types
- Write tests for new features
- Update documentation as needed

### 4. Test Your Changes

```bash
# Run development server
pnpm dev

# Run linting
pnpm lint:fix

# Run formatting
pnpm format

# Run E2E tests (if applicable)
pnpm test:e2e
```

### 5. Commit Your Changes

```bash
git add .
git commit -m "type: description"
```

**Commit message format:**
```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Maintenance tasks

**Examples:**
```
feat(registration): add CV upload validation
fix(partners): resolve auth check error
docs(readme): update setup instructions
```

### 6. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request following the [Pull Request Process](#pull-request-process).

---

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types - use proper type definitions
- Use interfaces for object shapes
- Use type aliases for unions and primitives
- Enable strict mode in `tsconfig.json`

```typescript
// Good
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<UserProfile> {
  // ...
}

// Bad
function getUser(id: any): any {
  // ...
}
```

### React Components

- Use functional components with hooks
- Use TypeScript for props
- Follow the existing component structure
- Use the design system classes (`ds-*`)

```tsx
// Good
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`ds-btn ds-btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Bad
export function Button(props: any) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
```

### Server Actions

- Use `"use server"` directive
- Add authentication checks for sensitive operations
- Sanitize all user inputs
- Return consistent error types
- Add TypeScript types for inputs and outputs

```typescript
"use server";

import { createClient } from "@/lib/supabase/server";

export async function myAction(formData: FormData) {
  const supabase = await createClient();
  
  // Auth check
  const { data: { user } } = await supabase.auth.getUser();
 if (!user) {
    return { success: false, error: "Unauthorized" };
  }
  
  // Sanitize input
  const data = sanitizeInput(formData.get("field") as string);
  
  // Return consistent type
  return { success: true, data: result };
}
```

### Styling

- Use the design system classes (`ds-*`) from `globals.css`
- Avoid inline styles unless absolutely necessary
- Use Tailwind utility classes for one-off adjustments
- Follow the existing color scheme and spacing

```tsx
// Good
<div className="ds-card">
  <h2 className="ds-section-title">Title</h2>
</div>

// Bad
<div style={{ background: '#1e201e', padding: '24px' }}>
  <h2 style={{ fontSize: '32px' }}>Title</h2>
</div>
```

### File Naming

- Use kebab-case for file names
- Use PascalCase for component names
- Group related files in directories

```
components/
  register-button.tsx      # Component file
  registration-form.tsx   # Component file
  ui/                     # UI component directory
    button.tsx
    input.tsx
```

### Imports

- Order imports: external → internal → relative
- Group imports with blank lines
- Use absolute imports with `@/` alias

```typescript
// External
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Internal
import { Button } from "@/components/ui/button";
import { submitRegistration } from "@/actions/registration";

// Relative (if needed)
import { formatDate } from "../utils/date";
```

---

## Git Workflow

### Branching Strategy

- `main` - Production-ready code
- `dev` - Development integration branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches
- `docs/*` - Documentation branches

### Merging

1. Feature branches merge into `dev`
2. `dev` merges into `main` after testing
3. Use pull requests for all merges
4. Require at least one approval before merging

### Conflict Resolution

1. Pull latest changes from target branch
2. Resolve conflicts locally
3. Test thoroughly
4. Commit with message "Merge conflict resolution"
5. Push and update pull request

---

## Pull Request Process

### PR Title

Follow the commit message format:
```
type(scope): subject
```

### PR Description

Include:
- **Summary**: What this PR does
- **Changes**: List of files changed
- **Testing**: How you tested the changes
- **Screenshots**: For UI changes (if applicable)
- **Related Issues**: Link to related issues/tasks

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing
- [ ] `pnpm lint` passes with no errors
- [ ] `pnpm format` applied

### Review Process

1. Assign reviewers
2. Address review feedback
3. Update PR as needed
4. Get approval
5. Merge to target branch

---

## Testing

### Unit Testing

(When implemented)
- Write tests for utility functions
- Test Server Actions with mock data
- Aim for >80% code coverage

### E2E Testing

- Write Playwright tests for user flows
- Test critical paths (registration, auth, etc.)
- Run tests before merging

```bash
pnpm test:e2e           # Run all E2E tests
pnpm test:e2e:ui        # Run in UI mode
pnpm test:e2e:headed    # Run with visible browser
```

### Manual Testing

- Test in multiple browsers (Chrome, Firefox, Safari)
- Test on mobile devices
- Test with different screen sizes
- Test with and without authentication

---

## Documentation

### When to Update Documentation

- Adding new features
- Changing existing functionality
- Updating the database schema
- Adding new Server Actions
- Changing the design system

### Documentation Files

- `docs/SUPABASE-REFERENCE.md` - Database schema and RLS
- `docs/SERVER-ACTIONS-REFERENCE.md` - Server Actions documentation
- `docs/SETUP-GUIDE.md` - Environment setup
- `docs/E2E-TESTING.md` - E2E testing guide
- `design/DESIGN-SYSTEM.md` - Design system reference
- `TASKS.md` - Project roadmap
- `README.md` - Project overview

### Documentation Style

- Use clear, concise language
- Include code examples
- Use proper formatting (Markdown)
- Keep documentation up to date
- Add diagrams where helpful

---

## Design System Guidelines

### Using Design System Classes

Always use the `ds-*` classes from `globals.css`:

```tsx
// Cards
<div className="ds-card">...</div>
<div className="ds-card-elevated">...</div>

// Buttons
<button className="ds-btn">Primary</button>
<button className="ds-btn-outline">Outline</button>

// Typography
<h2 className="ds-section-title">Title</h2>
<p className="ds-text-muted">Muted text</p>

// Forms
<input className="ds-input" />
<label className="ds-input-label">Label</label>
```

### Adding New Design System Classes

1. Add the class to `app/globals.css`
2. Document it in `design/DESIGN-SYSTEM.md`
3. Use consistent naming (`ds-*` prefix)
4. Follow existing patterns

---

## Security Guidelines

### Never Commit

- API keys or secrets
- `.env` files
- Passwords or credentials
- Personal data
- Service role keys

### Security Best Practices

- Use environment variables for sensitive data
- Validate all user inputs
- Sanitize data before database operations
- Use RLS policies for database access
- Implement rate limiting for forms
- Keep dependencies updated

---

## Performance Guidelines

- Optimize images (compress, use WebP)
- Lazy load components when possible
- Use Next.js Image component for images
- Minimize bundle size
- Use code splitting for large components
- Monitor Core Web Vitals

---

## Accessibility Guidelines

- Use semantic HTML
- Add alt text to images
- Ensure keyboard navigation works
- Use proper color contrast
- Add ARIA labels where needed
- Test with screen readers

---

## Questions or Issues?

- Check existing documentation first
- Search for similar issues
- Ask questions in team channels
- Create an issue for bugs or feature requests

---

## License

By contributing, you agree that your contributions will be licensed under the project's license.

---

Thank you for contributing to FCAI E-Club! 🚀
