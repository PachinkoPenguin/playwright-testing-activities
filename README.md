# Playwright Testing Activities

This repository contains four Playwright testing activities for learning web automation testing.

## Prerequisites

Before starting, make sure you have:
- Node.js installed
- npm installed
- VS Code with the following extensions:
  - Playwright Test for VS Code extension
  - Live Server extension for VS Code

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Install required VS Code extensions:
   - Open VS Code command palette (Ctrl+Shift+P)
   - Type "Extensions: Install Extensions" and select it
   - Search for and install:
     - "Playwright Test for VS Code" 
     - "Live Server"
4. Install Playwright browsers:
   ```
   npx playwright install
   ```

## Activities

### Activity 1: Parameterize Login Tests

In this activity, you will:
1. Test GitHub's sign-in page with multiple invalid credentials
2. Create parameterized tests that run with different test data
3. Assert error messages for each invalid login attempt

To run the tests:
```
npx playwright test login.spec.js
```

### Activity 2: Record a Video

In this activity, you will:
1. Use Live Server to host the weather.html page locally
2. Configure Playwright to record videos during test execution
3. Run the weather.spec.js test which interacts with the weather application

Steps:
1. Start Live Server by right-clicking on `public/weather.html` and selecting "Open with Live Server"
2. Run the test:
   ```
   npx playwright test weather.spec.js --video=on
   ```
3. View the recorded video in the test-results folder

### Activity 3: Generate a Test with Playwright Codegen in VS Code

In this activity, you will:
1. Use Playwright's Codegen tool to record interactions with GitHub's task list
2. Learn how to modify the generated code to use proper locators
3. Add assertions to verify the test's success

Steps:
1. Open the command palette (Ctrl+Shift+P)
2. Type and select "Playwright: Record new test"
3. Choose the browser and start recording
4. Navigate to GitHub and interact with the task list
5. Stop the recording and review the generated code
6. Modify the code as needed in the github-tasks.spec.js file

### Activity 4: Generate a Test with Playwright Inspector

In this activity, you will:
1. Use Playwright Inspector to record a test for Mercado Libre website
2. Add assertions to verify content on the page
3. Learn how to debug and modify tests with Playwright Inspector

Steps:
1. Run the following command to start the inspector:
   ```
   npx playwright codegen mercadolibre.com
   ```
2. Interact with the Mercado Libre website
3. Copy the generated code to the mercadolibre.spec.js file
4. Add assertions as needed

## Detailed Documentation

Detailed guides for each activity are available in the `docs` folder:

- [Activity 1: Parameterize Login Tests](docs/Activity1-Guide.md)
- [Activity 2: Record a Video](docs/Activity2-Guide.md)
- [Activity 3: Generate a Test with Playwright Codegen](docs/Activity3-Guide.md)
- [Activity 4: Generate a Test with Playwright Inspector](docs/Activity4-Guide.md)

Additionally, we've provided:
- [Troubleshooting Guide](docs/troubleshooting.md) - Help with common issues
- [Example Solution](docs/example-solution.md) - Reference implementation for Activity 3

## Running All Tests

To run all tests:
```
npx playwright test
```

To run tests with a UI:
```
npx playwright test --ui
```
