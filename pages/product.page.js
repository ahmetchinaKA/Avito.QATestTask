const { expect } = require('@playwright/test');

exports.ProductPage = class ProductPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.addToFavouritesButton = this.page.locator('[data-marker="item-view/favorite-button"]').and(this.page.locator('.desktop-usq1f1'));
        this.addToFavouritesHeaderButton = this.page.locator('[data-marker="item-view/favorite-button"]').and(this.page.locator('.desktop-i0u0sk'));
    }
};