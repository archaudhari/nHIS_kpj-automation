# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:8:5

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
    189 × waiting for element to be visible and enabled
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
  1  | // pages/LoginPage.ts
  2  | import { Page } from '@playwright/test';
  3  | 
  4  | export class LoginPage {
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   // Locators
  8  |   usernameField = 'input[placeholder="Login Name"]';
  9  |   passwordField = 'input[type="Password"]';
  10 |   organizationDropdown = '#LocationID';
  11 |   cashCounterDropdown = '#CashCounterID';
  12 |   loginBtn = 'button:has-text("LOGIN")';
  13 | 
  14 |   async login(user: string, pass: string) {
  15 |     await this.page.fill(this.usernameField, user);
  16 |     await this.page.fill(this.passwordField, pass);
  17 | 
  18 |     // Select mandatory options identified from inspection
> 19 |     await this.page.selectOption(this.organizationDropdown, { label: 'KPJ' });
     |                     ^ Error: page.selectOption: Test timeout of 100000ms exceeded.
  20 |     await this.page.selectOption(this.cashCounterDropdown, { label: 'ADM5-C-01 (Ward Level 5)' });
  21 | 
  22 |     await this.page.click(this.loginBtn);
  23 | 
  24 |     // Wait for the dashboard to stabilize to prevent the redirect loop
  25 |     await this.page.waitForURL('**/PatientDashboard', { waitUntil: 'networkidle' });
  26 |   }
  27 | }
```