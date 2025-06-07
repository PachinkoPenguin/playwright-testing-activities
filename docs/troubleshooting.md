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
