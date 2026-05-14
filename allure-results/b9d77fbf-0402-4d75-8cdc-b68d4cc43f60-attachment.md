# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
Test timeout of 100000ms exceeded.
```

```
Error: page.goto: Test timeout of 100000ms exceeded.
Call log:
  - navigating to "https://devhis.sancyberhad.com/Account/Login/", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | // ============================================================
  2  | // tests/ui/op-registration.spec.ts
  3  | // ============================================================
  4  | import { test, expect } from '@playwright/test';
  5  | import { LoginPage } from '../../pages/LoginPage';
  6  | import { OPPage } from '../../pages/OPPage';
  7  | import { RegistrationPage } from '../../pages/RegistrationPage';
  8  | import { ENV } from '../../utils/env';
  9  | import { RegistrationDataGenerator } from '../../utils/registrationData';
  10 | import * as fs from 'fs';
  11 | import * as path from 'path';
  12 | 
  13 | 
  14 | test('KPJ OP Registration Flow', async ({ page }) => {
  15 | 
  16 |   const login        = new LoginPage(page);
  17 |   const op           = new OPPage(page);
  18 |   const registration = new RegistrationPage(page);
  19 | 
  20 |   // ── Step 1: Go to Login page ────────────────────────────
> 21 |   await page.goto(`${ENV.BASE_URL}/Account/Login/`, {
     |              ^ Error: page.goto: Test timeout of 100000ms exceeded.
  22 |     waitUntil: 'domcontentloaded',
  23 |   });
  24 | 
  25 |   // ── Step 2: Login ────────────────────────────────────────
  26 |   // Fills credentials + mandatory dropdowns + waits for PatientDashboard
  27 |   await login.login(ENV.USERNAME, ENV.PASSWORD);
  28 | 
  29 |   // ── Step 3: Navigate OP → Registration ──────────────────
  30 |   // Clicks #li0OP > a, waits for submenu, clicks #li1PatientRegistration
  31 |   await op.openRegistration();
  32 | 
  33 |   const targetGender: 'Male' | 'Female' = Math.random() < 0.5 ? 'Male' : 'Female';
  34 |     
  35 |     // Match the Title to the chosen Gender
  36 |     const targetTitle = targetGender === 'Male' ? 'Mr.' : 'Mrs.';
  37 |     console.log(`Creating a ${targetGender} patient with title ${targetTitle}`);
  38 | 
  39 |   // ── Step 4: Generate Dynamic Patient Name ────────────────
  40 |   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  41 |     let randomLetters = '';
  42 |     for (let i = 0; i < 10; i++) {
  43 |         randomLetters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  44 |     }
  45 |     const dynamicPatientName = `PATIENT${randomLetters}`;
  46 | 
  47 |     // Save Data
  48 |     const dataPath = path.join(__dirname, '../../dynamic-data.json');
  49 |     fs.writeFileSync(dataPath, JSON.stringify({ latestPatientName: dynamicPatientName }, null, 2));
  50 | 
  51 |     // 3. Initialize Page Object
  52 |     const registrationPage = new RegistrationPage(page);
  53 |     
  54 |     // 1. Navigate to Registration
  55 |     await registrationPage.navigateToRegistration();
  56 |     await registrationPage.fillDynamicPatientName(dynamicPatientName);
  57 | 
  58 |     // RANDOMLY SELECT IDENTIFICATION TYPE (PRIORITIZING NRIC)
  59 |     // Math.random() generates a number between 0 and 1. 
  60 |     // This gives 'New IC' an 80% chance of being chosen, and 'Passport' a 20% chance.
  61 |     const prioritizeNRIC = Math.random() < 0.8; 
  62 |     const randomSelection = prioritizeNRIC ? 'New IC' : 'Passport';
  63 |     
  64 |     console.log(`Test is proceeding with Identification Type: ${randomSelection}`);
  65 | 
  66 | // If testing a Male patient:
  67 | await registrationPage.selectIdentificationTypeAndFillDetails('New IC', 'Male');
  68 | 
  69 | // If testing a Female patient:
  70 | await registrationPage.selectIdentificationTypeAndFillDetails('New IC', 'Female');
  71 |     await page.pause();
  72 | });
  73 | 
```