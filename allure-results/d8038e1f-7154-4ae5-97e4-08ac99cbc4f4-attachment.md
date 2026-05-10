# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:12:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('#txtFirstName') to be visible

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
  46  | this.patientInfoHeader = page.locator('#headingTwo');
  47  | 
  48  |     // =========================
  49  |     // REG TYPE
  50  |     // =========================
  51  |     this.regTypeDropdown = page.locator(
  52  |       'select[ng-model="Registration.PatientTypeID"]'
  53  |     );
  54  | 
  55  |     // =========================
  56  |     // RADIO BUTTONS
  57  |     // =========================
  58  |     this.mrnRadio = page.locator(
  59  |       'input[type="radio"][value="1"]'
  60  |     );
  61  | 
  62  |     this.nricRadio = page.locator(
  63  |       'input[type="radio"][value="2"]'
  64  |     );
  65  | 
  66  |     // =========================
  67  |     // NAME SECTION
  68  |     // =========================
  69  |     this.titleDropdown = page.locator(
  70  |       'select[ng-model="Registration.PrefixID"]'
  71  |     );
  72  | 
  73  |     this.firstNameInput = page.locator('#txtFirstName');
  74  | 
  75  |     this.middleNameInput = page.locator('#txtMiddleName');
  76  | 
  77  |     this.lastNameInput = page.locator('#txtLastName');
  78  | 
  79  |     this.familyNameInput = page.locator('#txtFamilyName1');
  80  | 
  81  |     // =========================
  82  |     // IDENTIFICATION
  83  |     // =========================
  84  |     this.identificationTypeDropdown = page.locator(
  85  |       'select[ng-model="Registration.ICCardTypeID"]'
  86  |     );
  87  | 
  88  |     // NRIC textbox
  89  |     this.nricInput = page.locator(
  90  |   'input[ng-model="Registration.NationalId"]'
  91  | ).nth(1);
  92  | 
  93  |     // Passport textbox
  94  |     this.passportInput = page.locator(
  95  |       'input[ng-model="Registration.FamilyName"]'
  96  |     );
  97  | 
  98  |     // Passport Expiry Date
  99  |     this.passportExpiryDateInput = page.locator(
  100 |       'input[ng-model="Registration.PassportExpirydate"]'
  101 |     );
  102 | 
  103 |     // =========================
  104 |     // CHECKBOX
  105 |     // =========================
  106 |     this.staffCheckbox = page.locator(
  107 |       'input[type="checkbox"][ng-model="IsStaff"]'
  108 |     );
  109 | 
  110 |     // =========================
  111 |     // BUTTONS
  112 |     // =========================
  113 |     this.searchPatientButton = page.locator(
  114 |       'button[title="Search Patient"]'
  115 |     );
  116 | 
  117 |     this.findPatientButton = page.locator(
  118 |       'button[title="Find Patient"]'
  119 |     );
  120 | 
  121 |     this.visaButton = page.locator(
  122 |       'button[title="Visa"]'
  123 |     );
  124 | 
  125 |     this.myKadButton = page.locator(
  126 |       'button[title="Read MyKad Card"]'
  127 |     );
  128 |   }
  129 | 
  130 |   // =========================================================
  131 |   // PAGE VALIDATION
  132 |   // =========================================================
  133 | 
  134 |   async verifyRegistrationPageLoaded() {
  135 | 
  136 |   await this.page.waitForLoadState('domcontentloaded');
  137 | 
> 138 |   await this.page.waitForSelector(
      |                   ^ TimeoutError: page.waitForSelector: Timeout 30000ms exceeded.
  139 |     '#txtFirstName',
  140 |     {
  141 |       state: 'visible',
  142 |       timeout: 30000
  143 |     }
  144 |   );
  145 | 
  146 |   await expect(this.firstNameInput).toBeVisible();
  147 | }
  148 | 
  149 |   // =========================================================
  150 |   // REGISTRATION TYPE
  151 |   // =========================================================
  152 | 
  153 |   async selectRegistrationType(type: 'New' | 'Registered') {
  154 |     await this.regTypeDropdown.selectOption({ label: type });
  155 |   }
  156 | 
  157 |   async selectMRNRadio() {
  158 |     await this.mrnRadio.check();
  159 |   }
  160 | 
  161 |   async selectNRICRadio() {
  162 |     await this.nricRadio.check();
  163 |   }
  164 | 
  165 |   // =========================================================
  166 |   // NAME DETAILS
  167 |   // =========================================================
  168 | 
  169 |   async selectTitle(title: string) {
  170 |     await this.titleDropdown.selectOption({ label: title });
  171 |   }
  172 | 
  173 |   async enterFirstName(firstName: string) {
  174 |     await this.firstNameInput.fill(firstName);
  175 |   }
  176 | 
  177 |   async enterMiddleName(middleName: string) {
  178 |     await this.middleNameInput.fill(middleName);
  179 |   }
  180 | 
  181 |   async enterLastName(lastName: string) {
  182 |     await this.lastNameInput.fill(lastName);
  183 |   }
  184 | 
  185 |   async enterFamilyName(familyName: string) {
  186 |     await this.familyNameInput.fill(familyName);
  187 |   }
  188 | 
  189 |   async enterFullName(
  190 |     firstName: string,
  191 |     middleName?: string,
  192 |     lastName?: string
  193 |   ) {
  194 |     await this.firstNameInput.fill(firstName);
  195 | 
  196 |     if (middleName) {
  197 |       await this.middleNameInput.fill(middleName);
  198 |     }
  199 | 
  200 |     if (lastName) {
  201 |       await this.lastNameInput.fill(lastName);
  202 |     }
  203 |   }
  204 | 
  205 |   // =========================================================
  206 |   // IDENTIFICATION DETAILS
  207 |   // =========================================================
  208 | 
  209 |   async selectIdentificationType(type: string) {
  210 |     await this.identificationTypeDropdown.selectOption({
  211 |       label: type,
  212 |     });
  213 |   }
  214 | 
  215 |   async enterNRIC(nric: string) {
  216 |     await this.nricInput.fill(nric);
  217 |     await this.nricInput.press('Tab');
  218 |   }
  219 | 
  220 |   async enterPassportNumber(passportNo: string) {
  221 |     await this.passportInput.fill(passportNo);
  222 |   }
  223 | 
  224 |   async enterPassportExpiryDate(date: string) {
  225 |     await this.passportExpiryDateInput.fill(date);
  226 |     await this.passportExpiryDateInput.press('Tab');
  227 |   }
  228 | 
  229 |   // =========================================================
  230 |   // CHECKBOX ACTIONS
  231 |   // =========================================================
  232 | 
  233 |   async enableStaffCheckbox() {
  234 |     await this.staffCheckbox.check();
  235 |   }
  236 | 
  237 |   async disableStaffCheckbox() {
  238 |     await this.staffCheckbox.uncheck();
```