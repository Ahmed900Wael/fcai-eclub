# End-to-End Testing Guide

This document explains how to run the end-to-end tests for the FCAI E-Club application.

## Setup

1. Install Playwright and its dependencies:
```bash
pnpm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all E2E tests
```bash
pnpm test:e2e
```

### Run tests in UI mode (interactive)
```bash
pnpm test:e2e:ui
```

### Run tests in headed mode (visible browser)
```bash
pnpm test:e2e:headed
```

### Run specific test file
```bash
npx playwright test e2e/registration.spec.ts
```

## Test Coverage

### Registration Pipeline (`e2e/registration.spec.ts`)
- Navigate to event detail page and open registration form
- Validate step 1 (basic info) fields
- Complete full registration flow without CV
- Show error for invalid email format
- Close modal when clicking outside
- Navigate back between steps

### CV Upload Flow (`e2e/cv-upload.spec.ts`)
- Upload a valid PDF file
- Reject file larger than 5MB
- Reject invalid file types
- Allow submission without CV
- Display file size after selection

## Browser Coverage

Tests run on:
- Chromium (Chrome)
- Firefox
- WebKit (Safari)
- Mobile Chrome (Pixel 5 viewport)

## Security Features Tested

- File upload validation (size limits, MIME type validation)
- Input sanitization and XSS prevention
- Rate limiting (prevents duplicate registrations within 1 hour)
- CSRF protection (handled by Next.js Server Actions)

## Notes

- Tests use the development server at `http://localhost:3000`
- The dev server is automatically started by Playwright
- Tests use unique email addresses with timestamps to avoid rate limiting
- CV uploads use mock files for testing purposes
