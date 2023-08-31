const { test, expect } = require ('@playwright/test');
const { ProductPage } = require('../pages/product.page');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.avito.ru/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363');
});

test ('add an advert to favorites', async ({ page }) => {
  //Arrange
  const product = new ProductPage(page);

  //Act
  await product.addToFavouritesButton.click();

  //Asserts
  await expect(product.addToFavouritesButton).toContainText('В избранном');
  await expect(product.addToFavouritesButton).toHaveAttribute('data-is-favorite', 'true');
  await expect(product.addToFavouritesButton.locator('svg')).toHaveAttribute('data-icon', 'favorites-filled');
  await expect(product.addToFavouritesButton.locator('svg')).toHaveAttribute('name', 'favorites-filled');

  await expect(product.addToFavouritesHeaderButton).toHaveAttribute('data-is-favorite', 'true');
  await expect(product.addToFavouritesHeaderButton.locator('svg')).toHaveAttribute('data-icon', 'favorites-filled');
  await expect(product.addToFavouritesHeaderButton.locator('svg')).toHaveAttribute('name', 'favorites-filled');
});