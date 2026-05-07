// ============================================================
// pages/RegistrationPage.ts
// ============================================================
import { Page, expect, Locator } from '@playwright/test';

export class RegistrationPage {
  private page: Page;

  // ==========================================================
  // LOCATORS
  // ----------------------------------------------------------
  // HOW TO FILL THESE IN:
  //   1. Open the Registration page in Chrome
  //   2. Right-click each field → Inspect
  //   3. Look for: id="...", name="...", placeholder="..."
  //   4. Replace the TODO selector with the real one
  // ==========================================================

  // ── Section: Patient Information ─────────────────────────

  // Full name input
  // TODO: Inspect the Name field. Common selectors:
  //   input[name="PatientName"] | input[placeholder="Full Name"] | #txtPatientName
  private nameInput: Locator;

  // NRIC / IC number
  // TODO: input[name="NRIC"] | input[placeholder="NRIC"] | #txtNRIC
  private nricInput: Locator;

  // Date of Birth  (format: dd/mm/yyyy)
  // TODO: input[placeholder="dd/mm/yyyy"] | input[name="DOB"] | #txtDOB
  private dobInput: Locator;

  // Nationality dropdown
  // TODO: select[name="NationalityID"] | #ddlNationality
  private nationalityDropdown: Locator;

  // Gender dropdown
  // TODO: select[name="GenderID"] | #ddlGender
  private genderDropdown: Locator;

  // Race dropdown  ← ADD if visible on your form
  // TODO: select[name="RaceID"] | #ddlRace
  private raceDropdown: Locator;

  // Religion dropdown  ← ADD if visible on your form
  // TODO: select[name="ReligionID"] | #ddlReligion
  private religionDropdown: Locator;

  // Marital status dropdown  ← ADD if visible on your form
  // TODO: select[name="MaritalStatusID"] | #ddlMaritalStatus
  private maritalStatusDropdown: Locator;

  // Phone / mobile number
  // TODO: input[name="MobileNo"] | input[placeholder="Mobile No"] | #txtMobileNo
  private mobileInput: Locator;

  // Email
  // TODO: input[name="Email"] | input[placeholder="Email"] | #txtEmail
  private emailInput: Locator;

  // ── Section: Address ─────────────────────────────────────

  // Address line 1
  // TODO: input[name="AddressLine1"] | #txtAddress1
  private address1: Locator;

  // Address line 2  ← ADD if visible on your form
  // TODO: input[name="AddressLine2"] | #txtAddress2
  private address2: Locator;

  // Postcode
  // TODO: input[name="Postcode"] | input[placeholder="Postcode"] | #txtPostcode
  private postcodeInput: Locator;

  // City dropdown
  // TODO: select[name="CityID"] | #ddlCity
  private cityDropdown: Locator;

  // State dropdown
  // TODO: select[name="StateID"] | #ddlState
  private stateDropdown: Locator;

  // Country dropdown
  // TODO: select[name="CountryID"] | #ddlCountry
  private countryDropdown: Locator;

  // ── Section: Visit Information ────────────────────────────

  // Visit type dropdown  (e.g. OP, IP, Emergency)
  // TODO: select[name="VisitTypeID"] | #ddlVisitType
  private visitTypeDropdown: Locator;

  // Referring entity type  (e.g. Self, Doctor, Company)
  // TODO: select[name="RefEntityTypeID"] | #ddlRefEntityType
  private refEntityDropdown: Locator;

  // Doctor / Consultant dropdown  ← ADD if visible on your form
  // TODO: select[name="DoctorID"] | #ddlDoctor
  private doctorDropdown: Locator;

  // Clinic / Department dropdown  ← ADD if visible on your form
  // TODO: select[name="ClinicID"] | #ddlClinic
  private clinicDropdown: Locator;

  // ── Section: Guarantee / Payment ─────────────────────────

  // Guarantee type  (e.g. Cash, Insurance, Company)
  // TODO: select[name="GuaranteeTypeID"] | #ddlGuaranteeType
  private guaranteeTypeDropdown: Locator;

  // ── Actions ───────────────────────────────────────────────

  // Save / Submit button
  // TODO: button:has-text("Save") | input[value="Save"] | #btnSave
  private saveButton: Locator;

  // ── Validation / Confirmation ─────────────────────────────

  // Success toast or confirmation message
  // TODO: Observe what appears after a successful save.
  //   Common: text=Successfully | .alert-success | .toast-success | #successMsg
  private successToast: Locator;

  // Validation error summary
  // TODO: .validation-summary-errors | .alert-danger | .error-message
  private validationError: Locator;

