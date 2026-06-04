import { Page, expect } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    

    // NEW METHOD: Handle the menu clicks
    async navigateToRegistration() {
        // 1. Click the 'OP' main menu to expand the dropdown
        const opMenu = this.page.locator('#li0OP > a');
        await opMenu.waitFor({ state: 'visible' });
        await opMenu.click();

        // 2. Click the 'Registration' option
        const registrationLink = this.page.locator('#li1PatientRegistration > a');
        await registrationLink.waitFor({ state: 'visible' });
        await registrationLink.click();

        // 3. Wait for Angular to navigate to the Registration view
        // Based on the href="#/VisitScreen" in your HTML
        await this.page.waitForURL('**/VisitScreen', { waitUntil: 'domcontentloaded' });
        
        // Optional: If the dropdown menu stays open and blocks the screen, click the body to close it
        await this.page.locator('body').click({ position: { x: 0, y: 0 } }); 
    }
   // NEW METHOD: Safely select both Title and Gender
    async selectTitleAndGender(targetTitle: 'Mr.' | 'Mrs.', targetGender: 'Male' | 'Female') {
        
        // 1. SELECT THE TITLE
        const titleDropdown = this.page.locator('select[ng-model="Registration.PrefixID"]');
        await titleDropdown.waitFor({ state: 'visible' });
        
        // Select by the visible label (e.g., 'Mr.')
        await titleDropdown.selectOption({ label: targetTitle });
        
        // CRITICAL: Force AngularJS to realize the dropdown value changed
        await titleDropdown.dispatchEvent('change');
        await this.page.waitForTimeout(500); // Give SetGenderByTitle() time to run

        // 2. VERIFY / SELECT THE GENDER
        const genderDropdown = this.page.locator('select[ng-model="Registration.GenderID"]');
        await genderDropdown.waitFor({ state: 'visible' });

        // Explicitly set the gender just in case the app's auto-select was too slow or failed
        await genderDropdown.selectOption({ label: targetGender });
        
        // Force Angular to trigger ChkTitByGenderNRIC()
        await genderDropdown.dispatchEvent('change');
        await this.page.waitForTimeout(500);
    }

    // EXISTING METHOD: Fill the dynamic name
    async fillDynamicPatientName(patientName: string) {
        const firstNameInput = this.page.locator('#txtFirstName');
        
        await this.page.waitForLoadState('domcontentloaded');
        await firstNameInput.waitFor({ state: 'visible' });

        await firstNameInput.click();
        await this.page.waitForTimeout(1000); 

        // Uses the purely alphabetical name so the validation doesn't reject it
        await firstNameInput.pressSequentially(patientName, { delay: 100 });
        
        await this.page.locator('body').click(); 
        await this.page.waitForTimeout(1500); 

        const expectedValue = patientName.toUpperCase();
        await expect(firstNameInput).toHaveValue(expectedValue);
    }
    // NEW METHOD: Handle conditional Identification Type logic
    // Update this method inside your RegistrationPage class
    // We now pass in 'Male' or 'Female' to ensure the last digit matches the logic!
    async selectIdentificationTypeAndFillDetails(idType: 'New IC' | 'Passport', gender: 'Male' | 'Female' = 'Male') {
        const idDropdown = this.page.locator('select[ng-model="Registration.ICCardTypeID"]');
        await idDropdown.waitFor({ state: 'visible' });

        if (idType === 'New IC') {
            await idDropdown.selectOption({ label: 'New IC' });
            await this.page.waitForTimeout(500); 

const nricInput = this.page.locator('input[ng-model="Registration.NationalId"][minlength="12"]');            
await nricInput.waitFor({ state: 'visible' });
            
            // --- MALAYSIAN NRIC GENERATOR (YYMMDD-SS-###G) ---
            
            // 1. YYMMDD (Date of Birth)
            const yy = Math.floor(Math.random() * 100).toString().padStart(2, '0');
            const mm = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
            const dd = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0'); // Max 28 for safe dates
            
            // 2. SS (State/Place of Birth Code)
            // Using '14' as a safe default (Kuala Lumpur). You can randomize this between 01-16 if needed.
            const ss = '14'; 
            
            // 3. ### (Sequence Number)
            const seq = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
            
            // 4. G (Gender Indicator)
            // Male = Odd (1, 3, 5, 7, 9) | Female = Even (0, 2, 4, 6, 8)
            const maleDigits = [1, 3, 5, 7, 9];
            const femaleDigits = [0, 2, 4, 6, 8];
            const g = gender === 'Male' 
                ? maleDigits[Math.floor(Math.random() * maleDigits.length)] 
                : femaleDigits[Math.floor(Math.random() * femaleDigits.length)];

            // Combine them to form exactly 12 digits: 980605145455
            const strictNRIC = `${yy}${mm}${dd}${ss}${seq}${g}`; 
            
            // Type it into the field
            await nricInput.pressSequentially(strictNRIC, { delay: 50 });

            await this.page.locator('body').click();
            await this.page.waitForTimeout(1500); 

        } else if (idType === 'Passport') {
            await idDropdown.selectOption({ label: 'Passport' });
            await this.page.waitForTimeout(500); 

            const passportInput = this.page.locator('[ng-model="Registration.FamilyName"]'); 
            await passportInput.waitFor({ state: 'visible' });
            await passportInput.pressSequentially('A12345678', { delay: 50 });

            await this.page.locator('body').click();
            await this.page.waitForTimeout(1500);
        }
    }
    // NEW METHOD: Safely select Nationality and Race
    async selectNationalityAndRace(targetNationality: string, targetRace: string) {
        
        // 1. SELECT NATIONALITY
        const nationalityDropdown = this.page.locator('select[ng-model="Registration.NationalityID"]');
        await nationalityDropdown.waitFor({ state: 'visible' });
        
        // Select the nationality (e.g., 'Malaysian' or 'Singaporean')
        await nationalityDropdown.selectOption({ label: targetNationality });
        
        // CRITICAL: Force Angular to trigger all 4 background functions
        await nationalityDropdown.dispatchEvent('change');
        
        // Wait 1 full second for the app to fetch the new Race list and update ID requirements
        await this.page.waitForTimeout(1000); 

        // 2. SELECT RACE
        // Use this ONLY if .first() causes a timeout
        const raceDropdown = this.page.locator('select[ng-model="Registration.RaceID"]').first();
        await raceDropdown.waitFor({ state: 'visible' });

        // Select the appropriate race based on what the test script passed in
        await raceDropdown.selectOption({ label: targetRace }, { force: true });
        
        // Force Angular to register the race selection
        await raceDropdown.dispatchEvent('change');
        await this.page.waitForTimeout(500);
    }
    // NEW METHOD: Fill Correspondence Details
    async fillCorrespondenceDetails(address: string, mobileCodeLabel: string, mobileNo: string, postcode: string, email: string) {
        
        // 1. ADDRESS LINE 1
        const addressInput = this.page.locator('textarea[ng-model="Registration.ResAddress"]');
        await addressInput.waitFor({ state: 'visible' });
        await addressInput.fill(address);
        // Click body to trigger ng-blur="Setaddress(1)"
        await this.page.locator('body').click(); 
        await this.page.waitForTimeout(500);

        // 2. POSTCODE (Important to do before moving on, as SearchPatientByPostal often auto-fills City/State)
        const postcodeInput = this.page.locator('input[ng-model="Registration.ResPinCode"]');
        await postcodeInput.waitFor({ state: 'visible' });
        await postcodeInput.pressSequentially(postcode, { delay: 50 });
        // Click body to trigger ng-blur="SearchPatientByPostal()"
        await this.page.locator('body').click();
        await this.page.waitForTimeout(1500); // Wait for background postal search to finish

        // 3. MOBILE NUMBER (Code + Number)
        const mobileCodeDropdown = this.page.locator('select[ng-model="Registration.MobileCountryCode"]');
        await mobileCodeDropdown.waitFor({ state: 'visible' });
        // Select by visible text (e.g., '60' or '91')
        await mobileCodeDropdown.selectOption({ label: mobileCodeLabel });
        await mobileCodeDropdown.dispatchEvent('change');
        
        const mobileNoInput = this.page.locator('#txtMobileNo');
        await mobileNoInput.waitFor({ state: 'visible' });
        await mobileNoInput.pressSequentially(mobileNo, { delay: 50 });
        // Click body to trigger ng-blur="SearchPatientByInput(3)"
        await this.page.locator('body').click();
        await this.page.waitForTimeout(1500); // Wait for duplicate mobile check to finish

        // 4. EMAIL
        const emailInput = this.page.locator('input[ng-model="Registration.Email"]');
        await emailInput.waitFor({ state: 'visible' });
        await emailInput.fill(email);
        // Click body to trigger ng-blur="EmailValidate()"
        await this.page.locator('body').click();
        await this.page.waitForTimeout(500);
    }
    // UPDATED METHOD: Fill Next of Kin Details (Now includes Name)
    async fillNextOfKinDetails(title: string, name: string, relation: string, kinNric: string, mobileCode: string, mobileNo: string, sameAsPatient: boolean) {
        
        // 1. Title
        const kinTitle = this.page.locator('select[ng-model="Registration.KinTitleID"]');
        await kinTitle.waitFor({ state: 'visible' });
        await kinTitle.selectOption({ label: title });

        // 2. NAME (The newly added field)
        const kinNameInput = this.page.locator('input[ng-model="Registration.KinName"]');
        await kinNameInput.waitFor({ state: 'visible' });
        // Using fill() is usually safe for plain text fields without heavy ng-change events
        await kinNameInput.fill(name);

        // 3. Relationship
        const kinRelation = this.page.locator('select[ng-model="Registration.KinRelationID"]');
        await kinRelation.waitFor({ state: 'visible' });
        await kinRelation.selectOption({ label: relation });

        // 4. NEXT OF KIN NRIC
        const kinNricInput = this.page.locator('input[ng-model="Registration.KinNationalId"]');
        await kinNricInput.waitFor({ state: 'visible' });
        await kinNricInput.pressSequentially(kinNric, { delay: 50 });

        // 5. Mobile Code
        const kinMobileCode = this.page.locator('select[ng-model="Registration.KinMobileCountryCode"]');
        await kinMobileCode.waitFor({ state: 'visible' });
        await kinMobileCode.selectOption({ label: mobileCode });

        // 6. Mobile Number
        const kinMobileNo = this.page.locator('#txtKinMobileNo');
        await kinMobileNo.waitFor({ state: 'visible' });
        await kinMobileNo.pressSequentially(mobileNo, { delay: 50 });

        // 7. Same As Patient Address Checkbox
        if (sameAsPatient) {
            const sameAsPatientCheckbox = this.page.locator('input[ng-model="chkSameasPatAddr"]');
            const isChecked = await sameAsPatientCheckbox.isChecked();
            if (!isChecked) {
                await sameAsPatientCheckbox.check({ force: true });
                await sameAsPatientCheckbox.dispatchEvent('change');
                await this.page.waitForTimeout(500); 
            }
        }

        // 8. Click 'Add' Button to save Kin to the grid
        const addKinButton = this.page.locator('button[ng-click="AddKinDetails(KinDetailsList);"]');
        await addKinButton.click();
        await this.page.waitForTimeout(1000); 
    }

