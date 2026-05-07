# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:8:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('input[name="Name"], input[placeholder="Name"]')

```

# Test source

```ts
  1   | import { Page, expect, Locator } from '@playwright/test';
  2   | 
  3   | interface DropdownLocator {
  4   |   selectOption(option: { label: string }): Promise<string | string[] | null>;
  5   |   click(): Promise<void>;
  6   | }
  7   | 
  8   | export class RegistrationPage {
  9   |   private page: Page;
  10  | 
  11  |   // =========================
  12  |   // 🔹 LOCATORS
  13  |   // =========================
  14  | 
  15  |   // Basic Info
  16  |   private nameInput: Locator;
  17  |   private nricInput: Locator;
  18  |   private dobInput: Locator;
  19  |   private nationalityDropdown: Locator;
  20  |   private genderDropdown: Locator;
  21  | 
  22  |   // Address
  23  |   private address1;
  24  |   private cityDropdown;
  25  |   private stateDropdown;
  26  |   private countryDropdown;
  27  | 
  28  |   // Visit Info
  29  |   private visitTypeDropdown;
  30  |   private refEntityDropdown;
  31  | 
  32  |   // Actions
  33  |   private saveButton;
  34  | 
  35  |   // Validation / Confirmation
  36  |   private successToast;
  37  |   private validationError;
  38  | 
  39  |   constructor(page: Page) {
  40  |     this.page = page;
  41  | 
  42  |     // Basic Info
  43  |     this.nameInput = this.page.locator('input[name="Name"], input[placeholder="Name"]');
  44  |     this.nricInput = this.page.locator('input[name="NRIC"]');
  45  |     this.dobInput = this.page.locator('input[placeholder="dd/mm/yyyy"]');
  46  |     this.nationalityDropdown = this.page.locator('select:has-text("Malaysian")');
  47  |     this.genderDropdown = this.page.locator('select').filter({ hasText: 'Gender' });
  48  | 
  49  |     // Address
  50  |     this.address1 = this.page.locator('input[name="AddressLine1"]');
  51  |     this.cityDropdown = this.page.locator('select:has-text("Petaling Jaya")');
  52  |     this.stateDropdown = this.page.locator('select:has-text("Selangor")');
  53  |     this.countryDropdown = this.page.locator('select:has-text("Malaysia")');
  54  | 
  55  |     // Visit Info
  56  |     this.visitTypeDropdown = this.page.locator('select').filter({ hasText: 'Visit Type' });
  57  |     this.refEntityDropdown = this.page.locator('select').filter({ hasText: 'Ref Entity Type' });
  58  | 
  59  |     // Actions
  60  |     this.saveButton = this.page.locator('button:has-text("Save")');
  61  | 
  62  |     // Validation / Confirmation
  63  |     this.successToast = this.page.locator('text=Successfully');
  64  |     this.validationError = this.page.locator('.validation-summary-errors');
  65  |   }
  66  | 
  67  |   // =========================
  68  |   // 🔹 METHODS
  69  |   // =========================
  70  | 
  71  |   async waitForPageLoad() {
  72  |     await this.page.waitForLoadState('networkidle');
  73  | 
  74  |     // Ensure Registration form loaded
  75  |     await expect(this.page.locator('text=Patient Information')).toBeVisible();
  76  |   }
  77  | 
  78  |   // -------------------------
  79  |   // BASIC DETAILS
  80  |   // -------------------------
  81  |   async fillBasicDetails() {
  82  |     // Name
> 83  |     await this.nameInput.fill('Test Patient');
      |                          ^ Error: locator.fill: Test ended.
  84  | 
  85  |     // NRIC (use random to avoid duplicate issues)
  86  |     const randomNRIC = `900101${Math.floor(100000 + Math.random() * 900000)}`;
  87  |     await this.nricInput.fill(randomNRIC);
  88  | 
  89  |     // DOB (important: clear before fill)
  90  |     await this.dobInput.fill('');
  91  |     await this.dobInput.fill('01/01/1990');
  92  | 
  93  |     // Nationality
  94  |     await this.selectDropdown(this.nationalityDropdown, 'Malaysian');
  95  | 
  96  |     // Gender
  97  |     await this.selectDropdown(this.genderDropdown, 'Male');
  98  |   }
  99  | 
  100 |   // -------------------------
  101 |   // ADDRESS
  102 |   // -------------------------
  103 |   async fillAddress() {
  104 |     await this.address1.fill('Test Address Line 1');
  105 | 
  106 |     await this.selectDropdown(this.cityDropdown, 'Petaling Jaya');
  107 |     await this.selectDropdown(this.stateDropdown, 'Selangor');
  108 |     await this.selectDropdown(this.countryDropdown, 'Malaysia');
  109 |   }
  110 | 
  111 |   // -------------------------
  112 |   // VISIT DETAILS
  113 |   // -------------------------
  114 |   async fillVisitDetails() {
  115 |     await this.selectDropdown(this.visitTypeDropdown, 'OP');
  116 | 
  117 |     await this.selectDropdown(this.refEntityDropdown, 'Self');
  118 |   }
  119 | 
  120 |   // -------------------------
  121 |   // SAVE
  122 |   // -------------------------
  123 |   async clickSave() {
  124 |     await this.saveButton.click();
  125 |   }
  126 | 
  127 |   // -------------------------
  128 |   // VALIDATION
  129 |   // -------------------------
  130 |   async validateSuccess() {
  131 |     // Either toast OR redirect OR new record appears
  132 |     await Promise.race([
  133 |       this.successToast.waitFor({ state: 'visible', timeout: 5000 }),
  134 |       this.page.waitForURL(/Visit|Registration|Dashboard/),
  135 |     ]);
  136 |   }
  137 | 
  138 |   async validateError() {
  139 |     await expect(this.validationError).toBeVisible();
  140 |   }
  141 | 
  142 |   // =========================
  143 |   // 🔧 GENERIC DROPDOWN HANDLER
  144 |   // =========================
  145 |   async selectDropdown(locator: Locator, value: string) {
  146 |   try {
  147 |     // Case 1: Native <select>
  148 |     await locator.selectOption({ label: value });
  149 |   } catch {
  150 |     // Case 2: Custom dropdown
  151 |     await locator.click();
  152 |     await this.page.locator(`text=${value}`).click();
  153 |   }
  154 | }
  155 | }
```