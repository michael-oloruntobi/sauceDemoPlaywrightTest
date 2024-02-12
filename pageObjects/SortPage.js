const { expect } = require("@playwright/test");
const BasePage = require("./BasePage");

class SortPage extends BasePage {
  constructor(page) {
    super(page);
    this.productLabel = this.page.locator("[class='inventory_item_name ']");
    this.productSortLocator = this.page.locator(
      "[data-test='product_sort_container']"
    );
  }

  async verifyProductNameSort(reverse = false) {
    let origArray = [];
    let sortedArray = [];
    let count = await this.page
      .locator("[class='inventory_item_name ']")
      .count();

    for (let i = 0; i < count; ++i) {
      const textContent = await this.page
        .locator("[class='inventory_item_name ']")
        .nth(i)
        .textContent();
      let x = textContent.trim();
      if (x !== "") {
        origArray.push(x);
        sortedArray.push(x);
      }
    }

    sortedArray.sort();
    if (reverse) {
      sortedArray.reverse();
    }
    await expect(sortedArray).toEqual(origArray);
  }

  async changeSorting() {
    await this.productSortLocator.selectOption("za");
  }
}

module.exports = { SortPage };
