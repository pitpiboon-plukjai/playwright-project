import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class CartPage extends BasePage {
  readonly checkoutBtn = '#checkout';
  readonly cartItems = '.cart_item';

  constructor(page: Page) {
    super(page);
  }

  async checkout() {
    await this.click(this.checkoutBtn);
  }

  async itemCount() {
    return this.page.locator(this.cartItems).count();
  }

  async expectItemCount(count: number) {
    await expect(this.page.locator(this.cartItems)).toHaveCount(count);
  }
}
