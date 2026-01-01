// @ts-check
import { expect } from '@playwright/test';

/**
 * Page Object Model for Honda Avto page
 * https://honda.kh.ua/avto/
 */
export class HondaAvtoPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to the avto page
   */
  async goto() {
    await this.page.goto('https://honda.kh.ua/avto/');
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
   * Get the "ЗАПИСАТИСЯ" button locator
   * Discovered via MCP: link with accessible name "ЗАПИСАТИСЯ"
   */
  get zapisatysyaButton() {
    return this.page.getByRole('link', { name: 'ЗАПИСАТИСЯ' });
  }

  /**
   * Click on the "ЗАПИСАТИСЯ" button
   */
  async clickZapisatysyaButton() {
    await this.zapisatysyaButton.click();
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

