# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
Error: page.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('button:has-text("LOGIN")')
    - locator resolved to <button type="button" ng-click="fnLogin();" class="btn btn-primary center-block btn-flat login-btn-login">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | // pages/LoginPage.ts
  2  | import { Page } from '@playwright/test';
  3  | 
  4  | export class LoginPage {
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   // ── Locators ─────────────────────────────────────────────
  8  |   private usernameField        = 'input[placeholder="Login Name"]';
  9  |   private passwordField        = 'input[type="Password"]';
  10 |   private loginBtn             = 'button:has-text("LOGIN")';
  11 |   private organizationDropdown = '#LocationID';
  12 |   private cashCounterDropdown  = '#CashCounterID';
  13 | 
  14 |   async login(user: string, pass: string) {
  15 | 
  16 |     // Step 1: Fill credentials
  17 |     await this.page.fill(this.usernameField, user);
  18 |     await this.page.fill(this.passwordField, pass);
  19 | 
  20 |     // Step 2: Click LOGIN — this ENABLES the org/counter dropdowns
  21 |     await this.page.click(this.loginBtn);
  22 | 
  23 |     // Step 3: Wait for #LocationID to become ENABLED (not just visible)
  24 |     //         The dropdowns are present in DOM but disabled until LOGIN is clicked
  25 |     await this.page.waitForFunction(() => {
  26 |       const el = document.querySelector('#LocationID') as HTMLSelectElement;
  27 |       return el && !el.disabled && el.options.length > 1;
  28 |     }, { timeout: 10000 });
  29 | 
  30 |     // Step 4: Select Organization
  31 |     await this.page.selectOption(this.organizationDropdown, { label: 'KPJ' });
  32 | 
  33 |     // Step 5: Wait for CashCounter to populate (may depend on org selection)
  34 |     await this.page.waitForFunction(() => {
  35 |       const el = document.querySelector('#CashCounterID') as HTMLSelectElement;
  36 |       return el && !el.disabled && el.options.length > 1;
  37 |     }, { timeout: 10000 });
  38 | 
  39 |     // Step 6: Select Cash Counter
  40 |     await this.page.selectOption(this.cashCounterDropdown, { label: 'ADM5-C-01 (Ward Level 5)' });
  41 | 
  42 |     // Step 7: Click LOGIN again to confirm selection and enter dashboard
> 43 |     await this.page.click(this.loginBtn);
     |                     ^ Error: page.click: Target page, context or browser has been closed
  44 | 
  45 |     // Step 8: Wait for dashboard — networkidle ensures session is fully set
  46 |     // Step 8: Wait for dashboard
  47 | await this.page.waitForURL('**/PatientDashboard', {
  48 |   waitUntil: 'load', // Changed from 'networkidle'
  49 |   timeout: 30000,
  50 | });
  51 |   }
  52 | }
  53 | 
```