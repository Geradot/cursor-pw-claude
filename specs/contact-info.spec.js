// @ts-check
import { test, expect } from '@playwright/test';
import { HondaAvtoPage } from '../pageObjects/HondaAvtoPage.js';

test.describe('Contact Information Verification', () => {
  test('should verify social links, phone numbers and emails are displayed', async ({ page }) => {
    const avtoPage = new HondaAvtoPage(page);

    await avtoPage.goto();
    await avtoPage.scrollToBottom();

    await expect(avtoPage.facebookLink).toBeVisible();
    await expect(avtoPage.youtubeLink).toBeVisible();
    await expect(avtoPage.instagramLink).toBeVisible();

    await expect(avtoPage.firstPhoneNumber).toBeVisible();
    await expect(avtoPage.secondPhoneNumber).toBeVisible();

    await expect(avtoPage.firstEmail).toBeVisible();
    await expect(avtoPage.secondEmail).toBeVisible();
  });
});

