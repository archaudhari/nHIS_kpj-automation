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

Expected pattern: /Dashboard/
Received string:  "https://devhis.sancyberhad.com/Account/Login/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × unexpected value "https://devhis.sancyberhad.com/Account/Login/"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e9]:
    - heading "Sign in to continue" [level=5] [ref=e11]
    - generic [ref=e12]:
      - generic [ref=e15]:
        - generic [ref=e17]: 
        - textbox "Login Name" [ref=e18]: Test_KPJ
      - generic [ref=e21]:
        - generic [ref=e23]: 
        - textbox "Password" [ref=e24]: Ajay@123
      - generic [ref=e27]:
        - generic [ref=e29]: 
        - combobox [ref=e30]:
          - option "-Select Organization/Department-"
          - option "KPJ" [selected]
      - generic [ref=e33]:
        - img [ref=e35]
        - combobox [ref=e36]:
          - option "-Select Login Cash Counter-"
          - option "ADM5-C-01 (Ward Level 5)" [selected]
          - option "ADM6-C-01 (Ward Level 6)"
          - option "ADM7-C-01 (Ward Level 7)"
          - option "ADMG-C-01 (Central)"
          - option "ADMG-C-02 (Central)"
          - option "ADMG-C-03 (Central)"
          - option "ADMG-C-04 (Central)"
          - option "ADMG-C-05 (Central)"
          - option "ADMG-C-06 (Central)"
          - option "ADMG-S-01 (Central)"
          - option "ADMG-S-02 (Central)"
          - option "ADMG-E-01 (Central)"
          - option "BILL-BL01 (IP Billing)"
          - option "BILL-BL02 (IP Billing)"
          - option "BILL-BL03 (IP Billing)"
          - option "BILL-BL04 (IP Billing)"
          - option "BILL-BL05 (IP Billing)"
          - option "BILL-BL06 (IP Billing)"
          - option "BILL-BL07 (IP Billing)"
          - option "CC-CC01 (Credit Control)"
          - option "CC-CC02 (Credit Control)"
          - option "CC-CC03 (Credit Control)"
          - option "CC-CC04 (Credit Control)"
          - option "CC-CC05 (Credit Control)"
          - option "CC-CC06 (Credit Control)"
          - option "CC-CC07 (Credit Control)"
          - option "DC-O-01 (Daycare)"
          - option "DCL1-C-01 (Daycare)"
          - option "DCL1-C-02 (Daycare)"
          - option "DCL1-C-03 (Daycare)"
          - option "DCL1-C-04 (Daycare)"
          - option "DCOC-C-01 (Daycare (Oncology) )"
          - option "DCOC-C-02 (Daycare (Oncology) )"
          - option "ED-C-01 (Emergency)"
          - option "ED-C-02 (Emergency)"
          - option "ED-C-03 (Emergency)"
          - option "ED-S-01 (Emergency)"
          - option "ED-E-01 (Emergency)"
          - option "HSD-C-01 (HSD)"
          - option "SH-C-01 (Emergency (Staff Health) )"
          - option "OPD-E-01 (Outpatient)"
          - option "OPD-E-02 (Outpatient)"
          - option "OPD-B-01 (Outpatient)"
          - option "OPD-B-02 (Outpatient)"
          - option "OPD-B-03 (Outpatient)"
          - option "OPD-B-04 (Outpatient)"
          - option "RAD-C-01 (Imaging)"
          - option "REHB-C-01 (Rehab)"
          - option "REHB-C-02 (Rehab)"
          - option "SP10-C-01 (SPC10/11 (Paeds))"
          - option "SP10-C-02 (SPC10/11 (Paeds))"
          - option "SP10-C-03 (SPC10/11 (Paeds))"
          - option "SP12-C-01 (SPC12)"
          - option "SP12-C-02 (SPC12)"
          - option "SP12-C-03 (SPC12)"
          - option "SP12-C-04 (SPC12)"
          - option "SP13-C-01 (SPC13A)"
          - option "SP13-C-02 (SPC13A)"
          - option "SPC1-C-01 (SPC1 (Onco))"
          - option "SPC1-C-02 (SPC1 (Onco))"
          - option "SPC2-C-01 (SPC2)"
          - option "SPC2-C-02 (SPC2)"
          - option "SPC3-C-01 (SPC3)"
          - option "SPC3-C-02 (SPC3)"
          - option "SPC3-C-03 (SPC3)"
          - option "SPC3-C-04 (SPC3)"
          - option "SPC5-C-01 (SPC5)"
          - option "SPC5-C-02 (SPC5)"
          - option "SPC6-C-01 (SPC6)"
          - option "SPC6-C-02 (SPC6)"
          - option "SPC6-C-03 (SPC6)"
          - option "SPC7-C-01 (SPC7)"
          - option "SPC7-C-02 (SPC7)"
          - option "SPC8-C-01 (SPC8)"
          - option "SPC8-C-02 (SPC8)"
          - option "SPC8-C-03 (SPC8)"
          - option "SPC9-C-01 (SPC9 (IVF))"
          - option "SPC9-C-02 (SPC9 (IVF))"
          - option "SPC9-C-03 (SPC9 (IVF))"
          - option "SPC9-C-04 (SPC9 (IVF))"
          - option "SPC9-C-05 (SPC9 (IVF))"
      - text: 
      - generic [ref=e38]:
        - button "Login" [active] [ref=e39] [cursor=pointer]
        - link "Forgot Password?" [ref=e41] [cursor=pointer]:
          - /url: /Account/ForgotPassword
  - contentinfo [ref=e44]:
    - paragraph [ref=e46]: "E-mail : info@sancyberhad.com | All Rights Reserved © SANCY BERHAD. 2024"
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
  12 | 
> 13 |   await expect(page).toHaveURL(/Dashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  14 | });
```