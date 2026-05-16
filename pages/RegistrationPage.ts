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
}