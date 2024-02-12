const { test, chromium } = require("playwright");
const assert = require("assert");
const { expect } = require("@playwright/test");

class BasePage {
  constructor(page) {
    this.page = page;
    this.validUsername = process.env.USERNAME;
    this.validPassword = process.env.PASSWORD;
    this.username = this.page.locator("[data-test='username']");
    this.password = this.page.locator("[data-test='password']");
    this.signInbutton = this.page.locator("[data-test='login-button']");
  }

  async openUrl() {
    await this.page.goto("/");
  }

  async closeBrowser() {
    await this.page.close();
  }

  async validLogin(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signInbutton.click();
  }
}
module.exports = BasePage;