  // ==========================================================
  // CONSTRUCTOR — wire up all locators
  // ==========================================================
  constructor(page: Page) {
    this.page = page;

    // ── Patient Information ──────────────────────────────────
    this.nameInput = this.page.locator(
      'input[name="PatientName"], input[placeholder="Full Name"], input[name="Name"], input[placeholder="Name"]'
      // TODO: Keep only the selector that matches your form. Delete the others.
    );

    this.nricInput = this.page.locator(
      'input[name="NRIC"], input[placeholder="NRIC No"], #txtNRIC'
      // TODO: Keep only the matching selector.
    );

    this.dobInput = this.page.locator(
      'input[placeholder="dd/mm/yyyy"], input[name="DOB"], #txtDOB'
      // TODO: Keep only the matching selector.
    );

    this.nationalityDropdown = this.page.locator(
      'select[name="NationalityID"], #ddlNationality'
      // TODO: Keep only the matching selector.
    );

    this.genderDropdown = this.page.locator(
      'select[name="GenderID"], #ddlGender'
      // TODO: Keep only the matching selector.
    );

    this.raceDropdown = this.page.locator(
      'select[name="RaceID"], #ddlRace'
      // TODO: Keep only the matching selector. Remove this locator if Race is not on your form.
    );

    this.religionDropdown = this.page.locator(
      'select[name="ReligionID"], #ddlReligion'
      // TODO: Keep only the matching selector. Remove if not on form.
    );

    this.maritalStatusDropdown = this.page.locator(
      'select[name="MaritalStatusID"], #ddlMaritalStatus'
      // TODO: Keep only the matching selector. Remove if not on form.
    );

    this.mobileInput = this.page.locator(
      'input[name="MobileNo"], input[placeholder="Mobile No"], #txtMobileNo'
      // TODO: Keep only the matching selector.
    );

    this.emailInput = this.page.locator(
      'input[name="Email"], input[placeholder="Email"], #txtEmail'
      // TODO: Keep only the matching selector. Remove if not on form.
    );

    // ── Address ──────────────────────────────────────────────
    this.address1 = this.page.locator(
      'input[name="AddressLine1"], #txtAddress1'
      // TODO: Keep only the matching selector.
    );

    this.address2 = this.page.locator(
      'input[name="AddressLine2"], #txtAddress2'
      // TODO: Keep only the matching selector. Remove if not on form.
    );

    this.postcodeInput = this.page.locator(
      'input[name="Postcode"], input[placeholder="Postcode"], #txtPostcode'
      // TODO: Keep only the matching selector.
    );

    this.cityDropdown = this.page.locator(
      'select[name="CityID"], #ddlCity'
      // TODO: Keep only the matching selector.
    );

    this.stateDropdown = this.page.locator(
      'select[name="StateID"], #ddlState'
      // TODO: Keep only the matching selector.
    );

    this.countryDropdown = this.page.locator(
      'select[name="CountryID"], #ddlCountry'
      // TODO: Keep only the matching selector.
    );

    // ── Visit Information ─────────────────────────────────────
    this.visitTypeDropdown = this.page.locator(
      'select[name="VisitTypeID"], #ddlVisitType'
      // TODO: Keep only the matching selector.
    );

    this.refEntityDropdown = this.page.locator(
      'select[name="RefEntityTypeID"], #ddlRefEntityType'
      // TODO: Keep only the matching selector.
    );

    this.doctorDropdown = this.page.locator(
      'select[name="DoctorID"], #ddlDoctor'
      // TODO: Keep only the matching selector. Remove if not on form.
    );

    this.clinicDropdown = this.page.locator(
      'select[name="ClinicID"], #ddlClinic'
      // TODO: Keep only the matching selector. Remove if not on form.
    );

    // ── Guarantee / Payment ───────────────────────────────────
    this.guaranteeTypeDropdown = this.page.locator(
      'select[name="GuaranteeTypeID"], #ddlGuaranteeType'
      // TODO: Keep only the matching selector. Remove if not on form.
    );

    // ── Actions ───────────────────────────────────────────────
    this.saveButton = this.page.locator(
      'button:has-text("Save"), input[value="Save"], #btnSave'
      // TODO: Keep only the matching selector.
    );

    // ── Validation ────────────────────────────────────────────
    this.successToast = this.page.locator(
      'text=Successfully, .alert-success, .toast-success, #successMsg'
      // TODO: Run a successful save manually and observe what element appears.
    );

    this.validationError = this.page.locator(
      '.validation-summary-errors, .alert-danger, .error-message'
      // TODO: Trigger a validation error manually and observe what element appears.
    );
  }

  // ==========================================================
  // METHODS
  // ==========================================================

