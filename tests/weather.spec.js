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
