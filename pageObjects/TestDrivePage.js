// @ts-check
import { expect } from '@playwright/test';

/**
 * Page Object Model for Test Drive page
 * https://honda.kh.ua/test_drive-ua/
 */
export class TestDrivePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Verify the URL contains '/test_drive-ua'
   */
  async verifyUrl() {
    await expect(this.page).toHaveURL(/.*test_drive-ua.*/);
  }

  /**
   * Get the "Записатися на тест-драйв" heading locator
   * Discovered via MCP: heading level 3 with text "Записатися на тест-драйв"
   */
  get testDriveHeading() {
    return this.page.getByRole('heading', { name: 'Записатися на тест-драйв', level: 3 });
  }

  /**
   * Verify the "Записатися на тест-драйв" message is displayed on the screen viewport
   */
  async verifyTestDriveHeadingDisplayed() {
    await expect(this.testDriveHeading).toBeVisible();
  }

  /**
   * Scroll page to the bottom
   */
  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  /**
   * Get Facebook social media link locator
   * Discovered via MCP: link with accessible name "facebook"
   */
  get facebookLink() {
    return this.page.getByRole('link', { name: 'facebook' });
  }

  /**
   * Get YouTube social media link locator
   * Discovered via MCP: link with accessible name "youtube"
   */
  get youtubeLink() {
    return this.page.getByRole('link', { name: 'youtube' });
  }

  /**
   * Get Instagram social media link locator
   * Discovered via MCP: link with accessible name "instagram"
   */
  get instagramLink() {
    return this.page.getByRole('link', { name: 'instagram' });
  }

  /**
   * Verify all social media links are displayed
   */
  async verifySocialMediaLinksDisplayed() {
    await expect(this.facebookLink).toBeVisible();
    await expect(this.youtubeLink).toBeVisible();
    await expect(this.instagramLink).toBeVisible();
  }
}