  // ── Wait for page to be ready ─────────────────────────────
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
    // TODO: Update heading text if your form says something other than 'Patient Information'
    await expect(this.page.locator('text=Patient Information')).toBeVisible();
  }

  // ── Section: Basic Details ────────────────────────────────
  async fillBasicDetails() {

    // Full name
    // TODO: Replace 'Test Patient' with a realistic test name if required by system validation
    await this.nameInput.fill('Test Patient');

    // NRIC — randomised to avoid duplicate record errors
    // TODO: Confirm the NRIC format your system accepts.
    //       Malaysian format: 6-digit DOB + 2-digit state + 4-digit sequence
    //       Example: 900101-14-1234  (with or without dashes depending on system)
    const randomNRIC = `900101${Math.floor(100000 + Math.random() * 900000)}`;
    await this.nricInput.fill(randomNRIC);

    // Date of birth
    // TODO: Confirm your system's date format: dd/mm/yyyy or mm/dd/yyyy or yyyy-mm-dd
    await this.dobInput.fill('');          // clear any pre-filled value first
    await this.dobInput.fill('01/01/1990');

    // Nationality
    // TODO: Replace 'Malaysian' with the exact <option> label in your dropdown
    await this.selectDropdown(this.nationalityDropdown, 'Malaysian');

    // Gender
    // TODO: Replace 'Male' with the exact <option> label (e.g. 'MALE', 'M', 'Lelaki')
    await this.selectDropdown(this.genderDropdown, 'Male');

    // Race  ← UNCOMMENT if Race field is present on your form
    // TODO: Replace 'Malay' with the exact <option> label
    // await this.selectDropdown(this.raceDropdown, 'Malay');

    // Religion  ← UNCOMMENT if Religion field is present on your form
    // TODO: Replace 'Islam' with the exact <option> label
    // await this.selectDropdown(this.religionDropdown, 'Islam');

    // Marital status  ← UNCOMMENT if present on your form
    // TODO: Replace 'Single' with the exact <option> label
    // await this.selectDropdown(this.maritalStatusDropdown, 'Single');

    // Mobile number  ← UNCOMMENT if present on your form
    // TODO: Replace with a valid test mobile number accepted by your system
    // await this.mobileInput.fill('0123456789');

    // Email  ← UNCOMMENT if present on your form
    // TODO: Replace with a valid test email
    // await this.emailInput.fill('testpatient@example.com');
  }

  // ── Section: Address ─────────────────────────────────────
  async fillAddress() {

    // Address line 1
    // TODO: Replace with any valid address string your system accepts
    await this.address1.fill('No 1, Jalan Test');

    // Address line 2  ← UNCOMMENT if present on your form
    // TODO: Replace with valid second address line
    // await this.address2.fill('Taman Test');

    // Postcode
    // TODO: Replace '47500' with a postcode that corresponds to your City/State selection
    await this.postcodeInput.fill('47500');

    // City
    // TODO: Replace 'Petaling Jaya' with the exact <option> label in your dropdown
    await this.selectDropdown(this.cityDropdown, 'Petaling Jaya');

    // State
    // TODO: Replace 'Selangor' with the exact <option> label
    await this.selectDropdown(this.stateDropdown, 'Selangor');

    // Country
    // TODO: Replace 'Malaysia' with the exact <option> label
    await this.selectDropdown(this.countryDropdown, 'Malaysia');
  }

  // ── Section: Visit Details ────────────────────────────────
  async fillVisitDetails() {

    // Visit type
    // TODO: Replace 'OP' with the exact <option> label for Outpatient
    //       Common values: 'OP', 'Outpatient', 'Out-Patient'
    await this.selectDropdown(this.visitTypeDropdown, 'OP');

    // Referring entity type
    // TODO: Replace 'Self' with the exact <option> label
    //       Common values: 'Self', 'SELF', 'Walk-In'
    await this.selectDropdown(this.refEntityDropdown, 'Self');

    // Doctor / Consultant  ← UNCOMMENT if present on your form
    // TODO: Replace with the exact doctor name or code shown in the dropdown
    // await this.selectDropdown(this.doctorDropdown, 'DR. TEST DOCTOR');

    // Clinic / Department  ← UNCOMMENT if present on your form
    // TODO: Replace with the exact clinic name shown in the dropdown
    // await this.selectDropdown(this.clinicDropdown, 'GENERAL CLINIC');

    // Guarantee type  ← UNCOMMENT if present on your form
    // TODO: Replace 'Cash' with the exact <option> label
    // await this.selectDropdown(this.guaranteeTypeDropdown, 'Cash');
  }

  // ── Save ─────────────────────────────────────────────────
  async clickSave() {
    await this.saveButton.click();
  }

  // ── Validate success ─────────────────────────────────────
  async validateSuccess() {
    // Waits for whichever happens first: a success toast OR a URL change
    // TODO: After a manual successful save, observe:
    //   (a) Does a toast/banner appear? Update successToast selector.
    //   (b) Does the URL change? Update the regex below to match the new URL pattern.
    await Promise.race([
      this.successToast.waitFor({ state: 'visible', timeout: 8000 }),
      this.page.waitForURL(/Visit|Registration|Dashboard|PatientList/, { timeout: 8000 }),
    ]);
    console.log('✅ Registration saved successfully');
  }

  // ── Validate error ────────────────────────────────────────
  async validateError() {
    // TODO: Trigger a known validation error manually to confirm the selector below
    await expect(this.validationError).toBeVisible();
  }

  // ==========================================================
  // GENERIC DROPDOWN HANDLER
  // Tries native <select> first; falls back to custom dropdown
  // ==========================================================
  async selectDropdown(locator: Locator, value: string) {
    try {
      // Attempt 1: native HTML <select>
      await locator.selectOption({ label: value });
    } catch {
      // Attempt 2: custom dropdown widget (click to open, then click option)
      await locator.click();
      await this.page.waitForTimeout(300); // allow dropdown list to render
      await this.page.locator(`text=${value}`).first().click();
    }
  }
}