// 8. VISIT INFORMATION (STABLE-ELEMENT IMMUNE)
    
// =====================================================================
    // CLICK EVENT: OPEN VISIT INFORMATION TAB
 
    // 8. VISIT INFORMATION
    //    Correct flow:
    //      1. Encounter Type
    //      2. PRIMARY DOCTOR first  →  Department auto-loads from doctor selection
    //      3. Confirm Department loaded
    //      4. Loop doctors until Visit Type "New" is available → select it → STOP
    //      5. Queue No.
    //      6. Admission Source
    // =====================================================================
    async openVisitInformationSection() {
        const visitTab = this.page.locator(
            'a[href="#visitInfo"], a[ng-click*="visitInfo"], a[ng-click*="Visit"], ' +
            'li[ng-click*="visitInfo"] > a, .visit-info-tab > a'
        ).first();
 
        try {
            await visitTab.waitFor({ state: 'visible', timeout: 4000 });
            await visitTab.click();
        } catch {
            const fallback = this.page.getByRole('link', { name: /visit information/i })
                .or(this.page.getByRole('tab',  { name: /visit information/i }))
                .first();
            await fallback.waitFor({ state: 'visible', timeout: 4000 });
            await fallback.click();
        }
 
        // Wait for panel to be visible instead of timeout
        await expect(this.page.locator('select[ng-model="Visit.EncounterTypeID"]')).toBeVisible({ timeout: 5000 });
    }
 
    // =====================================================================
    // VISIT INFORMATION — Full flow:
    //   1. Encounter Type
    //   2. Find the real Doctor dropdown (probe ng-model names in DOM)
    //   3. Loop doctors → Department auto-loads → check Visit Type "New"
    //   4. Queue No.
    //   5. Admission Source
    // =====================================================================
    async fillVisitInformation(
    encounterType: string = 'Outpatient',
    admissionSource: string = 'Internal',
    targetVisitType: string = 'New'
) {

    // ─────────────────────────────────────────────────────────────
    // 1. ENCOUNTER TYPE
    // ─────────────────────────────────────────────────────────────
    const encounterDropdown = this.page.locator(
        'select[ng-model="Visit.EncounterTypeID"]'
    );

    await encounterDropdown.waitFor({
        state: 'visible',
        timeout: 15000
    });

    const encounterOptions = await encounterDropdown.evaluate(
        (sel: HTMLSelectElement) => {
            return Array.from(sel.options)
                .map(o => ({
                    text: o.text.trim(),
                    value: o.value
                }))
                .filter(o => {
                    const text = o.text.toLowerCase();

                    return (
                        o.value !== '' &&
                        !text.includes('select')
                    );
                });
        }
    );

    console.log(
        `[Visit] Encounter options: ${JSON.stringify(encounterOptions)}`
    );

    const matchedEncounter = encounterOptions.find(o =>
        o.text.toLowerCase().includes(encounterType.toLowerCase())
    );

    if (!matchedEncounter) {
        throw new Error(
            `[Visit] Encounter Type not found: ${encounterType}`
        );
    }

    await encounterDropdown.selectOption({
        value: matchedEncounter.value
    });

    await encounterDropdown.dispatchEvent('change');

    console.log(
        `[Visit] Encounter Type selected → ${matchedEncounter.text}`
    );

    

    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2500);

    // ─────────────────────────────────────────────────────────────
    // 2. PRIMARY DOCTOR DROPDOWN
    // ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────
