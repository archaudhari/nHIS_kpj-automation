# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:5:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[placeholder="Username"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e9]:
    - heading "Sign in to continue" [level=5] [ref=e11]
    - generic [ref=e12]:
      - generic [ref=e15]:
        - generic [ref=e17]: 
        - textbox "Login Name" [ref=e18]
      - generic [ref=e21]:
        - generic [ref=e23]: 
        - textbox "Password" [ref=e24]
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
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   username = 'input[placeholder="Username"]';
  7  |   password = 'input[type="password"]';
  8  |   loginBtn = 'button:has-text("LOGIN")';
  9  | 
  10 |   async goto() {
  11 |     await this.page.goto('/Account/Login/');
  12 |   }
  13 | 
  14 |   async login(user: string, pass: string) {
> 15 |     await this.page.fill(this.username, user);
     |                     ^ Error: page.fill: Test timeout of 60000ms exceeded.
  16 |     await this.page.fill(this.password, pass);
  17 |     await this.page.click(this.loginBtn);
  18 |   }
  19 | }
```