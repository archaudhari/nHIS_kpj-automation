# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('#li1PatientRegistration > a') to be visible
    59 × locator resolved to hidden <a href="#/VisitScreen">…</a>

```

# Test source

```ts
  1   | import { Page, expect } from '@playwright/test';
  2   | 
  3   | export class RegistrationPage {
  4   |     readonly page: Page;
  5   | 
  6   |     constructor(page: Page) {
  7   |         this.page = page;
  8   |     }
  9   |     
  10  | 
  11  |     // NEW METHOD: Handle the menu clicks
  12  |     async navigateToRegistration() {
  13  |         // 1. Click the 'OP' main menu to expand the dropdown
  14  |         const opMenu = this.page.locator('#li0OP > a');
  15  |         await opMenu.waitFor({ state: 'visible' });
  16  |         await opMenu.click();
  17  | 
  18  |         // 2. Click the 'Registration' option
  19  |         const registrationLink = this.page.locator('#li1PatientRegistration > a');
> 20  |         await registrationLink.waitFor({ state: 'visible' });
      |                                ^ Error: locator.waitFor: Target page, context or browser has been closed
  21  |         await registrationLink.click();
  22  | 
  23  |         // 3. Wait for Angular to navigate to the Registration view
  24  |         // Based on the href="#/VisitScreen" in your HTML
  25  |         await this.page.waitForURL('**/VisitScreen', { waitUntil: 'domcontentloaded' });
  26  |         
  27  |         // Optional: If the dropdown menu stays open and blocks the screen, click the body to close it
  28  |         await this.page.locator('body').click({ position: { x: 0, y: 0 } }); 
  29  |     }
  30  |    // NEW METHOD: Safely select both Title and Gender
  31  |     async selectTitleAndGender(targetTitle: 'Mr.' | 'Mrs.', targetGender: 'Male' | 'Female') {
  32  |         
  33  |         // 1. SELECT THE TITLE
  34  |         const titleDropdown = this.page.locator('select[ng-model="Registration.PrefixID"]');
  35  |         await titleDropdown.waitFor({ state: 'visible' });
  36  |         
  37  |         // Select by the visible label (e.g., 'Mr.')
  38  |         await titleDropdown.selectOption({ label: targetTitle });
  39  |         
  40  |         // CRITICAL: Force AngularJS to realize the dropdown value changed
  41  |         await titleDropdown.dispatchEvent('change');
  42  |         await this.page.waitForTimeout(500); // Give SetGenderByTitle() time to run
  43  | 
  44  |         // 2. VERIFY / SELECT THE GENDER
  45  |         const genderDropdown = this.page.locator('select[ng-model="Registration.GenderID"]');
  46  |         await genderDropdown.waitFor({ state: 'visible' });
  47  | 
  48  |         // Explicitly set the gender just in case the app's auto-select was too slow or failed
  49  |         await genderDropdown.selectOption({ label: targetGender });
  50  |         
  51  |         // Force Angular to trigger ChkTitByGenderNRIC()
  52  |         await genderDropdown.dispatchEvent('change');
  53  |         await this.page.waitForTimeout(500);
  54  |     }
  55  | 
  56  |     // EXISTING METHOD: Fill the dynamic name
  57  |     async fillDynamicPatientName(patientName: string) {
  58  |         const firstNameInput = this.page.locator('#txtFirstName');
  59  |         
  60  |         await this.page.waitForLoadState('domcontentloaded');
  61  |         await firstNameInput.waitFor({ state: 'visible' });
  62  | 
  63  |         await firstNameInput.click();
  64  |         await this.page.waitForTimeout(1000); 
  65  | 
  66  |         // Uses the purely alphabetical name so the validation doesn't reject it
  67  |         await firstNameInput.pressSequentially(patientName, { delay: 100 });
  68  |         
  69  |         await this.page.locator('body').click(); 
  70  |         await this.page.waitForTimeout(1500); 
  71  | 
  72  |         const expectedValue = patientName.toUpperCase();
  73  |         await expect(firstNameInput).toHaveValue(expectedValue);
  74  |     }
  75  |     // NEW METHOD: Handle conditional Identification Type logic
  76  |     // Update this method inside your RegistrationPage class
  77  |     // We now pass in 'Male' or 'Female' to ensure the last digit matches the logic!
  78  |     async selectIdentificationTypeAndFillDetails(idType: 'New IC' | 'Passport', gender: 'Male' | 'Female' = 'Male') {
  79  |         const idDropdown = this.page.locator('select[ng-model="Registration.ICCardTypeID"]');
  80  |         await idDropdown.waitFor({ state: 'visible' });
  81  | 
  82  |         if (idType === 'New IC') {
  83  |             await idDropdown.selectOption({ label: 'New IC' });
  84  |             await this.page.waitForTimeout(500); 
  85  | 
  86  | const nricInput = this.page.locator('input[ng-model="Registration.NationalId"][minlength="12"]');            
  87  | await nricInput.waitFor({ state: 'visible' });
  88  |             
  89  |             // --- MALAYSIAN NRIC GENERATOR (YYMMDD-SS-###G) ---
  90  |             
  91  |             // 1. YYMMDD (Date of Birth)
  92  |             const yy = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  93  |             const mm = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
  94  |             const dd = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0'); // Max 28 for safe dates
  95  |             
  96  |             // 2. SS (State/Place of Birth Code)
  97  |             // Using '14' as a safe default (Kuala Lumpur). You can randomize this between 01-16 if needed.
  98  |             const ss = '14'; 
  99  |             
  100 |             // 3. ### (Sequence Number)
  101 |             const seq = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  102 |             
  103 |             // 4. G (Gender Indicator)
  104 |             // Male = Odd (1, 3, 5, 7, 9) | Female = Even (0, 2, 4, 6, 8)
  105 |             const maleDigits = [1, 3, 5, 7, 9];
  106 |             const femaleDigits = [0, 2, 4, 6, 8];
  107 |             const g = gender === 'Male' 
  108 |                 ? maleDigits[Math.floor(Math.random() * maleDigits.length)] 
  109 |                 : femaleDigits[Math.floor(Math.random() * femaleDigits.length)];
  110 | 
  111 |             // Combine them to form exactly 12 digits: 980605145455
  112 |             const strictNRIC = `${yy}${mm}${dd}${ss}${seq}${g}`; 
  113 |             
  114 |             // Type it into the field
  115 |             await nricInput.pressSequentially(strictNRIC, { delay: 50 });
  116 | 
  117 |             await this.page.locator('body').click();
  118 |             await this.page.waitForTimeout(1500); 
  119 | 
  120 |         } else if (idType === 'Passport') {
```