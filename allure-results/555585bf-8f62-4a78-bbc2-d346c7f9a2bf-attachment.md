# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:10:5

# Error details

```
Test timeout of 100000ms exceeded.
```

```
Error: page.selectOption: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('#LocationID')
    - locator resolved to <select id="LocationID" name="LocationID" ng-model="LocationID" ng-change="getCashCounter()" ng-options="item.value as item.text  for item in drpLocationList" class="form-control placeholder validate[required] b-l-r-t ng-pristine ng-untouched ng-valid"></select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - element is not visible
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - element is not visible
    - retrying select option action
      - waiting 100ms
    191 × waiting for element to be visible and enabled
        - element is not visible
      - retrying select option action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e9]:
    - heading "Sign in to continue" [level=5] [ref=e11]
    - generic [ref=e12]:
      - generic [ref=e15]:
        - generic [ref=e17]: 
        - textbox "Login Name" [ref=e18]: Test_KPJ
      - generic [ref=e21]:
        - generic [ref=e23]: 
        - textbox "Password" [active] [ref=e24]: Ajay@123
      - text:  
      - generic [ref=e26]:
        - button "Login" [ref=e27] [cursor=pointer]
        - link "Forgot Password?" [ref=e29] [cursor=pointer]:
          - /url: /Account/ForgotPassword
  - contentinfo [ref=e32]:
    - paragraph [ref=e34]: "E-mail : info@sancyberhad.com | All Rights Reserved © SANCY BERHAD. 2024"
```

# Test source

```ts
  1  | 
  2  | import { Page } from '@playwright/test';
  3  | 
  4  | export class LoginPage {
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   // ── Locators ─────────────────────────────────────────────
  8  |   // TODO: Inspect the login page and confirm these selectors.
  9  |   //       Right-click each field → Inspect → copy attribute.
  10 |   private usernameField     = 'input[placeholder="Login Name"]';   // TODO: confirm placeholder text
  11 |   private passwordField     = 'input[type="Password"]';            // TODO: confirm input type casing
  12 |   private organizationDropdown = '#LocationID';                    // TODO: confirm select element ID
  13 |   private cashCounterDropdown  = '#CashCounterID';                 // TODO: confirm select element ID
  14 |   private loginBtn          = 'button:has-text("LOGIN")';          // TODO: confirm button text
  15 | 
  16 |   // ── login() ──────────────────────────────────────────────
  17 |   async login(user: string, pass: string) {
  18 | 
  19 |     // 1. Fill username
  20 |     await this.page.fill(this.usernameField, user);
  21 | 
  22 |     // 2. Fill password
  23 |     await this.page.fill(this.passwordField, pass);
  24 | 
  25 |     // 3. Select Organization
  26 |     //    TODO: Replace 'KPJ' with the exact <option> label visible in the dropdown.
  27 |     //          Open DevTools → select the <select id="LocationID"> → check <option> text.
> 28 |     await this.page.selectOption(this.organizationDropdown, { label: 'KPJ' });
     |                     ^ Error: page.selectOption: Test timeout of 100000ms exceeded.
  29 | 
  30 |     // 4. Select Cash Counter
  31 |     //    TODO: Replace label value with the exact option shown for your test user.
  32 |     //          Common values: 'ADM5-C-01 (Ward Level 5)' — verify in DevTools.
  33 |     await this.page.selectOption(this.cashCounterDropdown, { label: 'ADM5-C-01 (Ward Level 5)' });
  34 | 
  35 |     // 5. Click LOGIN
  36 |     await this.page.click(this.loginBtn);
  37 | 
  38 |     // 6. Wait for dashboard — networkidle ensures the session cookie is
  39 |     //    fully written before any next navigation attempt.
  40 |     await this.page.waitForURL('**/PatientDashboard', {
  41 |       waitUntil: 'networkidle',
  42 |       timeout: 30000,
  43 |     });
  44 |   }
  45 | }
  46 | 
```