// PRIMARY DOCTOR DROPDOWN
// ─────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────
// PRIMARY DOCTOR DROPDOWN
// ─────────────────────────────────────────────────────────────

await this.page.waitForLoadState('networkidle');
await this.page.waitForTimeout(5000);

const doctorDropdown = this.page
    .locator('select#DoctorModality')
    .filter({ has: this.page.locator('option') })
    .last();

// Wait until attached
await doctorDropdown.waitFor({
    state: 'attached',
    timeout: 30000
});

// Wait until dropdown enabled + populated
await expect.poll(

    async () => {

        return await doctorDropdown.evaluate(
            (sel: HTMLSelectElement) => {

                const validOptions = Array.from(sel.options)
                    .filter(o => {

                        const text = (
                            o.text || ''
                        ).trim().toLowerCase();

                        return (
                            o.value !== '' &&
                            text !== '' &&
                            !text.includes('select') &&
                            !text.includes('loading')
                        );

                    });

                return validOptions.length;

            }
        );

    },
    {
        timeout: 45000,
        intervals: [1000],
        message: 'Doctor options never loaded'
    }

).toBeGreaterThan(0);

// Extract doctors
const availableDoctors = await doctorDropdown.evaluate(
    (sel: HTMLSelectElement) => {

        return Array.from(sel.options)
            .map(o => ({
                text: (o.text || '').trim(),
                value: (o.value || '').trim()
            }))
            .filter(o => {

                const text = o.text.toLowerCase();

                return (
                    o.value !== '' &&
                    text !== '' &&
                    !text.includes('select') &&
                    !text.includes('loading')
                );

            });

    }
);

