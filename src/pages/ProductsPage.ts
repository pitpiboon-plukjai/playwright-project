import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class ProductsPage extends BasePage {
  readonly cartBtn = '.shopping_cart_link';
  readonly productList = '.inventory_item';

  constructor(page: Page) {
    super(page);
  }

  async addToCart(item: string) {
    await this.click(`button[data-test="add-to-cart-${item}"]`);
  }

  async openCart() {
    await this.click(this.cartBtn);
  }
}
