// ============================================================
// tests/ui/op-registration.spec.ts
// ============================================================
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { OPPage } from '../../pages/OPPage';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { ENV } from '../../utils/env';
import { RegistrationDataGenerator } from '../../utils/registrationData';
import * as fs from 'fs';
import * as path from 'path';


test('KPJ OP Registration Flow', async ({ page }) => {

  const login        = new LoginPage(page);
  const op           = new OPPage(page);
  const registration = new RegistrationPage(page);

  // ── Step 1: Go to Login page ────────────────────────────
  await page.goto(`${ENV.BASE_URL}/Account/Login/`, {
    waitUntil: 'domcontentloaded',
  });

  // ── Step 2: Login ────────────────────────────────────────
  // Fills credentials + mandatory dropdowns + waits for PatientDashboard
  await login.login(ENV.USERNAME, ENV.PASSWORD);

  // ── Step 3: Navigate OP → Registration ──────────────────
  // Clicks #li0OP > a, waits for submenu, clicks #li1PatientRegistration
  await op.openRegistration();

  // ── Step 4: Generate Dynamic Patient Name ────────────────
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomLetters = '';
    for (let i = 0; i < 10; i++) {
        randomLetters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    const dynamicPatientName = `PATIENT${randomLetters}`;

    // Save Data
    const dataPath = path.join(__dirname, '../../dynamic-data.json');
    fs.writeFileSync(dataPath, JSON.stringify({ latestPatientName: dynamicPatientName }, null, 2));

    // 3. Initialize Page Object
    const registrationPage = new RegistrationPage(page);
    
    // 1. Navigate to Registration
    await registrationPage.navigateToRegistration();
    await registrationPage.fillDynamicPatientName(dynamicPatientName);

    // RANDOMLY SELECT IDENTIFICATION TYPE (PRIORITIZING NRIC)
    // Math.random() generates a number between 0 and 1. 
    // This gives 'New IC' an 80% chance of being chosen, and 'Passport' a 20% chance.
    const prioritizeNRIC = Math.random() < 0.8; 
    const randomSelection = prioritizeNRIC ? 'New IC' : 'Passport';
    
    console.log(`Test is proceeding with Identification Type: ${randomSelection}`);

// If testing a Male patient:
await registrationPage.selectIdentificationTypeAndFillDetails('New IC', 'Male');

// If testing a Female patient:
await registrationPage.selectIdentificationTypeAndFillDetails('New IC', 'Female');
    await page.pause();
});
