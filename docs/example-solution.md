# Example Solution for GitHub Tasks Test

This is an example of what your completed test for Activity 3 might look like after using Playwright Codegen.

```javascript
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('GitHub Tasks', () => {
  test('should add items to task list and toggle them', async ({ page }) => {
    // Navigate to GitHub's Gist page which allows creating markdown with task lists without login
    await page.goto('https://gist.github.com/');
    
    // Fill in a description for the gist
    await page.fill('input[placeholder="Gist description..."]', 'My Task List');
    
    // Fill in the filename with markdown extension
    await page.fill('input[placeholder="Filename including extension..."]', 'tasks.md');
    
    // Enter our task list in markdown format
    const taskListMarkdown = `# My Tasks

- [ ] Task 1: Complete the Playwright tutorial
- [ ] Task 2: Learn how to use Codegen
- [ ] Task 3: Add assertions to tests
- [ ] Task 4: Run tests in CI/CD pipeline`;
    
    await page.fill('.js-gist-content .CodeMirror textarea', taskListMarkdown);
    
    // Click the create gist button (works for logged out users too - creates anonymous gist)
    // Note: This action might not complete if login is required - this is just an example
    await page.click('button:has-text("Create public gist")');
    
    // Verify task list is displayed in the rendered markdown
    await expect(page.locator('input[type="checkbox"]')).toHaveCount(4);
    
    // Click on the first task checkbox to mark it as complete
    await page.click('input[type="checkbox"]:nth-child(1)');
    
    // Verify the first task is now checked
    await expect(page.locator('input[type="checkbox"]:checked')).toHaveCount(1);
    
    // Take screenshot for verification
    await page.screenshot({ path: 'github-tasks.png' });
  });
});
```

Remember: The actual implementation might differ based on whether you're logged in to GitHub and what repository you're working with. This is just a conceptual example.
