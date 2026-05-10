# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:12:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[data-target="#collapseTwo"]').filter({ hasText: 'Patient Information' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[data-target="#collapseTwo"]').filter({ hasText: 'Patient Information' })

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
  38  |   readonly myKadButton: Locator;
  39  | 
  40  |   constructor(page: Page) {
  41  |     this.page = page;
  42  | 
  43  |     // =========================
  44  |     // SECTION
  45  |     // =========================
  46  |     this.patientInfoHeader = page.locator(
  47  |       'a[data-target="#collapseTwo"]',
  48  |       { hasText: 'Patient Information' }
  49  |     );
  50  | 
  51  |     // =========================
  52  |     // REG TYPE
  53  |     // =========================
  54  |     this.regTypeDropdown = page.locator(
  55  |       'select[ng-model="Registration.PatientTypeID"]'
  56  |     );
  57  | 
  58  |     // =========================
  59  |     // RADIO BUTTONS
  60  |     // =========================
  61  |     this.mrnRadio = page.locator(
  62  |       'input[type="radio"][value="1"]'
  63  |     );
  64  | 
  65  |     this.nricRadio = page.locator(
  66  |       'input[type="radio"][value="2"]'
  67  |     );
  68  | 
  69  |     // =========================
  70  |     // NAME SECTION
  71  |     // =========================
  72  |     this.titleDropdown = page.locator(
  73  |       'select[ng-model="Registration.PrefixID"]'
  74  |     );
  75  | 
  76  |     this.firstNameInput = page.locator('#txtFirstName');
  77  | 
  78  |     this.middleNameInput = page.locator('#txtMiddleName');
  79  | 
  80  |     this.lastNameInput = page.locator('#txtLastName');
  81  | 
  82  |     this.familyNameInput = page.locator('#txtFamilyName1');
  83  | 
  84  |     // =========================
  85  |     // IDENTIFICATION
  86  |     // =========================
  87  |     this.identificationTypeDropdown = page.locator(
  88  |       'select[ng-model="Registration.ICCardTypeID"]'
  89  |     );
  90  | 
  91  |     // NRIC textbox
  92  |     this.nricInput = page.locator(
  93  |       'input[ng-model="Registration.NationalId"]'
  94  |     ).last();
  95  | 
  96  |     // Passport textbox
  97  |     this.passportInput = page.locator(
  98  |       'input[ng-model="Registration.FamilyName"]'
  99  |     );
  100 | 
  101 |     // Passport Expiry Date
  102 |     this.passportExpiryDateInput = page.locator(
  103 |       'input[ng-model="Registration.PassportExpirydate"]'
  104 |     );
  105 | 
  106 |     // =========================
  107 |     // CHECKBOX
  108 |     // =========================
  109 |     this.staffCheckbox = page.locator(
  110 |       'input[type="checkbox"][ng-model="IsStaff"]'
  111 |     );
  112 | 
  113 |     // =========================
  114 |     // BUTTONS
  115 |     // =========================
  116 |     this.searchPatientButton = page.locator(
  117 |       'button[title="Search Patient"]'
  118 |     );
  119 | 
  120 |     this.findPatientButton = page.locator(
  121 |       'button[title="Find Patient"]'
  122 |     );
  123 | 
  124 |     this.visaButton = page.locator(
  125 |       'button[title="Visa"]'
  126 |     );
  127 | 
  128 |     this.myKadButton = page.locator(
  129 |       'button[title="Read MyKad Card"]'
  130 |     );
  131 |   }
  132 | 
  133 |   // =========================================================
  134 |   // PAGE VALIDATION
  135 |   // =========================================================
  136 | 
  137 |   async verifyRegistrationPageLoaded() {
> 138 |     await expect(this.patientInfoHeader).toBeVisible();
      |                                          ^ Error: expect(locator).toBeVisible() failed
  139 |     await expect(this.firstNameInput).toBeVisible();
  140 |   }
  141 | 
  142 |   // =========================================================
  143 |   // REGISTRATION TYPE
  144 |   // =========================================================
  145 | 
  146 |   async selectRegistrationType(type: 'New' | 'Registered') {
  147 |     await this.regTypeDropdown.selectOption({ label: type });
  148 |   }
  149 | 
  150 |   async selectMRNRadio() {
  151 |     await this.mrnRadio.check();
  152 |   }
  153 | 
  154 |   async selectNRICRadio() {
  155 |     await this.nricRadio.check();
  156 |   }
  157 | 
  158 |   // =========================================================
  159 |   // NAME DETAILS
  160 |   // =========================================================
  161 | 
  162 |   async selectTitle(title: string) {
  163 |     await this.titleDropdown.selectOption({ label: title });
  164 |   }
  165 | 
  166 |   async enterFirstName(firstName: string) {
  167 |     await this.firstNameInput.fill(firstName);
  168 |   }
  169 | 
  170 |   async enterMiddleName(middleName: string) {
  171 |     await this.middleNameInput.fill(middleName);
  172 |   }
  173 | 
  174 |   async enterLastName(lastName: string) {
  175 |     await this.lastNameInput.fill(lastName);
  176 |   }
  177 | 
  178 |   async enterFamilyName(familyName: string) {
  179 |     await this.familyNameInput.fill(familyName);
  180 |   }
  181 | 
  182 |   async enterFullName(
  183 |     firstName: string,
  184 |     middleName?: string,
  185 |     lastName?: string
  186 |   ) {
  187 |     await this.firstNameInput.fill(firstName);
  188 | 
  189 |     if (middleName) {
  190 |       await this.middleNameInput.fill(middleName);
  191 |     }
  192 | 
  193 |     if (lastName) {
  194 |       await this.lastNameInput.fill(lastName);
  195 |     }
  196 |   }
  197 | 
  198 |   // =========================================================
  199 |   // IDENTIFICATION DETAILS
  200 |   // =========================================================
  201 | 
  202 |   async selectIdentificationType(type: string) {
  203 |     await this.identificationTypeDropdown.selectOption({
  204 |       label: type,
  205 |     });
  206 |   }
  207 | 
  208 |   async enterNRIC(nric: string) {
  209 |     await this.nricInput.fill(nric);
  210 |     await this.nricInput.press('Tab');
  211 |   }
  212 | 
  213 |   async enterPassportNumber(passportNo: string) {
  214 |     await this.passportInput.fill(passportNo);
  215 |   }
  216 | 
  217 |   async enterPassportExpiryDate(date: string) {
  218 |     await this.passportExpiryDateInput.fill(date);
  219 |     await this.passportExpiryDateInput.press('Tab');
  220 |   }
  221 | 
  222 |   // =========================================================
  223 |   // CHECKBOX ACTIONS
  224 |   // =========================================================
  225 | 
  226 |   async enableStaffCheckbox() {
  227 |     await this.staffCheckbox.check();
  228 |   }
  229 | 
  230 |   async disableStaffCheckbox() {
  231 |     await this.staffCheckbox.uncheck();
  232 |   }
  233 | 
  234 |   // =========================================================
  235 |   // BUTTON ACTIONS
  236 |   // =========================================================
  237 | 
  238 |   async clickSearchPatient() {
```