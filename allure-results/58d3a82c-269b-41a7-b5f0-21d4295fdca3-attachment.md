# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:10:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('input[name="PatientName"], input[placeholder="Full Name"], input[name="Name"], input[placeholder="Name"]')

```

# Test source

```ts
  178 |       // TODO: Keep only the matching selector.
  179 |     );
  180 | 
  181 |     this.emailInput = this.page.locator(
  182 |       'input[name="Email"], input[placeholder="Email"], #txtEmail'
  183 |       // TODO: Keep only the matching selector. Remove if not on form.
  184 |     );
  185 | 
  186 |     // ── Address ──────────────────────────────────────────────
  187 |     this.address1 = this.page.locator(
  188 |       'input[name="AddressLine1"], #txtAddress1'
  189 |       // TODO: Keep only the matching selector.
  190 |     );
  191 | 
  192 |     this.address2 = this.page.locator(
  193 |       'input[name="AddressLine2"], #txtAddress2'
  194 |       // TODO: Keep only the matching selector. Remove if not on form.
  195 |     );
  196 | 
  197 |     this.postcodeInput = this.page.locator(
  198 |       'input[name="Postcode"], input[placeholder="Postcode"], #txtPostcode'
  199 |       // TODO: Keep only the matching selector.
  200 |     );
  201 | 
  202 |     this.cityDropdown = this.page.locator(
  203 |       'select[name="CityID"], #ddlCity'
  204 |       // TODO: Keep only the matching selector.
  205 |     );
  206 | 
  207 |     this.stateDropdown = this.page.locator(
  208 |       'select[name="StateID"], #ddlState'
  209 |       // TODO: Keep only the matching selector.
  210 |     );
  211 | 
  212 |     this.countryDropdown = this.page.locator(
  213 |       'select[name="CountryID"], #ddlCountry'
  214 |       // TODO: Keep only the matching selector.
  215 |     );
  216 | 
  217 |     // ── Visit Information ─────────────────────────────────────
  218 |     this.visitTypeDropdown = this.page.locator(
  219 |       'select[name="VisitTypeID"], #ddlVisitType'
  220 |       // TODO: Keep only the matching selector.
  221 |     );
  222 | 
  223 |     this.refEntityDropdown = this.page.locator(
  224 |       'select[name="RefEntityTypeID"], #ddlRefEntityType'
  225 |       // TODO: Keep only the matching selector.
  226 |     );
  227 | 
  228 |     this.doctorDropdown = this.page.locator(
  229 |       'select[name="DoctorID"], #ddlDoctor'
  230 |       // TODO: Keep only the matching selector. Remove if not on form.
  231 |     );
  232 | 
  233 |     this.clinicDropdown = this.page.locator(
  234 |       'select[name="ClinicID"], #ddlClinic'
  235 |       // TODO: Keep only the matching selector. Remove if not on form.
  236 |     );
  237 | 
  238 |     // ── Guarantee / Payment ───────────────────────────────────
  239 |     this.guaranteeTypeDropdown = this.page.locator(
  240 |       'select[name="GuaranteeTypeID"], #ddlGuaranteeType'
  241 |       // TODO: Keep only the matching selector. Remove if not on form.
  242 |     );
  243 | 
  244 |     // ── Actions ───────────────────────────────────────────────
  245 |     this.saveButton = this.page.locator(
  246 |       'button:has-text("Save"), input[value="Save"], #btnSave'
  247 |       // TODO: Keep only the matching selector.
  248 |     );
  249 | 
  250 |     // ── Validation ────────────────────────────────────────────
  251 |     this.successToast = this.page.locator(
  252 |       'text=Successfully, .alert-success, .toast-success, #successMsg'
  253 |       // TODO: Run a successful save manually and observe what element appears.
  254 |     );
  255 | 
  256 |     this.validationError = this.page.locator(
  257 |       '.validation-summary-errors, .alert-danger, .error-message'
  258 |       // TODO: Trigger a validation error manually and observe what element appears.
  259 |     );
  260 |   }
  261 | 
  262 |   // ==========================================================
  263 |   // METHODS
  264 |   // ==========================================================
  265 | 
  266 |   // ── Wait for page to be ready ─────────────────────────────
  267 |   async waitForPageLoad() {
  268 |     await this.page.waitForLoadState('networkidle');
  269 |     // TODO: Update heading text if your form says something other than 'Patient Information'
  270 |     await expect(this.page.locator('text=Patient Information')).toBeVisible();
  271 |   }
  272 | 
  273 |   // ── Section: Basic Details ────────────────────────────────
  274 |   async fillBasicDetails() {
  275 | 
  276 |     // Full name
  277 |     // TODO: Replace 'Test Patient' with a realistic test name if required by system validation
> 278 |  await this.nameInput.fill('Test Patient');
      |                       ^ Error: locator.fill: Test ended.
  279 | 
  280 |     // NRIC — randomised to avoid duplicate record errors
  281 |     // TODO: Confirm the NRIC format your system accepts.
  282 |     //       Malaysian format: 6-digit DOB + 2-digit state + 4-digit sequence
  283 |     //       Example: 900101-14-1234  (with or without dashes depending on system)
  284 |     const randomNRIC = `900101${Math.floor(100000 + Math.random() * 900000)}`;
  285 |     await this.nricInput.fill(randomNRIC);
  286 | 
  287 |     // Date of birth
  288 |     // TODO: Confirm your system's date format: dd/mm/yyyy or mm/dd/yyyy or yyyy-mm-dd
  289 |     await this.dobInput.fill('');          // clear any pre-filled value first
  290 |     await this.dobInput.fill('01/01/1990');
  291 | 
  292 |     // Nationality
  293 |     // TODO: Replace 'Malaysian' with the exact <option> label in your dropdown
  294 |     await this.selectDropdown(this.nationalityDropdown, 'Malaysian');
  295 | 
  296 |     // Gender
  297 |     // TODO: Replace 'Male' with the exact <option> label (e.g. 'MALE', 'M', 'Lelaki')
  298 |     await this.selectDropdown(this.genderDropdown, 'Male');
  299 | 
  300 |     // Race  ← UNCOMMENT if Race field is present on your form
  301 |     // TODO: Replace 'Malay' with the exact <option> label
  302 |     // await this.selectDropdown(this.raceDropdown, 'Malay');
  303 | 
  304 |     // Religion  ← UNCOMMENT if Religion field is present on your form
  305 |     // TODO: Replace 'Islam' with the exact <option> label
  306 |     // await this.selectDropdown(this.religionDropdown, 'Islam');
  307 | 
  308 |     // Marital status  ← UNCOMMENT if present on your form
  309 |     // TODO: Replace 'Single' with the exact <option> label
  310 |     // await this.selectDropdown(this.maritalStatusDropdown, 'Single');
  311 | 
  312 |     // Mobile number  ← UNCOMMENT if present on your form
  313 |     // TODO: Replace with a valid test mobile number accepted by your system
  314 |     // await this.mobileInput.fill('0123456789');
  315 | 
  316 |     // Email  ← UNCOMMENT if present on your form
  317 |     // TODO: Replace with a valid test email
  318 |     // await this.emailInput.fill('testpatient@example.com');
  319 |   }
  320 | 
  321 |   // ── Section: Address ─────────────────────────────────────
  322 |   async fillAddress() {
  323 | 
  324 |     // Address line 1
  325 |     // TODO: Replace with any valid address string your system accepts
  326 |     await this.address1.fill('No 1, Jalan Test');
  327 | 
  328 |     // Address line 2  ← UNCOMMENT if present on your form
  329 |     // TODO: Replace with valid second address line
  330 |     // await this.address2.fill('Taman Test');
  331 | 
  332 |     // Postcode
  333 |     // TODO: Replace '47500' with a postcode that corresponds to your City/State selection
  334 |     await this.postcodeInput.fill('47500');
  335 | 
  336 |     // City
  337 |     // TODO: Replace 'Petaling Jaya' with the exact <option> label in your dropdown
  338 |     await this.selectDropdown(this.cityDropdown, 'Petaling Jaya');
  339 | 
  340 |     // State
  341 |     // TODO: Replace 'Selangor' with the exact <option> label
  342 |     await this.selectDropdown(this.stateDropdown, 'Selangor');
  343 | 
  344 |     // Country
  345 |     // TODO: Replace 'Malaysia' with the exact <option> label
  346 |     await this.selectDropdown(this.countryDropdown, 'Malaysia');
  347 |   }
  348 | 
  349 |   // ── Section: Visit Details ────────────────────────────────
  350 |   async fillVisitDetails() {
  351 | 
  352 |     // Visit type
  353 |     // TODO: Replace 'OP' with the exact <option> label for Outpatient
  354 |     //       Common values: 'OP', 'Outpatient', 'Out-Patient'
  355 |     await this.selectDropdown(this.visitTypeDropdown, 'OP');
  356 | 
  357 |     // Referring entity type
  358 |     // TODO: Replace 'Self' with the exact <option> label
  359 |     //       Common values: 'Self', 'SELF', 'Walk-In'
  360 |     await this.selectDropdown(this.refEntityDropdown, 'Self');
  361 | 
  362 |     // Doctor / Consultant  ← UNCOMMENT if present on your form
  363 |     // TODO: Replace with the exact doctor name or code shown in the dropdown
  364 |     // await this.selectDropdown(this.doctorDropdown, 'DR. TEST DOCTOR');
  365 | 
  366 |     // Clinic / Department  ← UNCOMMENT if present on your form
  367 |     // TODO: Replace with the exact clinic name shown in the dropdown
  368 |     // await this.selectDropdown(this.clinicDropdown, 'GENERAL CLINIC');
  369 | 
  370 |     // Guarantee type  ← UNCOMMENT if present on your form
  371 |     // TODO: Replace 'Cash' with the exact <option> label
  372 |     // await this.selectDropdown(this.guaranteeTypeDropdown, 'Cash');
  373 |   }
  374 | 
  375 |   // ── Save ─────────────────────────────────────────────────
  376 |   async clickSave() {
  377 |     await this.saveButton.click();
  378 |   }
```