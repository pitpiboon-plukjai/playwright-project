import { test, expect } from '../fixtures/fixture';
import credentialData from '../testdata/credentialData.json'

test('valid login success', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(credentialData.VALID_USER.username, credentialData.VALID_USER.password);

  await expect(page).toHaveURL(/inventory.html/);
});

test('invalid login shows error', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(credentialData.INVALID_USER.username, credentialData.INVALID_USER.password);

  await expect(loginPage.page.locator(loginPage.errorMsg))
    .toContainText('Username and password do not match');
});

  test('should show error with locked credentials', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(credentialData.LOCKED_USER.username, credentialData.LOCKED_USER.password);

  await expect(loginPage.page.locator(loginPage.errorMsg))
  .toContainText('Epic sadface: Sorry, this user has been locked out.');
});
