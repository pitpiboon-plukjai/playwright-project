import { test, expect } from '../fixtures/fixture';
import credentialData from '../testdata/credentialData.json'

test('add items and checkout flow', async ({ loginPage, productsPage, cartPage }) => {
  await loginPage.goto();
  await loginPage.login(credentialData.VALID_USER.username, credentialData.VALID_USER.password);
  await expect(loginPage.page).toHaveURL(/inventory.html/);

  await productsPage.addToCart('sauce-labs-backpack');
  await productsPage.openCart();

  const count = await cartPage.itemCount();
  expect(count).toBe(1);

  await cartPage.checkout();
});