console.log(
    '[Visit] Doctors Loaded:',
    JSON.stringify(availableDoctors, null, 2)
);

if (availableDoctors.length === 0) {

    throw new Error(
        '[Visit] No doctors loaded in Primary Doctor dropdown'
    );
}
// Random doctor
const randomIndex = Math.floor(
    Math.random() * availableDoctors.length
);

const randomDoctor = availableDoctors[randomIndex];

console.log(
    `[Visit] Random Doctor selected → ${randomDoctor.text}`
);

// Select doctor
await doctorDropdown.selectOption(
    { value: randomDoctor.value },
    { force: true }
);

await doctorDropdown.dispatchEvent('change');

// Wait AngularJS + backend processing
await this.page.waitForLoadState('networkidle');
await this.page.waitForTimeout(4000);

// ─────────────────────────────────────────────────────────────
// WAIT FOR DEPARTMENT AUTO-LOAD
// ─────────────────────────────────────────────────────────────

const departmentDropdown = this.page.locator(
    '#Department'
);

await expect.poll(

    async () => {

        return await doctorDropdown.evaluate(
            (sel: HTMLSelectElement) => sel.options.length
        );

    },
    {
        timeout: 20000
    }

).toBeGreaterThan(1);

// ─────────────────────────────────────────────────────────────
// WAIT FOR VISIT TYPE AUTO-SET
// ─────────────────────────────────────────────────────────────

