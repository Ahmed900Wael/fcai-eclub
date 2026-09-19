import { test, expect } from '@playwright/test';

test.describe('Registration Pipeline', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/events');
  });

  test('should navigate to event detail page and open registration form', async ({ page }) => {
    // Click on the first event card
    const firstEventCard = page.locator('.ds-card').first();
    await firstEventCard.click();

    // Wait for event detail page to load
    await expect(page).toHaveURL(/\/events\/.+/);

    // Verify event details are visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=About')).toBeVisible();

    // Click "Register Now" button
    const registerButton = page.locator('button:has-text("Register Now")');
    await expect(registerButton).toBeVisible();
    await registerButton.click();

    // Verify registration modal is open
    await expect(page.locator('text=Register')).toBeVisible();
    await expect(page.locator('text=Step 1 of 3')).toBeVisible();
  });

  test('should validate step 1 (basic info) fields', async ({ page }) => {
    // Navigate to first event
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Try to proceed without filling fields
    await page.locator('button:has-text("Next")').click();

    // Should stay on step 1 (validation errors)
    await expect(page.locator('text=Step 1 of 3')).toBeVisible();

    // Fill in valid data
    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', 'test@example.com');
    await page.selectOption('#reg-year', '2nd');
    await page.fill('#reg-dept', 'Computer Science');

    // Proceed to step 2
    await page.locator('button:has-text("Next")').click();

    // Should be on step 2
    await expect(page.locator('text=Step 2 of 3')).toBeVisible();
  });

  test('should complete full registration flow without CV', async ({ page }) => {
    // Navigate to first event
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Step 1: Basic info
    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', `test-${Date.now()}@example.com`);
    await page.selectOption('#reg-year', '3rd');
    await page.fill('#reg-dept', 'Computer Science');
    await page.locator('button:has-text("Next")').click();

    // Step 2: Screening questions (if any)
    await expect(page.locator('text=Step 2 of 3')).toBeVisible();
    await page.locator('button:has-text("Next")').click();

    // Step 3: CV upload (skip)
    await expect(page.locator('text=Step 3 of 3')).toBeVisible();
    await page.locator('button:has-text("Submit")').click();

    // Should show success message
    await expect(page.locator('text=Registration Submitted')).toBeVisible();
  });

  test('should show error for invalid email format', async ({ page }) => {
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', 'invalid-email');
    await page.selectOption('#reg-year', '2nd');
    await page.fill('#reg-dept', 'Computer Science');
    await page.locator('button:has-text("Next")').click();

    // Should show email validation error
    await expect(page.locator('text=Valid email is required')).toBeVisible();
  });

  test('should close modal when clicking outside', async ({ page }) => {
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Click outside the modal
    await page.locator('.fixed.inset-0').click({ position: { x: 10, y: 10 } });

    // Modal should close
    await expect(page.locator('text=Register')).not.toBeVisible();
  });

  test('should navigate back between steps', async ({ page }) => {
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Fill step 1
    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', 'test@example.com');
    await page.selectOption('#reg-year', '2nd');
    await page.fill('#reg-dept', 'Computer Science');
    await page.locator('button:has-text("Next")').click();

    // Go back to step 1
    await page.locator('button:has-text("Back")').click();

    // Should be on step 1 with data preserved
    await expect(page.locator('text=Step 1 of 3')).toBeVisible();
    await expect(page.locator('#reg-name')).toHaveValue('Test User');
  });
});
