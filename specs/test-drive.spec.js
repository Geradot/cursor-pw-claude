// @ts-check
import { test, expect } from '@playwright/test';
import { HondaAvtoPage } from '../pageObjects/HondaAvtoPage.js';
import { TestDrivePage } from '../pageObjects/TestDrivePage.js';

test.describe('Test Drive Flow', () => {
  test('should navigate to test drive page and verify elements', async ({ page }) => {
    const avtoPage = new HondaAvtoPage(page);
    const testDrivePage = new TestDrivePage(page);

    await avtoPage.goto();
    await avtoPage.scrollToBottom();
    await avtoPage.clickSignUpButton();

    await expect(page).toHaveURL(/.*test_drive-ua.*/);
    await expect(testDrivePage.testDriveHeading).toBeVisible();

    await testDrivePage.scrollToBottom();

    await expect(testDrivePage.facebookLink).toBeVisible();
    await expect(testDrivePage.youtubeLink).toBeVisible();
    await expect(testDrivePage.instagramLink).toBeVisible();
  });
});

