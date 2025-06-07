# Project Structure

Generated on: Fri Jun  6 11:32:03 PM CST 2025

```
./docs/Activity1-Guide.md
./docs/Activity2-Guide.md
./docs/Activity3-Guide.md
./docs/Activity4-Guide.md
./docs/example-solution.md
./docs/troubleshooting.md
./generate-structure.sh
./package.json
./package-lock.json
./playwright.config.js
./playwright-report/data/113e574ca7d8f49905ce7bfabf6bdfd76e2a27ac.webm
./playwright-report/data/745e27793a361985cd6152c244eec4a6aa6ddfb5.webm
./playwright-report/data/85b36b6678b0208c2fa4e077053955ffab7b3faa.webm
./playwright-report/data/be6f624a65ffbdbb9e78aba2b5885dce3410778c.webm
./playwright-report/index.html
./PROJECT_STRUCTURE.md
./public/weather.html
./README.md
./tests/github-tasks.spec.js
./tests/login.spec.js
./tests/mercadolibre.spec.js
./tests/weather.spec.js
```

# Files Content

## playwright.config.js

```
javascript
// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    video: 'on',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

## README.md

```
markdown
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
```

## tests/github-tasks.spec.js

```
javascript
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('GitHub Tasks', () => {
  test('should add items to task list', async ({ page }) => {
    // This test will be generated using Playwright Codegen
    // You will replace this with the generated test
    
    // Example structure:
    // await page.goto('https://github.com');
    // await page.click(...);
    // await expect(page.locator(...)).toBeVisible();
  });
});
```

## tests/login.spec.js

```
javascript
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
```

## tests/mercadolibre.spec.js

```
javascript
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Mercado Libre Tests', () => {
  test('should browse products and verify content', async ({ page }) => {
    // This test will be generated using Playwright Inspector
    // You will replace this with the generated test
    
    // Example structure:
    // await page.goto('https://mercadolibre.com');
    // await page.click(...);
    // await expect(page.locator(...)).toContainText(...);
  });
});
```

## tests/weather.spec.js

```
javascript
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Weather App Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the weather app served by Live Server
    await page.goto('/weather.html');
  });

  test('should display weather forecast when valid inputs are provided', async ({ page }) => {
    // Fill in the form
    await page.fill('#city', 'New York');
    await page.selectOption('#country', 'US');
    await page.selectOption('#days', '5');
    
    // Click the Get Weather button
    await page.click('#getWeather');
    
    // Assert that weather results are displayed
    const weatherResult = page.locator('#weather-result');
    await expect(weatherResult).toBeVisible();
    
    // Check that the location is correct
    await expect(page.locator('#location-name')).toContainText('New York, US');
    
    // Verify that temperature, humidity, and wind are displayed
    await expect(page.locator('#temperature')).toBeVisible();
    await expect(page.locator('#humidity')).toBeVisible();
    await expect(page.locator('#wind')).toBeVisible();
  });

  test('should show error when city is not provided', async ({ page }) => {
    // Leave city empty
    await page.selectOption('#country', 'US');
    await page.click('#getWeather');
    
    // Assert that error message is displayed
    const errorMessage = page.locator('#error-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Please enter a city name');
  });
  
  test('should show error when country is not selected', async ({ page }) => {
    // Fill in city but leave country empty
    await page.fill('#city', 'London');
    await page.click('#getWeather');
    
    // Assert that error message is displayed
    const errorMessage = page.locator('#error-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Please select a country');
  });
  
  test('should change forecast days when different option is selected', async ({ page }) => {
    // Fill in the form
    await page.fill('#city', 'Paris');
    await page.selectOption('#country', 'FR');
    
    // Select different forecast days
    await page.selectOption('#days', '7');
    
    // Assert that 7 days is selected
    const selectedOption = await page.$eval('#days', el => el.value);
    expect(selectedOption).toBe('7');
  });
});
```

## public/weather.html

```
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .weather-app {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, select, button {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background-color: #45a049;
        }
        .weather-result {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            display: none;
        }
        .weather-icon {
            font-size: 40px;
            text-align: center;
            margin: 10px 0;
        }
        .weather-details {
            display: flex;
            justify-content: space-between;
        }
        .weather-details div {
            text-align: center;
            padding: 10px;
            width: 30%;
        }
        .error {
            color: red;
            margin-top: 10px;
            display: none;
        }
    </style>
</head>
<body>
    <div class="weather-app">
        <h1>Weather Forecast</h1>
        
        <div class="form-group">
            <label for="city">City:</label>
            <input type="text" id="city" placeholder="Enter city name">
        </div>
        
        <div class="form-group">
            <label for="country">Country:</label>
            <select id="country">
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="JP">Japan</option>
                <option value="BR">Brazil</option>
                <option value="IN">India</option>
                <option value="CN">China</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="days">Days to forecast:</label>
            <select id="days">
                <option value="1">Today</option>
                <option value="3">3 Days</option>
                <option value="5">5 Days</option>
                <option value="7">7 Days</option>
            </select>
        </div>
        
        <button id="getWeather">Get Weather</button>
        
        <div class="error" id="error-message"></div>
        
        <div class="weather-result" id="weather-result">
            <h2 id="location">Weather for <span id="location-name">City</span></h2>
            
            <div class="weather-icon">
                <span id="weather-icon">☀️</span>
            </div>
            
            <div class="weather-description">
                <p id="weather-description">Sunny</p>
            </div>
            
            <div class="weather-details">
                <div>
                    <h3>Temperature</h3>
                    <p id="temperature">25°C</p>
                </div>
                <div>
                    <h3>Humidity</h3>
                    <p id="humidity">65%</p>
                </div>
                <div>
                    <h3>Wind</h3>
                    <p id="wind">10 km/h</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.getElementById('getWeather').addEventListener('click', function() {
            const city = document.getElementById('city').value.trim();
            const country = document.getElementById('country').value;
            const days = document.getElementById('days').value;
            
            // Reset error message
            const errorMessage = document.getElementById('error-message');
            errorMessage.style.display = 'none';
            
            // Validate inputs
            if (city === '') {
                errorMessage.textContent = 'Please enter a city name';
                errorMessage.style.display = 'block';
                return;
            }
            
            if (country === '') {
                errorMessage.textContent = 'Please select a country';
                errorMessage.style.display = 'block';
                return;
            }
            
            // Show weather result (in a real app, this would come from an API)
            const weatherResult = document.getElementById('weather-result');
            weatherResult.style.display = 'block';
            
            // Update weather data with mock data
            document.getElementById('location-name').textContent = city + ', ' + country;
            
            // Set random weather data for demo purposes
            const weatherTypes = ['☀️ Sunny', '⛅ Partly Cloudy', '☁️ Cloudy', '🌧️ Rainy', '⛈️ Stormy', '❄️ Snowy'];
            const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
            const randomTemp = Math.floor(Math.random() * 35) + 5;
            const randomHumidity = Math.floor(Math.random() * 60) + 30;
            const randomWind = Math.floor(Math.random() * 30) + 5;
            
            document.getElementById('weather-icon').textContent = randomWeather.split(' ')[0];
            document.getElementById('weather-description').textContent = randomWeather.split(' ')[1];
            document.getElementById('temperature').textContent = randomTemp + '°C';
            document.getElementById('humidity').textContent = randomHumidity + '%';
            document.getElementById('wind').textContent = randomWind + ' km/h';
        });
    </script>
</body>
</html>
```

## docs/Activity1-Guide.md

```
markdown
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
```

## docs/Activity2-Guide.md

```
markdown
# Activity 2: Record a Video

## Overview
This activity demonstrates how to record videos of your test executions in Playwright, which is useful for debugging and documentation purposes.

## Instructions

1. Start the Live Server:
   - Install the Live Server extension in VS Code if you haven't already
   - Right-click on `public/weather.html` and select "Open with Live Server"
   - The weather app should open in your browser at http://localhost:5500/public/weather.html

2. Open the `tests/weather.spec.js` file to review the test cases

3. Run the weather tests with video recording enabled:
   ```
   npm run test:weather
   ```

4. After the tests complete, navigate to the `test-results` directory to view the recorded videos

## What to Learn
- How to serve a static HTML file using Live Server
- How to configure Playwright to record videos during test execution
- How to review and analyze test recordings

## Expected Outcome
The tests will run successfully against the weather app, and you'll have video recordings of the test execution showing how the app behaves during testing.
```

## docs/Activity3-Guide.md

```
markdown
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
```

## docs/Activity4-Guide.md

```
markdown
# Activity 4: Generate a Test with Playwright Inspector

## Overview
This activity teaches you how to use the Playwright Inspector to record and generate a test script for the Mercado Libre website. The Playwright Inspector provides a more interactive way to record tests compared to Codegen.

## Instructions

1. Open a terminal in your project directory

2. Run the following command to start the Playwright Inspector and begin recording:
   ```
   npm run codegen -- mercadolibre.com
   ```

3. In the browser that opens, perform these actions on the Mercado Libre website:
   - Search for a product (e.g., "laptop")
   - Filter the results (e.g., by price, brand, etc.)
   - Open a product listing
   - Add a product to your cart (if possible without logging in)
   - Navigate to different categories

4. As you interact with the site, observe how the Playwright Inspector records your actions and generates code in real-time

5. When done, copy the generated code to `tests/mercadolibre.spec.js`, replacing the placeholder content

6. Enhance the generated test by:
   - Adding assertions to verify page content
   - Using more stable locators when needed
   - Adding comments to explain the test flow
   - Organizing the test into logical sections

7. Run your test to verify it works:
   ```
   npx playwright test mercadolibre.spec.js
   ```

## What to Learn
- How to use Playwright Inspector to record user interactions
- How to add meaningful assertions to verify website content and behavior
- How to debug and modify a recorded test
- How to handle dynamic content on e-commerce websites

## Expected Outcome
You'll have a robust test that automates interactions with the Mercado Libre website and verifies the content displayed on the page.
```

## docs/example-solution.md

```
markdown
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
```

## docs/troubleshooting.md

```
markdown
# Troubleshooting Guide

## Common Issues and Solutions

### Live Server Issues

**Problem**: Live Server doesn't start or the page doesn't load properly.
**Solution**: 
1. Make sure the Live Server extension is installed in VS Code.
2. Try right-clicking the HTML file and selecting "Open with Live Server" again.
3. Check if port 5500 is already in use by another application.
4. Restart VS Code and try again.

### Playwright Installation Issues

**Problem**: Missing browser dependencies.
**Solution**:
1. Run `npx playwright install-deps` to install required system dependencies.
2. If that fails, check the Playwright documentation for your specific OS.

### Test Failures

**Problem**: Tests fail with "Element not found" errors.
**Solution**:
1. Check if your locators are correct and stable.
2. Add proper waiting mechanisms with `await expect(page.locator(...)).toBeVisible()` before interacting.
3. Use more specific locators that won't be affected by page changes.

**Problem**: Tests fail with timeout errors.
**Solution**:
1. Increase timeouts in the test or playwright.config.js.
2. Check network connectivity if tests interact with remote sites.
3. Check if the application is slow to respond.

### Video Recording Issues

**Problem**: Videos not being recorded or blank videos.
**Solution**:
1. Make sure you're running with the `--video=on` flag.
2. Check the test-results directory for any error logs.
3. Check if you have sufficient disk space.

### Codegen and Inspector Issues

**Problem**: Codegen or Inspector doesn't start properly.
**Solution**:
1. Make sure you have the latest version of Playwright installed.
2. Check if a required browser is missing with `npx playwright install`.
3. Try running with explicit browser `npx playwright codegen --browser=chromium`.

## Getting Help

If you encounter issues not covered here:
1. Check the official Playwright documentation: https://playwright.dev/docs/intro
2. Search for issues on the Playwright GitHub repository.
3. Ask questions on Stack Overflow with the "playwright" tag.
```

