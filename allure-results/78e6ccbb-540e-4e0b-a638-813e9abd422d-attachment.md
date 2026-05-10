# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:12:5

# Error details

```
TypeError: registration.createNewPatientRegistration is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e9]:
    - heading "Sign in to continue" [level=5] [ref=e11]
    - generic [ref=e12]:
      - generic [ref=e15]:
        - generic [ref=e17]: 
        - textbox "Login Name" [ref=e18]
      - generic [ref=e21]:
        - generic [ref=e23]: 
        - textbox "Password" [ref=e24]
      - text:  
      - generic [ref=e26]:
        - button "Login" [ref=e27] [cursor=pointer]
        - link "Forgot Password?" [ref=e29] [cursor=pointer]:
          - /url: /Account/ForgotPassword
  - contentinfo [ref=e32]:
    - paragraph [ref=e34]: "E-mail : info@sancyberhad.com | All Rights Reserved © SANCY BERHAD. 2024"
```

# Test source

```ts
  1  | // ============================================================
  2  | // tests/ui/op-registration.spec.ts
  3  | // ============================================================
  4  | import { test } from '@playwright/test';
  5  | import { LoginPage } from '../../pages/LoginPage';
  6  | import { OPPage } from '../../pages/OPPage';
  7  | import { RegistrationPage } from '../../pages/RegistrationPage';
  8  | import { ENV } from '../../utils/env';
  9  | import { RegistrationDataGenerator } from '../../utils/registrationData';
  10 | 
  11 | 
  12 | test('KPJ OP Registration Flow', async ({ page }) => {
  13 | 
  14 |   const login        = new LoginPage(page);
  15 |   const op           = new OPPage(page);
  16 |   const registration = new RegistrationPage(page);
  17 | 
  18 |   // ── Step 1: Go to Login page ────────────────────────────
  19 |   await page.goto(`${ENV.BASE_URL}/Account/Login/`, {
  20 |     waitUntil: 'domcontentloaded',
  21 |   });
  22 | 
  23 |   // ── Step 2: Login ────────────────────────────────────────
  24 |   // Fills credentials + mandatory dropdowns + waits for PatientDashboard
  25 |   const dynamicPatient = {
  26 | 
  27 |     title: 'Mr.',
  28 | 
  29 |     firstName:
  30 |       RegistrationDataGenerator.generateFirstName(),
  31 | 
  32 |     lastName:
  33 |       RegistrationDataGenerator.generateLastName(),
  34 | 
  35 |     identificationType: 'New IC',
  36 | 
  37 |     nric:
  38 |       RegistrationDataGenerator.generateNRIC(),
  39 | 
  40 |     passportNo:
  41 |       RegistrationDataGenerator.generatePassportNumber(),
  42 | 
  43 |     passportExpiryDate:
  44 |       RegistrationDataGenerator.generateFutureDate()
  45 |   };
  46 | 
  47 |   console.log(dynamicPatient);
  48 | 
> 49 |   await (registration as any).createNewPatientRegistration(
     |                               ^ TypeError: registration.createNewPatientRegistration is not a function
  50 |     dynamicPatient
  51 |   );
  52 | });
```