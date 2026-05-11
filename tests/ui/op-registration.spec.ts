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
  // await page.waitForURL('**/PatientDashboard', {
  //   waitUntil: 'domcontentloaded',
  // });
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomLetters = '';
    for (let i = 0; i < 10; i++) {
        randomLetters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    
    // Now the name will look like "PATIENTXYABFDKLMN" (No numbers, no underscores)
    const dynamicPatientName = `PATIENT${randomLetters}`;

    // Save it just like before
    const dataPath = path.join(__dirname, '../../dynamic-data.json');
    fs.writeFileSync(dataPath, JSON.stringify({ latestPatientName: dynamicPatientName }, null, 2));
    console.log(`Saved new patient: ${dynamicPatientName}`);

    // 3. Initialize your Registration Page Object
    const registrationPage = new RegistrationPage(page);
    
    // 4. Call the method to fill the name
    await registrationPage.fillDynamicPatientName(dynamicPatientName);

    // 5. FREEZE THE TEST HERE (To verify visually)
    await page.pause();
// 3. FILLING THE FORM
   
});
