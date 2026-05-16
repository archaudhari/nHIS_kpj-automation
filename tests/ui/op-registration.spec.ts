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
  await page.goto('/Account/Login/', {
      waitUntil: 'domcontentloaded',
    });

  // ── Step 2: Login ────────────────────────────────────────
  // Fills credentials + mandatory dropdowns + waits for PatientDashboard
  await login.login(ENV.USERNAME, ENV.PASSWORD);

  // ── Step 3: Navigate OP → Registration ──────────────────
  // Clicks #li0OP > a, waits for submenu, clicks #li1PatientRegistration
  await op.openRegistration();

  const targetGender: 'Male' | 'Female' = Math.random() < 0.5 ? 'Male' : 'Female';
    const targetTitle = targetGender === 'Male' ? 'Mr.' : 'Mrs.';
    console.log(`Creating a ${targetGender} patient with title ${targetTitle}`);
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
    await registrationPage.navigateToRegistration();

    // 2. CALL THE NEW METHOD (Passes both Title and Gender)
    await registrationPage.selectTitleAndGender(targetTitle, targetGender);

    // 3. FILL THE REST OF THE FORM
    await registrationPage.fillDynamicPatientName(dynamicPatientName);

    const prioritizeNRIC = Math.random() < 0.8; 
    const randomIdSelection = prioritizeNRIC ? 'New IC' : 'Passport';
    
    // Step E: DECIDE NATIONALITY AND RACE LOGIC
    // 80% chance to be Malaysian, 20% chance to be a Foreigner
    const isMalaysian = Math.random() < 0.8;
    
    // Choose Nationality (Both exist in your provided HTML)
    const targetNationality = isMalaysian ? 'Malaysian' : 'Singaporean'; 

    // Choose Race based on Nationality
    let targetRace = '';
    if (isMalaysian) {
        const malaysianRaces = ['Malay', 'Chinese', 'Indian', 'Peninsular Indigenous (Orang Asli)'];
        targetRace = malaysianRaces[Math.floor(Math.random() * malaysianRaces.length)];
    } else {
        targetRace = 'Non-Citizen'; 
    }

    console.log(`Setting Nationality: ${targetNationality} | Race: ${targetRace}`);

    // Call the Page Object method BEFORE you handle the NRIC/Passport logic
    await registrationPage.selectNationalityAndRace(targetNationality, targetRace);
    // Pass the same gender down to the NRIC generator
    await registrationPage.selectIdentificationTypeAndFillDetails(randomIdSelection, targetGender);
    // Step F: PREPARE CORRESPONDENCE DATA
    const dynamicAddress = `No. ${Math.floor(Math.random() * 100)}, Jalan Automation Testing`;
    const targetMobileCode = '60'; // Malaysia
    // Generate a valid 9 or 10 digit mobile number
    const randomMobileNo = `12${Math.floor(1000000 + Math.random() * 9000000)}`; 
    // Standard 5-digit Malaysian postcode (Using 50000 for Kuala Lumpur)
    const targetPostcode = '50000'; 
    // Create a unique email using the timestamp so it never fails duplicate validation
    const timestampForEmail = Date.now();
    const dynamicEmail = `test.patient${timestampForEmail}@sancyberhad.com`;

    console.log(`Setting Address: ${dynamicAddress} | Mobile: +${targetMobileCode} ${randomMobileNo}`);

    // Step H: FILL CORRESPONDENCE DETAILS
    await registrationPage.fillCorrespondenceDetails(
        dynamicAddress, 
        targetMobileCode, 
        randomMobileNo, 
        targetPostcode, 
        dynamicEmail
    );

    await page.pause();
});
