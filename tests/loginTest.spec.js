import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObjects/LoginPage";

test.describe("Login", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.openUrl();
  });

  test.afterEach(async () => {
    await loginPage.closeBrowser();
  });

  test("should login successfully using valid credentials", async () => {
    await loginPage.validLogin(
      loginPage.validUsername,
      loginPage.validPassword
    );
    await loginPage.verifyProductPage();
  });
});
