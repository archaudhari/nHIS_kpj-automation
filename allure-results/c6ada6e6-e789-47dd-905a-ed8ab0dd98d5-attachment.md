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

Expected: "https://devhis.sancyberhad.com/#/PatientDashboard"
Received: "https://devhis.sancyberhad.com/Account/Login/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://devhis.sancyberhad.com/Account/Login/"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e9]:
    - heading "Sign in to continue" [level=5] [ref=e11]
    - generic [ref=e12]:
      - generic [ref=e15]:
        - generic [ref=e17]: 
        - textbox "Login Name" [ref=e18]: ajayr
      - generic [ref=e21]:
        - generic [ref=e23]: 
        - textbox "Password" [ref=e24]: Ajay@123
      - text:  
      - generic [ref=e26]:
        - button "Login" [active] [ref=e27] [cursor=pointer]
        - link "Forgot Password?" [ref=e29] [cursor=pointer]:
          - /url: /Account/ForgotPassword
  - contentinfo [ref=e32]:
    - paragraph [ref=e34]: "E-mail : info@sancyberhad.com | All Rights Reserved © SANCY BERHAD. 2024"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { ENV } from '../../utils/env';
  4  | 
  5  | test('KPJ Login UI Test', async ({ page }) => {
  6  |   const loginPage = new LoginPage(page);
  7  | 
  8  |   await loginPage.goto();
  9  |   await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
  10 | 
> 11 |   await expect(page).toHaveURL('https://devhis.sancyberhad.com/#/PatientDashboard');
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  12 | });
```