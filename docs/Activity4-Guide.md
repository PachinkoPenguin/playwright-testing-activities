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
