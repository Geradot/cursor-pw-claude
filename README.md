# Playwright Test Automation Project

## Summary

This project contains automated end-to-end tests for the Honda Ukraine website (https://honda.kh.ua/avto/) using Playwright test framework. The tests are structured using the Page Object Model (POM) pattern to ensure maintainability and reusability.

The test suite includes:
- **Test Drive Flow**: Verifies navigation to the test drive page and displays of required elements
- **Contact Information Verification**: Validates the visibility of social media links, phone numbers, and email addresses on the main page

All tests use Playwright MCP (Model Context Protocol) for locator discovery and validation, ensuring reliable and accessible selectors.

## Requirements

- **Node.js**: Version 20 or higher
- **npm**: (comes with Node.js)

## Steps to Install

1. **Install Node.js dependencies**

   Open your terminal in the project root directory and run:

   ```
   npm install
   ```

   This command will install all required dependencies including:
   - `@playwright/test` - Playwright test framework
   - `@executeautomation/playwright-mcp-server` - Playwright MCP server integration

2. **Install Playwright browsers**

   After installing npm dependencies, install the Playwright browsers:

   ```
   npx playwright install
   ```

   This will download the necessary browser binaries (Chromium, Firefox, WebKit) required to run the tests.

## Steps to Run

1. **Run all tests**

   To execute all test files in the `specs` directory:

   ```
   npx playwright test
   ```

2. **Run a specific test file**

   To run only the test drive flow test:

   ```
   npx playwright test specs/test-drive.spec.js
   ```

   To run only the contact information verification test:

   ```
   npx playwright test specs/contact-info.spec.js
   ```

3. **Run tests in headed mode (with browser UI)**

   To see the browser while tests are running:

   ```
   npx playwright test --headed
   ```

4. **Run tests in debug mode**

   To run tests in debug mode with Playwright Inspector:

   ```
   npx playwright test --debug
   ```

5. **View test report**

   After running tests, view the HTML report:

   ```
   npx playwright show-report
   ```

   This will open the test report in your default browser, showing test results, screenshots, and execution details.

