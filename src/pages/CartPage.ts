import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

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
    return (await this.page.$$(this.cartItems)).length;
  }
}
