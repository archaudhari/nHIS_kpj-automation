# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:3:5

# Error details

```
Error: page.selectOption: Test ended.
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
    66 × waiting for element to be visible and enabled
       - element is not visible
     - retrying select option action
       - waiting 500ms

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
  8  |   await page.fill('input[placeholder="Login Name"]', ENV.USERNAME);
> 9  |   await page.fill('input[type="Password"]', ENV.PASSWORD);
     |              ^ Error: page.selectOption: Test ended.
  10 | 
  11 |   await page.click('button:has-text("LOGIN")');
  12 | 
  13 |   await expect(page).toHaveURL(/Dashboard/);
  14 | });
```