import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  readonly username = '#user-name';
  readonly password = '#password';
  readonly loginBtn = '#login-button';
  readonly errorMsg = '[data-test="error"]';

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigateTo('/');
  }

  async login(user: string, pass: string) {
    await this.type(this.username, user);
    await this.type(this.password, pass);
    await this.click(this.loginBtn);
  }
}
