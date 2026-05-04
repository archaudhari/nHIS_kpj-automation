# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /Patient Dashboard/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: /Patient Dashboard/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - text: Tele Consultation (Click here to move)
      - generic [ref=e4]: X
    - generic [ref=e6]:
      - generic [ref=e8] [cursor=pointer]: 100%|
      - generic [ref=e10] [cursor=pointer]: 50%|
      - text: "|"
      - generic [ref=e12] [cursor=pointer]: 25%
    - iframe [ref=e13]:
      
  - generic [ref=e14]:
    - banner:
      - text:  
      - navigation [ref=e15]:
        - generic [ref=e16]:
          - heading "Transfer" [level=1] [ref=e18]
          - list [ref=e20]:
            - listitem [ref=e21]:
              - generic [ref=e22]: "Welcome: Employee 1338:(KPJ)"
            - listitem [ref=e23]:
              - generic [ref=e24]: "Last Login : 05/05/2026 02:50:05"
            - listitem [ref=e25]:
              - link "" [ref=e27] [cursor=pointer]:
                - /url: "#/InternalMessaging"
                - generic [ref=e28]: 
              - button "Mic On/Off" [ref=e31] [cursor=pointer]
              - img "Change Password" [ref=e34]
              - generic "Logout" [ref=e36]:
                - generic [ref=e37]: 
    - navigation [ref=e38]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('KPJ Login UI Test', async ({ page }) => {
  4  |   // Navigate to login page
  5  |   await page.goto(`${process.env.BASE_URL}/Account/Login/`);
  6  | 
  7  |   // Fill credentials
  8  |   await page.fill('#Username', process.env.KPJ_USERNAME || '');
  9  |   await page.fill('#Password', process.env.KPJ_PASSWORD || '');
  10 | 
  11 |   // Select required dropdowns
  12 |   await page.selectOption('#LocationID', { label: 'KPJ' });
  13 |   await page.selectOption('#CashCounterID', { label: 'ADM5-C-01 (Ward Level 5)' });
  14 | 
  15 |   // Click login button
  16 |   await page.click('button:has-text("Login")');
  17 | 
  18 |   // Assert dashboard is visible
> 19 |   await expect(page.getByRole('heading', { name: /Patient Dashboard/i })).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  20 | 
  21 |   // Optional: also verify URL
  22 |   await expect(page).toHaveURL(/PatientDashboard/);
  23 | });
  24 | 
```