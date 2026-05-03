# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:5:5

# Error details

```
Error: page.fill: Test ended.
Call log:
  - waiting for locator('input[placeholder="Username"]')

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   username = 'input[placeholder="Login Name"]';
  7  |   password = 'input[type="Password"]';
  8  |   loginBtn = 'button:has-text("LOGIN")';
  9  | 
  10 |   async goto() {
  11 |     await this.page.goto('/Account/Login/');
  12 |   }
  13 | 
  14 |   async login(user: string, pass: string) {
> 15 |     await this.page.fill(this.username, user);
     |                     ^ Error: page.fill: Test ended.
  16 |     await this.page.fill(this.password, pass);
  17 |     await this.page.click(this.loginBtn);
  18 |   }
  19 | }
```