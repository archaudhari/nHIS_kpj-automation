import { Page, expect, Locator } from '@playwright/test';

interface DropdownLocator {
  selectOption(option: { label: string }): Promise<string | string[] | null>;
  click(): Promise<void>;
}

export class RegistrationPage {
  private page: Page;

  // =========================
  // 🔹 LOCATORS
  // =========================

  // Basic Info
  private nameInput: Locator;
  private nricInput: Locator;
  private dobInput: Locator;
  private nationalityDropdown: Locator;
  private genderDropdown: Locator;

  // Address
  private address1;
  private cityDropdown;
  private stateDropdown;
  private countryDropdown;

  // Visit Info
  private visitTypeDropdown;
  private refEntityDropdown;

  // Actions
  private saveButton;

  // Validation / Confirmation
  private successToast;
  private validationError;

  constructor(page: Page) {
    this.page = page;

    // Basic Info
    this.nameInput = this.page.locator('input[name="Name"], input[placeholder="Name"]');
    this.nricInput = this.page.locator('input[name="NRIC"]');
    this.dobInput = this.page.locator('input[placeholder="dd/mm/yyyy"]');
    this.nationalityDropdown = this.page.locator('select:has-text("Malaysian")');
    this.genderDropdown = this.page.locator('select').filter({ hasText: 'Gender' });

    // Address
    this.address1 = this.page.locator('input[name="AddressLine1"]');
    this.cityDropdown = this.page.locator('select:has-text("Petaling Jaya")');
    this.stateDropdown = this.page.locator('select:has-text("Selangor")');
    this.countryDropdown = this.page.locator('select:has-text("Malaysia")');

    // Visit Info
    this.visitTypeDropdown = this.page.locator('select').filter({ hasText: 'Visit Type' });
    this.refEntityDropdown = this.page.locator('select').filter({ hasText: 'Ref Entity Type' });

    // Actions
    this.saveButton = this.page.locator('button:has-text("Save")');

    // Validation / Confirmation
    this.successToast = this.page.locator('text=Successfully');
    this.validationError = this.page.locator('.validation-summary-errors');
  }

  // =========================
  // 🔹 METHODS
  // =========================

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');

    // Ensure Registration form loaded
    await expect(this.page.locator('text=Patient Information')).toBeVisible();
  }

  // -------------------------
  // BASIC DETAILS
  // -------------------------
  async fillBasicDetails() {
    // Name
    await this.nameInput.fill('Test Patient');

    // NRIC (use random to avoid duplicate issues)
    const randomNRIC = `900101${Math.floor(100000 + Math.random() * 900000)}`;
    await this.nricInput.fill(randomNRIC);

    // DOB (important: clear before fill)
    await this.dobInput.fill('');
    await this.dobInput.fill('01/01/1990');

    // Nationality
    await this.selectDropdown(this.nationalityDropdown, 'Malaysian');

    // Gender
    await this.selectDropdown(this.genderDropdown, 'Male');
  }

  // -------------------------
  // ADDRESS
  // -------------------------
  async fillAddress() {
    await this.address1.fill('Test Address Line 1');

    await this.selectDropdown(this.cityDropdown, 'Petaling Jaya');
    await this.selectDropdown(this.stateDropdown, 'Selangor');
    await this.selectDropdown(this.countryDropdown, 'Malaysia');
  }

  // -------------------------
  // VISIT DETAILS
  // -------------------------
  async fillVisitDetails() {
    await this.selectDropdown(this.visitTypeDropdown, 'OP');

    await this.selectDropdown(this.refEntityDropdown, 'Self');
  }

  // -------------------------
  // SAVE
  // -------------------------
  async clickSave() {
    await this.saveButton.click();
  }

  // -------------------------
  // VALIDATION
  // -------------------------
  async validateSuccess() {
    // Either toast OR redirect OR new record appears
    await Promise.race([
      this.successToast.waitFor({ state: 'visible', timeout: 5000 }),
      this.page.waitForURL(/Visit|Registration|Dashboard/),
    ]);
  }

  async validateError() {
    await expect(this.validationError).toBeVisible();
  }

  // =========================
  // 🔧 GENERIC DROPDOWN HANDLER
  // =========================
  async selectDropdown(locator: Locator, value: string) {
  try {
    // Case 1: Native <select>
    await locator.selectOption({ label: value });
  } catch {
    // Case 2: Custom dropdown
    await locator.click();
    await this.page.locator(`text=${value}`).click();
  }
}
}