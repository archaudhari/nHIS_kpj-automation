# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:3:5

# Error details

```
Error: page.click: Test ended.
Call log:
  - waiting for locator('button:has-text("Login")')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('KPJ Login UI Test', async ({ page }) => {
  4  |   await page.goto(`${process.env.BASE_URL}/Account/Login/`);
  5  | 
  6  |   await page.fill('#Username', process.env.KPJ_USERNAME || '');
  7  |   await page.fill('#Password', process.env.KPJ_PASSWORD || '');
  8  | 
  9  |   await page.selectOption('#LocationID', { label: 'KPJ' });
  10 |   await page.selectOption('#CashCounterID', { label: 'ADM5-C-01 (Ward Level 5)' });
  11 | 
  12 |   // Click login twice
  13 |   await page.click('button:has-text("Login")');
  14 |   await page.waitForTimeout(20);
> 15 |   await page.click('button:has-text("Login")');
     |              ^ Error: page.click: Test ended.
  16 | 
  17 |   // First wait for URL change
  18 |   await page.waitForURL(/PatientDashboard/, { timeout: 60000 });
  19 | 
  20 |   // Then assert a stable element on the dashboard
  21 |   await expect(page.locator('text=PATIENT DASHBOARD')).toBeVisible();
  22 | });
  23 | 
```