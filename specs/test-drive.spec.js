// @ts-check
import { test, expect } from '@playwright/test';
import { HondaAvtoPage } from '../pageObjects/HondaAvtoPage.js';
import { TestDrivePage } from '../pageObjects/TestDrivePage.js';

test.describe('Test Drive Flow', () => {
  test('should navigate to test drive page and verify elements', async ({ page }) => {
    const avtoPage = new HondaAvtoPage(page);
    const testDrivePage = new TestDrivePage(page);

    // Step 1: Visit 'https://honda.kh.ua/avto/'
    await avtoPage.goto();

    // Step 2: Scroll page to the bottom
    await avtoPage.scrollToBottom();

    // Step 3: Click on the 'ЗАПИСАТИСЯ' button
    await avtoPage.clickZapisatysyaButton();

    // Step 4: Verify the url, it should contain '/test_drive-ua' value
    await testDrivePage.verifyUrl();

    // Step 5: Verify the 'Записатися на тест-драйв' message is displayed on the screen viewport
    await testDrivePage.verifyTestDriveHeadingDisplayed();

    // Step 6: Scroll page to the bottom
    await testDrivePage.scrollToBottom();

    // Step 7: Verify the social media links are displayed
    await testDrivePage.verifySocialMediaLinksDisplayed();
  });
});

