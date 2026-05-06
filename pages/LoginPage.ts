// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Locators
  usernameField = 'input[placeholder="Login Name"]';
  passwordField = 'input[type="Password"]';
  organizationDropdown = '#LocationID';
  cashCounterDropdown = '#CashCounterID';
  loginBtn = 'button:has-text("LOGIN")';

  async login(user: string, pass: string) {
    await this.page.fill(this.usernameField, user);
    await this.page.fill(this.passwordField, pass);

    // Select mandatory options identified from inspection
    await this.page.selectOption(this.organizationDropdown, { label: 'KPJ' });
    await this.page.selectOption(this.cashCounterDropdown, { label: 'ADM5-C-01 (Ward Level 5)' });

    await this.page.click(this.loginBtn);

    // Wait for the dashboard to stabilize to prevent the redirect loop
    await this.page.waitForURL('**/PatientDashboard', { waitUntil: 'networkidle' });
  }
}