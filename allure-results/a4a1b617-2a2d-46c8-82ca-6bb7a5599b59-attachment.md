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
              - generic [ref=e12]: "Last Login : 06/05/2026 02:46:51"
            - listitem [ref=e13]:
              - link " 244" [ref=e15] [cursor=pointer]:
                - /url: "#/InternalMessaging"
                - generic [ref=e16]: 
                - generic [ref=e17]: "244"
              - button "Mic On/Off" [ref=e19] [cursor=pointer]
              - img "Change Password" [ref=e22]
              - generic "Logout" [ref=e24]:
                - generic [ref=e25]: 
    - navigation [ref=e26]:
      - list [ref=e31]:
        - listitem [ref=e32]:
          - link [ref=e33] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e34]:
          - link "Home" [ref=e35] [cursor=pointer]:
            - /url: "#/home"
            - generic [ref=e36]: Home
        - listitem [ref=e37]:
          - link "OP" [ref=e38] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e39]: OP
        - listitem [ref=e40]:
          - link "IP" [ref=e41] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e42]: IP
        - listitem [ref=e43]:
          - link "Emergency" [ref=e44] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e45]: Emergency
        - listitem [ref=e46]:
          - link "Finance" [ref=e47] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e48]: Finance
        - listitem [ref=e49]:
          - link "Billing" [ref=e50] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e51]: Billing
        - listitem [ref=e52]:
          - link "Investigation" [ref=e53] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e54]: Investigation
        - listitem [ref=e55]:
          - link "Nursing Station" [ref=e56] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e57]: Nursing Station
        - listitem [ref=e58]:
          - link "OT" [ref=e59] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e60]: OT
        - listitem [ref=e61]:
          - link "Inventory" [ref=e62] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e63]: Inventory
        - listitem [ref=e64]:
          - link "Ancillary Services" [ref=e65] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e66]: Ancillary Services
        - listitem [ref=e67]:
          - link "Report" [ref=e68] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e69]: Report
        - listitem [ref=e70]:
          - link "System Configuration" [ref=e71] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e72]: System Configuration
        - listitem [ref=e73]:
          - link "Application Configuration" [ref=e74] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e75]: Application Configuration
        - listitem [ref=e76]:
          - link "Telemedicine" [ref=e77] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e78]: Telemedicine
    - generic [ref=e81]:
      - generic:
        - generic:
          - main:
            - generic:     
  - textbox [ref=e83]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { ENV } from '../../utils/env';
  4  | 
  5  | test('KPJ Login UI Test', async ({ page }) => {
  6  |   await page.goto(`${ENV.BASE_URL}/Account/Login/`, { 
  7  |   waitUntil: 'domcontentloaded' 
  8  | });
  9  |   await page.fill('input[placeholder="Login Name"]', ENV.USERNAME);
  10 |   await page.fill('input[type="Password"]', ENV.PASSWORD);
  11 | 
  12 |   await page.click('button:has-text("LOGIN")');
  13 |   await page.waitForTimeout(2000);
  14 |   await page.click('button:has-text("LOGIN")');
  15 | 
> 16 |   await expect(page).toHaveURL(/PatientDashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  17 | });
```