// pages/RegistrationPage.ts

import { expect, Locator, Page } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;

  // =========================
  // REGISTRATION SECTION
  // =========================
  readonly patientInfoHeader: Locator;
  readonly regTypeDropdown: Locator;

  // Radio Buttons
  readonly mrnRadio: Locator;
  readonly nricRadio: Locator;

  // Name Section
  readonly titleDropdown: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly familyNameInput: Locator;

  // Identification
  readonly identificationTypeDropdown: Locator;
  readonly nricInput: Locator;
  readonly passportInput: Locator;
  readonly passportExpiryDateInput: Locator;

  // Staff Checkbox
  readonly staffCheckbox: Locator;

  // Buttons
  readonly searchPatientButton: Locator;
  readonly findPatientButton: Locator;
  readonly visaButton: Locator;
  readonly myKadButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // =========================
    // SECTION
    // =========================
this.patientInfoHeader = page.locator('#headingTwo');

    // =========================
    // REG TYPE
    // =========================
    this.regTypeDropdown = page.locator(
      'select[ng-model="Registration.PatientTypeID"]'
    );

    // =========================
    // RADIO BUTTONS
    // =========================
    this.mrnRadio = page.locator(
      'input[type="radio"][value="1"]'
    );

    this.nricRadio = page.locator(
      'input[type="radio"][value="2"]'
    );

    // =========================
    // NAME SECTION
    // =========================
    this.titleDropdown = page.locator(
      'select[ng-model="Registration.PrefixID"]'
    );

    this.firstNameInput = page.locator('#txtFirstName');

    this.middleNameInput = page.locator('#txtMiddleName');

    this.lastNameInput = page.locator('#txtLastName');

    this.familyNameInput = page.locator('#txtFamilyName1');

    // =========================
    // IDENTIFICATION
    // =========================
    this.identificationTypeDropdown = page.locator(
      'select[ng-model="Registration.ICCardTypeID"]'
    );

    // NRIC textbox
    this.nricInput = page.locator(
  'input[ng-model="Registration.NationalId"]'
).nth(1);

    // Passport textbox
    this.passportInput = page.locator(
      'input[ng-model="Registration.FamilyName"]'
    );

    // Passport Expiry Date
    this.passportExpiryDateInput = page.locator(
      'input[ng-model="Registration.PassportExpirydate"]'
    );

    // =========================
    // CHECKBOX
    // =========================
    this.staffCheckbox = page.locator(
      'input[type="checkbox"][ng-model="IsStaff"]'
    );

    // =========================
    // BUTTONS
    // =========================
    this.searchPatientButton = page.locator(
      'button[title="Search Patient"]'
    );

    this.findPatientButton = page.locator(
      'button[title="Find Patient"]'
    );

    this.visaButton = page.locator(
      'button[title="Visa"]'
    );

    this.myKadButton = page.locator(
      'button[title="Read MyKad Card"]'
    );
  }

  // =========================================================
  // PAGE VALIDATION
  // =========================================================

  async verifyRegistrationPageLoaded() {

  await this.page.waitForLoadState('domcontentloaded');

  await this.page.waitForSelector(
    '#txtFirstName',
    {
      state: 'visible',
      timeout: 30000
    }
  );

  await expect(this.firstNameInput).toBeVisible();
}

  // =========================================================
  // REGISTRATION TYPE
  // =========================================================

  async selectRegistrationType(type: 'New' | 'Registered') {
    await this.regTypeDropdown.selectOption({ label: type });
  }

  async selectMRNRadio() {
    await this.mrnRadio.check();
  }

  async selectNRICRadio() {
    await this.nricRadio.check();
  }

  // =========================================================
  // NAME DETAILS
  // =========================================================

  async selectTitle(title: string) {
    await this.titleDropdown.selectOption({ label: title });
  }

  async enterFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async enterMiddleName(middleName: string) {
    await this.middleNameInput.fill(middleName);
  }

  async enterLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async enterFamilyName(familyName: string) {
    await this.familyNameInput.fill(familyName);
  }

  async enterFullName(
    firstName: string,
    middleName?: string,
    lastName?: string
  ) {
    await this.firstNameInput.fill(firstName);

    if (middleName) {
      await this.middleNameInput.fill(middleName);
    }

    if (lastName) {
      await this.lastNameInput.fill(lastName);
    }
  }

  // =========================================================
  // IDENTIFICATION DETAILS
  // =========================================================

  async selectIdentificationType(type: string) {
    await this.identificationTypeDropdown.selectOption({
      label: type,
    });
  }

  async enterNRIC(nric: string) {
    await this.nricInput.fill(nric);
    await this.nricInput.press('Tab');
  }

  async enterPassportNumber(passportNo: string) {
    await this.passportInput.fill(passportNo);
  }

  async enterPassportExpiryDate(date: string) {
    await this.passportExpiryDateInput.fill(date);
    await this.passportExpiryDateInput.press('Tab');
  }

  // =========================================================
  // CHECKBOX ACTIONS
  // =========================================================

  async enableStaffCheckbox() {
    await this.staffCheckbox.check();
  }

  async disableStaffCheckbox() {
    await this.staffCheckbox.uncheck();
  }

  // =========================================================
  // BUTTON ACTIONS
  // =========================================================

  async clickSearchPatient() {
    await this.searchPatientButton.click();
  }

  async clickFindPatient() {
    await this.findPatientButton.click();
  }

  async clickVisaButton() {
    await this.visaButton.click();
  }

  async clickMyKadButton() {
    await this.myKadButton.click();
  }

  // =========================================================
  // COMPLETE REGISTRATION FLOW
  // =========================================================

  async createNewPatientRegistration(data: {
    title: string;
    firstName: string;
    middleName?: string;
    lastName?: string;
    familyName?: string;
    identificationType: string;
    nric?: string;
    passportNo?: string;
    passportExpiryDate?: string;
  }) {
    await this.verifyRegistrationPageLoaded();

    await this.selectRegistrationType('New');

    await this.selectTitle(data.title);

    await this.enterFullName(
      data.firstName,
      data.middleName,
      data.lastName
    );

    if (data.familyName) {
      await this.enterFamilyName(data.familyName);
    }

    await this.selectIdentificationType(
      data.identificationType
    );

    if (data.nric) {
      await this.enterNRIC(data.nric);
    }

    if (data.passportNo) {
      await this.enterPassportNumber(data.passportNo);
    }

    if (data.passportExpiryDate) {
      await this.enterPassportExpiryDate(
        data.passportExpiryDate
      );
    }
  }
}