// @ts-check
const { test, expect } = require('@playwright/test');

// Test data with invalid login credentials
const invalidCredentials = [
  { 
    username: 'invalid.email@example.com', 
    password: 'wrongpassword123',
    expectedError: 'Incorrect username or password.'
  },
  { 
    username: 'nonexistent@fake.com', 
    password: 'wrongpass456',
    expectedError: 'Incorrect username or password.'
  },
  { 
    username: '', 
    password: 'anypassword',
    expectedError: 'Username or email address cannot be empty.' 
  },
  { 
    username: 'username123', 
    password: '',
    expectedError: 'Password cannot be empty.'
  }
];

test.describe('GitHub Login Validation Tests', () => {
  for (const cred of invalidCredentials) {
    test(`should show error for invalid login: ${cred.username || '(empty username)'}`, async ({ page }) => {
      // Navigate to GitHub sign-in page
      await page.goto('https://github.com/login');
      
      // Fill in the form with invalid credentials
      await page.fill('#login_field', cred.username);
      await page.fill('#password', cred.password);
      
      // Click the sign-in button
      await page.click('input[type="submit"][value="Sign in"]');
      
      // Assert that the error message appears
      const errorElement = page.locator('.js-flash-alert');
      await expect(errorElement).toBeVisible();
      await expect(errorElement).toContainText(cred.expectedError);
      
      // Take a screenshot for reference
      await page.screenshot({ path: `login-error-${cred.username.replace(/[^a-z0-9]/gi, '-')}.png` });
    });
  }
});
