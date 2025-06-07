# Activity 3: Generate a Test with Playwright Codegen in VS Code

## Overview
This activity teaches you how to use the Playwright Codegen tool in VS Code to automatically generate test code by recording your interactions with a website.

## Instructions

1. Make sure you have the Playwright Test for VS Code extension installed

2. Open the Command Palette in VS Code:
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "Playwright: Record new test" and select it

3. Choose the browser you want to use for recording (e.g., Chromium)

4. Navigate to GitHub and perform these actions:
   - Go to GitHub.com
   - Create a new issue or navigate to a repository's issue tab
   - Add items to a task list using the markdown checkbox syntax (`- [ ] Task 1`)
   - Check/uncheck some of the tasks
   - Add some text content

5. When done, stop the recording by closing the browser window

6. VS Code will generate the test code for you

7. Copy the generated code to `tests/github-tasks.spec.js`, replacing the placeholder content

8. Enhance the generated test by:
   - Adding meaningful locators for better readability
   - Adding assertions to verify the tasks were added correctly
   - Adding comments to explain the test flow

9. Run your test to verify it works:
   ```
   npx playwright test github-tasks.spec.js
   ```

## What to Learn
- How to use Playwright Codegen to record and generate tests
- How to improve automatically generated tests with better locators
- How to add assertions to verify expected behavior

## Expected Outcome
You'll have a working test that automates the process of adding tasks to a GitHub issue or markdown document, with appropriate assertions to verify the tasks were added correctly.