const visitTypeDropdown = this.page.locator(
    '#VisitType'
);

await expect.poll(

    async () => {

        return await visitTypeDropdown.evaluate(
            (sel: HTMLSelectElement) => {

                return sel.options[
                    sel.selectedIndex
                ]?.text?.trim() || '';

            }
        );

    },
    {
        timeout: 15000,
        intervals: [1000]
    }

).toContain('New');

const visitTypeLabel = await visitTypeDropdown.evaluate(
    (sel: HTMLSelectElement) => {

        return sel.options[
            sel.selectedIndex
        ]?.text?.trim();

    }
);

console.log(
    `[Visit] Visit Type auto-set → ${visitTypeLabel}`
);

    // ─────────────────────────────────────────────────────────────
    // 6. QUEUE NUMBER
    // ─────────────────────────────────────────────────────────────
    const queueInput = this.page.locator(
        'input[ng-model="Visit.TokenNo"]'
    );

    await queueInput.waitFor({
        state: 'visible',
        timeout: 10000
    });

    const randomQueue = Math.floor(
        100 + Math.random() * 900
    ).toString();

    await queueInput.fill(randomQueue);

    await this.page.locator('body').click();

    console.log(
        `[Visit] Queue No → ${randomQueue}`
    );

    // ─────────────────────────────────────────────────────────────
    // 7. ADMISSION SOURCE
    // ─────────────────────────────────────────────────────────────
    const sourceDropdown = this.page.locator(
        'select[ng-model="Visit.PatientSourceID"]'
    );

    await sourceDropdown.waitFor({
        state: 'visible',
        timeout: 10000
    });

    const sourceOptions = await sourceDropdown.evaluate(
        (sel: HTMLSelectElement) => {
            return Array.from(sel.options)
                .map(o => ({
                    text: o.text.trim(),
                    value: o.value
                }))
                .filter(o => {

                    const text = o.text.toLowerCase();

                    return (
                        o.value !== '' &&
                        !text.includes('select')
                    );
                });
        }
    );

    const matchedSource = sourceOptions.find(o =>
        o.text.toLowerCase().includes(
            admissionSource.toLowerCase()
        )
    );

    if (matchedSource) {

        await sourceDropdown.selectOption({
            value: matchedSource.value
        });

        await sourceDropdown.dispatchEvent('change');

        console.log(
            `[Visit] Admission Source → ${matchedSource.text}`
        );
    }

    await this.page.waitForTimeout(1000);

    console.log(
        '[Visit] fillVisitInformation completed successfully ✅'
    );
}

    // =====================================================================
    // SAVE REGISTRATION
    // 1. Click the "Save" button
    // 2. Wait for the ng-confirm popup: "Save: Are you sure."
    // 3. Click the "Save" confirm button inside the popup
    // =====================================================================
    async saveRegistration() {

        // ── 1. CLICK MAIN SAVE BUTTON ───────────────────────────────────
        const saveBtn = this.page.locator('button:has-text("Save")').last();
        await saveBtn.waitFor({ state: 'visible', timeout: 10000 });
        await saveBtn.click();
        console.log('[Save] Save button clicked — waiting for confirmation popup...');

        // ── 2. WAIT FOR ng-confirm POPUP ────────────────────────────────
        // The popup renders inside .ng-confirm-content with the text "Save: Are you sure."
        const confirmPopup = this.page.locator('.ng-confirm-content-pane');
        await confirmPopup.waitFor({ state: 'visible', timeout: 10000 });
        await expect(confirmPopup).toContainText('Are you sure', { ignoreCase: true });
        console.log('[Save] Confirmation popup appeared ✅');

        // ── 3. CLICK CONFIRM "Save" BUTTON INSIDE POPUP ─────────────────
        // Target the .ng-confirm-btn-text span with text "Save"
        // Use the button that wraps it to ensure it's clickable
        const confirmSaveBtn = this.page.locator('.ng-confirm-buttons button', {
            hasText: 'Save'
        });
        await confirmSaveBtn.waitFor({ state: 'visible', timeout: 5000 });
        await confirmSaveBtn.click();
        console.log('[Save] Confirm "Save" clicked ✅');

        // ── 4. WAIT FOR POPUP TO DISMISS ────────────────────────────────
        await confirmPopup.waitFor({ state: 'hidden', timeout: 10000 });
        console.log('[Save] Registration saved successfully ✅');
    }
}
