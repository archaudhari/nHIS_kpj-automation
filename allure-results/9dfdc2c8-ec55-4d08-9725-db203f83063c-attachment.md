# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> KPJ Login UI Test
- Location: tests\ui\login.spec.ts:5:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /PatientDashboard/
Received string:  "https://devhis.sancyberhad.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    6 × unexpected value "https://devhis.sancyberhad.com/"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner:
      - text:  
      - navigation [ref=e3]:
        - generic [ref=e4]:
          - heading "Transfer" [level=1] [ref=e6]
          - list [ref=e8]:
            - listitem [ref=e9]:
              - generic [ref=e10]: "Welcome: Employee 1338:(KPJ)"
            - listitem [ref=e11]:
              - generic [ref=e12]: "Last Login : 06/05/2026 02:45:01"
            - listitem [ref=e13]:
              - link " 244" [ref=e15] [cursor=pointer]:
                - /url: "#/InternalMessaging"
                - generic [ref=e16]: 
                - generic [ref=e17]: "244"
              - button "Mic On/Off" [ref=e19] [cursor=pointer]
              - img "Change Password" [ref=e22]
              - generic "Logout" [ref=e24]:
                - generic [ref=e25]: 
    - navigation [ref=e26]
    - generic [ref=e29]:
      - generic:
        - generic:
          - main
  - textbox [ref=e31]
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
  9  |   await page.fill('input[type="Password"]', ENV.PASSWORD);
  10 | 
  11 |   await page.click('button:has-text("LOGIN")');
  12 |   await page.waitForTimeout(2000);
  13 |   await page.click('button:has-text("LOGIN")');
  14 | 
> 15 |   await expect(page).toHaveURL(/PatientDashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  16 | });
```