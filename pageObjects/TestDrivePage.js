// @ts-check
export class TestDrivePage {
  constructor(page) {
    this.page = page;
  }

  get testDriveHeading() {
    return this.page.getByRole('heading', { name: 'Записатися на тест-драйв', level: 3 });
  }

  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  get facebookLink() {
    return this.page.getByRole('link', { name: /^facebook$/i });
  }

  get youtubeLink() {
    return this.page.getByRole('link', { name: /^youtube$/i });
  }

  get instagramLink() {
    return this.page.getByRole('link', { name: /^instagram$/i });
  }
}
