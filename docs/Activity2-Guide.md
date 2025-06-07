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
