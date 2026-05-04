# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:4:5

# Error details

```
Error: page.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('select[ref=e30]')
    - waiting for" https://devhis.sancyberhad.com/PatientDashboard" navigation to finish...
    - navigated to "https://devhis.sancyberhad.com/PatientDashboard"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ENV } from '../../utils/env';
  3  | 
  4  | test('KPJ Login UI Test', async ({ page }) => {
  5  |   await page.goto(`${ENV.BASE_URL}/Account/Login/`);
  6  | 
  7  |   await page.fill('input[placeholder="Login Name"]', ENV.USERNAME);
  8  |   await page.fill('input[type="Password"]', ENV.PASSWORD);
  9  | 
  10 |   // Select required dropdowns using actual IDs
> 11 | await page.selectOption('#LocationID', { label: 'KPJ' });
     |              ^ Error: page.selectOption: Target page, context or browser has been closed
  12 | await page.selectOption('#CashCounterID', { label: 'ADM5-C-01 (Ward Level 5)' });
  13 | 
  14 |   await page.click('button:has-text("Login")');
  15 | 
  16 |   // ✅ Prefer element-based assertion
  17 |   await expect(page.getByRole('heading', { name: /Patient Dashboard/i })).toBeVisible();
  18 | 
  19 |   // Optional: still check URL, but with regex
  20 |   await expect(page).toHaveURL(/PatientDashboard/);
  21 | });
  22 | 
```