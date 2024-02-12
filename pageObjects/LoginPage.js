const { expect } = require("@playwright/test");
const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageTitle = this.page.locator("[class='title']");
  }

  async verifyProductPage() {
    await expect(this.pageTitle).toHaveText("Products");
  }
}

module.exports = { LoginPage };
