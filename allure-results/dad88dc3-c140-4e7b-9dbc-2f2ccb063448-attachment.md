# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:5:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('text=KPJ')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { ENV } from '../../utils/env';
  4  | 
  5  | test('KPJ Login UI Test', async ({ page }) => {
  6  |   await page.goto(`${ENV.BASE_URL}/Account/Login/`);
  7  | 
  8  |   // Username & Password
  9  |   await page.fill('input[placeholder="Login Name"]', ENV.USERNAME);
  10 |   await page.fill('input[type="Password"]', ENV.PASSWORD);
  11 | 
  12 |   // ✅ Select Facility
> 13 |   await page.locator('text=KPJ').click();
     |                                  ^ Error: locator.click: Test ended.
  14 | 
  15 |   // OR safer:
  16 |   // await page.locator('select').nth(0).selectOption({ label: 'KPJ' });
  17 | 
  18 |   // ✅ Select Ward / Location
  19 |   await page.locator('text=ADM5-C-01').click();
  20 | 
  21 |   // OR:
  22 |   // await page.locator('select').nth(1).selectOption({ label: 'ADM5-C-01 (Ward Level 5)' });
  23 | 
  24 |   // ✅ Click login and wait for navigation
  25 |   await Promise.all([
  26 |     page.waitForURL('**/PatientDashboard', { timeout: 30000 }),
  27 |     page.click('button:has-text("LOGIN")'),
  28 |     page.waitForTimeout(2000),
  29 |     page.click('button:has-text("LOGIN")')
  30 |   ]);
  31 | 
  32 |   await expect(page.locator('text=PATIENT DASHBOARD')).toBeVisible();
  33 | });
  34 | 
  35 | // await page.click('button:has-text("LOGIN")');
  36 | //   await page.waitForTimeout(2000);
  37 | //   await page.click('button:has-text("LOGIN")');
```