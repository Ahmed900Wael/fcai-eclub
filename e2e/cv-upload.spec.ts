import { test, expect } from '@playwright/test';

test.describe('CV Upload Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/events');
  });

  test('should upload a valid PDF file', async ({ page }) => {
    // Navigate to registration form
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Fill step 1
    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', `test-${Date.now()}@example.com`);
    await page.selectOption('#reg-year', '3rd');
    await page.fill('#reg-dept', 'Computer Science');
    await page.locator('button:has-text("Next")').click();

    // Skip step 2
    await page.locator('button:has-text("Next")').click();

    // Step 3: Upload CV
    await expect(page.locator('text=Step 3 of 3')).toBeVisible();

    // Create a mock PDF file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: 'test-cv.pdf',
      mimeType: 'application/pdf',
      buffer: Buffer.from('%PDF-1.4 mock pdf content'),
    });

    // Verify file name is displayed
    await expect(page.locator('text=test-cv.pdf')).toBeVisible();

    // Submit
    await page.locator('button:has-text("Submit")').click();

    // Should show success
    await expect(page.locator('text=Registration Submitted')).toBeVisible();
  });

  test('should reject file larger than 5MB', async ({ page }) => {
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Fill step 1
    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', `test-${Date.now()}@example.com`);
    await page.selectOption('#reg-year', '3rd');
    await page.fill('#reg-dept', 'Computer Science');
    await page.locator('button:has-text("Next")').click();
    await page.locator('button:has-text("Next")').click();

    // Try to upload a large file (>5MB)
    const largeBuffer = Buffer.alloc(6 * 1024 * 1024); // 6MB
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: 'large-file.pdf',
      mimeType: 'application/pdf',
      buffer: largeBuffer,
    });

    // Should show alert about file size
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('exceeds 5MB');
      await dialog.accept();
    });

    // File should not be selected
    await expect(page.locator('text=Choose file')).toBeVisible();
  });

  test('should reject invalid file types', async ({ page }) => {
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Fill step 1
    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', `test-${Date.now()}@example.com`);
    await page.selectOption('#reg-year', '3rd');
    await page.fill('#reg-dept', 'Computer Science');
    await page.locator('button:has-text("Next")').click();
    await page.locator('button:has-text("Next")').click();

    // Try to upload an invalid file type
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: 'malicious.exe',
      mimeType: 'application/x-msdownload',
      buffer: Buffer.from('fake executable'),
    });

    // Should show alert about invalid type
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Invalid file type');
      await dialog.accept();
    });

    // File should not be selected
    await expect(page.locator('text=Choose file')).toBeVisible();
  });

  test('should allow submission without CV', async ({ page }) => {
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Fill step 1
    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', `test-${Date.now()}@example.com`);
    await page.selectOption('#reg-year', '3rd');
    await page.fill('#reg-dept', 'Computer Science');
    await page.locator('button:has-text("Next")').click();
    await page.locator('button:has-text("Next")').click();

    // Step 3: Don't upload CV
    await expect(page.locator('text=CV upload is optional')).toBeVisible();

    // Submit without file
    await page.locator('button:has-text("Submit")').click();

    // Should still succeed
    await expect(page.locator('text=Registration Submitted')).toBeVisible();
  });

  test('should display file size after selection', async ({ page }) => {
    await page.locator('.ds-card').first().click();
    await page.locator('button:has-text("Register Now")').click();

    // Fill step 1
    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', `test-${Date.now()}@example.com`);
    await page.selectOption('#reg-year', '3rd');
    await page.fill('#reg-dept', 'Computer Science');
    await page.locator('button:has-text("Next")').click();
    await page.locator('button:has-text("Next")').click();

    // Upload a small file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: 'test-cv.pdf',
      mimeType: 'application/pdf',
      buffer: Buffer.from('%PDF-1.4 mock pdf content'),
    });

    // Verify file size is displayed
    await expect(page.locator('text=MB')).toBeVisible();
  });
});
