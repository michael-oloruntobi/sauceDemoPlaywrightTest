import { test, expect } from "@playwright/test";
import { SortPage } from "../pageObjects/SortPage";

test.describe("Login", () => {
  let sortPage;

  test.beforeEach(async ({ page }) => {
    sortPage = new SortPage(page);
    await sortPage.openUrl();
  });

  test.afterEach(async () => {
    await sortPage.closeBrowser();
  });

  test("should verify Product Name Sorting", async () => {
    await sortPage.validLogin(sortPage.validUsername, sortPage.validPassword);
    await sortPage.verifyProductNameSort();
    await sortPage.changeSorting();
    await sortPage.verifyProductNameSort(true);
  });
});
