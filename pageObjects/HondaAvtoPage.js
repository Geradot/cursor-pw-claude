// @ts-check
export class HondaAvtoPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://honda.kh.ua/avto/');
  }

  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  get signUpButton() {
    return this.page.getByRole('link', { name: /^ЗАПИСАТИСЯ$/ });
  }

  async clickSignUpButton() {
    await this.signUpButton.click();
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

