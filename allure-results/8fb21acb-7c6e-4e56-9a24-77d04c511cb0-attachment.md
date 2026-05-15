# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
Error: page.goto: Test ended.
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
     |              ^ Error: page.goto: Test ended.
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
  34 |     const targetTitle = targetGender === 'Male' ? 'Mr.' : 'Mrs.';
  35 |     console.log(`Creating a ${targetGender} patient with title ${targetTitle}`);
  36 |   // ── Step 4: Generate Dynamic Patient Name ────────────────
  37 |   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  38 |     let randomLetters = '';
  39 |     for (let i = 0; i < 10; i++) {
  40 |         randomLetters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  41 |     }
  42 |     const dynamicPatientName = `PATIENT${randomLetters}`;
  43 | 
  44 |     // Save Data
  45 |     const dataPath = path.join(__dirname, '../../dynamic-data.json');
  46 |     fs.writeFileSync(dataPath, JSON.stringify({ latestPatientName: dynamicPatientName }, null, 2));
  47 | 
  48 |     // 3. Initialize Page Object
  49 |     const registrationPage = new RegistrationPage(page);
  50 |     await registrationPage.navigateToRegistration();
  51 | 
  52 |     // 2. CALL THE NEW METHOD (Passes both Title and Gender)
  53 |     await registrationPage.selectTitleAndGender(targetTitle, targetGender);
  54 | 
  55 |     // 3. FILL THE REST OF THE FORM
  56 |     await registrationPage.fillDynamicPatientName(dynamicPatientName);
  57 | 
  58 |     const prioritizeNRIC = Math.random() < 0.8; 
  59 |     const randomIdSelection = prioritizeNRIC ? 'New IC' : 'Passport';
  60 |     
  61 |     // Step E: DECIDE NATIONALITY AND RACE LOGIC
  62 |     // 80% chance to be Malaysian, 20% chance to be a Foreigner
  63 |     const isMalaysian = Math.random() < 0.8;
  64 |     
  65 |     // Choose Nationality (Both exist in your provided HTML)
  66 |     const targetNationality = isMalaysian ? 'Malaysian' : 'Singaporean'; 
  67 | 
  68 |     // Choose Race based on Nationality
  69 |     let targetRace = '';
  70 |     if (isMalaysian) {
  71 |         const malaysianRaces = ['Malay', 'Chinese', 'Indian', 'Peninsular Indigenous (Orang Asli)'];
  72 |         targetRace = malaysianRaces[Math.floor(Math.random() * malaysianRaces.length)];
  73 |     } else {
  74 |         targetRace = 'Non-Citizen'; 
  75 |     }
  76 | 
  77 |     console.log(`Setting Nationality: ${targetNationality} | Race: ${targetRace}`);
  78 | 
  79 |     // Call the Page Object method BEFORE you handle the NRIC/Passport logic
  80 |     await registrationPage.selectNationalityAndRace(targetNationality, targetRace);
  81 |     // Pass the same gender down to the NRIC generator
  82 |     await registrationPage.selectIdentificationTypeAndFillDetails(randomIdSelection, targetGender);
  83 | 
  84 |     await page.pause();
  85 | });
  86 | 
```