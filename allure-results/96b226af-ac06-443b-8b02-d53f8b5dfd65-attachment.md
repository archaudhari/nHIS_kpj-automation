# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:5:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/Account/Login/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { ENV } from '../../utils/env';
  4  | 
  5  | test('KPJ Login UI Test', async ({ page }) => {
> 6  |   await page.goto('/Account/Login/');
     |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  7  | 
  8  |   await page.fill('input[placeholder="Login Name"]', ENV.USERNAME);
  9  |   await page.fill('input[type="Password"]', ENV.PASSWORD);
  10 | 
  11 |   await page.click('button:has-text("LOGIN")');
  12 | 
  13 |   await expect(page).toHaveURL('https://devhis.sancyberhad.com/Account/Login/');
  14 | });
```