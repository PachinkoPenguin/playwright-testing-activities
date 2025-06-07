# Activity 1: Parameterize Login Tests

## Overview
In this activity, you will run parameterized tests that attempt to login to GitHub with invalid credentials and verify the appropriate error messages are displayed.

## Instructions

1. Open the `tests/login.spec.js` file to review the test cases
2. Note how the test is parameterized with an array of objects containing:
   - username
   - password
   - expectedError message
3. Run the login tests with:
   ```
   npm run test:login
   ```
4. Review the test results and screenshots in the test-results folder

## What to Learn
- How to parameterize tests to run multiple scenarios with different test data
- How to verify error messages appear correctly
- How to take screenshots during test execution for debugging

## Expected Outcome
All tests should pass, showing that GitHub correctly displays appropriate error messages for invalid login attempts.
