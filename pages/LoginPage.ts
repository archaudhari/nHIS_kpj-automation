// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // ── Locators ─────────────────────────────────────────────
  private usernameField        = 'input[placeholder="Login Name"]';
  private passwordField        = 'input[type="Password"]';
  private loginBtn             = 'button:has-text("LOGIN")';
  private organizationDropdown = '#LocationID';
  private cashCounterDropdown  = '#CashCounterID';

  async login(user: string, pass: string) {

    // Step 1: Fill credentials
    await this.page.fill(this.usernameField, user);
    await this.page.fill(this.passwordField, pass);

    // Step 2: Click LOGIN — this ENABLES the org/counter dropdowns
    await this.page.click(this.loginBtn);

    // Step 3: Wait for #LocationID to become ENABLED (not just visible)
    //         The dropdowns are present in DOM but disabled until LOGIN is clicked
    await this.page.waitForFunction(() => {
      const el = document.querySelector('#LocationID') as HTMLSelectElement;
      return el && !el.disabled && el.options.length > 1;
    }, { timeout: 10000 });

    // Step 4: Select Organization
    await this.page.selectOption(this.organizationDropdown, { label: 'KPJ' });

    // Step 5: Wait for CashCounter to populate (may depend on org selection)
    await this.page.waitForFunction(() => {
      const el = document.querySelector('#CashCounterID') as HTMLSelectElement;
      return el && !el.disabled && el.options.length > 1;
    }, { timeout: 10000 });

    // Step 6: Select Cash Counter
    await this.page.selectOption(this.cashCounterDropdown, { label: 'ADM5-C-01 (Ward Level 5)' });

    // Step 7: Click LOGIN again to confirm selection and enter dashboard
    await this.page.click(this.loginBtn);

    // Step 8: Wait for dashboard — networkidle ensures session is fully set
    // Step 8: Wait for dashboard
await this.page.waitForURL('**/PatientDashboard', {
  waitUntil: 'load', // Changed from 'networkidle'
  timeout: 30000,
});
  }
}
