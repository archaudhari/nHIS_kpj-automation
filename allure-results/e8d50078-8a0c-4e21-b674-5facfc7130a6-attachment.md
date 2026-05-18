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
  - waiting for locator('select[ng-model="Visit.EncounterTypeID"]') to be visible
    32 × locator resolved to hidden <select ng-model="Visit.EncounterTypeID" ng-options="item.value as item.text for item in drpEncounterType" class="form-control input-sm validate[required] ng-pristine ng-untouched ng-valid">…</select>

```

# Test source

```ts
  146 |         await this.page.waitForTimeout(1000); 
  147 | 
  148 |         // 2. SELECT RACE
  149 |         // Use this ONLY if .first() causes a timeout
  150 |         const raceDropdown = this.page.locator('select[ng-model="Registration.RaceID"]').first();
  151 |         await raceDropdown.waitFor({ state: 'visible' });
  152 | 
  153 |         // Select the appropriate race based on what the test script passed in
  154 |         await raceDropdown.selectOption({ label: targetRace }, { force: true });
  155 |         
  156 |         // Force Angular to register the race selection
  157 |         await raceDropdown.dispatchEvent('change');
  158 |         await this.page.waitForTimeout(500);
  159 |     }
  160 |     // NEW METHOD: Fill Correspondence Details
  161 |     async fillCorrespondenceDetails(address: string, mobileCodeLabel: string, mobileNo: string, postcode: string, email: string) {
  162 |         
  163 |         // 1. ADDRESS LINE 1
  164 |         const addressInput = this.page.locator('textarea[ng-model="Registration.ResAddress"]');
  165 |         await addressInput.waitFor({ state: 'visible' });
  166 |         await addressInput.fill(address);
  167 |         // Click body to trigger ng-blur="Setaddress(1)"
  168 |         await this.page.locator('body').click(); 
  169 |         await this.page.waitForTimeout(500);
  170 | 
  171 |         // 2. POSTCODE (Important to do before moving on, as SearchPatientByPostal often auto-fills City/State)
  172 |         const postcodeInput = this.page.locator('input[ng-model="Registration.ResPinCode"]');
  173 |         await postcodeInput.waitFor({ state: 'visible' });
  174 |         await postcodeInput.pressSequentially(postcode, { delay: 50 });
  175 |         // Click body to trigger ng-blur="SearchPatientByPostal()"
  176 |         await this.page.locator('body').click();
  177 |         await this.page.waitForTimeout(1500); // Wait for background postal search to finish
  178 | 
  179 |         // 3. MOBILE NUMBER (Code + Number)
  180 |         const mobileCodeDropdown = this.page.locator('select[ng-model="Registration.MobileCountryCode"]');
  181 |         await mobileCodeDropdown.waitFor({ state: 'visible' });
  182 |         // Select by visible text (e.g., '60' or '91')
  183 |         await mobileCodeDropdown.selectOption({ label: mobileCodeLabel });
  184 |         await mobileCodeDropdown.dispatchEvent('change');
  185 |         
  186 |         const mobileNoInput = this.page.locator('#txtMobileNo');
  187 |         await mobileNoInput.waitFor({ state: 'visible' });
  188 |         await mobileNoInput.pressSequentially(mobileNo, { delay: 50 });
  189 |         // Click body to trigger ng-blur="SearchPatientByInput(3)"
  190 |         await this.page.locator('body').click();
  191 |         await this.page.waitForTimeout(1500); // Wait for duplicate mobile check to finish
  192 | 
  193 |         // 4. EMAIL
  194 |         const emailInput = this.page.locator('input[ng-model="Registration.Email"]');
  195 |         await emailInput.waitFor({ state: 'visible' });
  196 |         await emailInput.fill(email);
  197 |         // Click body to trigger ng-blur="EmailValidate()"
  198 |         await this.page.locator('body').click();
  199 |         await this.page.waitForTimeout(500);
  200 |     }
  201 |     // NEW METHOD: Fill Next of Kin Details
  202 |     async fillNextOfKinDetails(title: string, relation: string, mobileCode: string, mobileNo: string, sameAsPatient: boolean) {
  203 |         
  204 |         // 1. Title
  205 |         const kinTitle = this.page.locator('select[ng-model="Registration.KinTitleID"]');
  206 |         await kinTitle.waitFor({ state: 'visible' });
  207 |         await kinTitle.selectOption({ label: title });
  208 | 
  209 |         // 2. Relationship
  210 |         const kinRelation = this.page.locator('select[ng-model="Registration.KinRelationID"]');
  211 |         await kinRelation.waitFor({ state: 'visible' });
  212 |         await kinRelation.selectOption({ label: relation });
  213 | 
  214 |         // 3. Mobile Code
  215 |         const kinMobileCode = this.page.locator('select[ng-model="Registration.KinMobileCountryCode"]');
  216 |         await kinMobileCode.waitFor({ state: 'visible' });
  217 |         await kinMobileCode.selectOption({ label: mobileCode });
  218 | 
  219 |         // 4. Mobile Number
  220 |         const kinMobileNo = this.page.locator('#txtKinMobileNo');
  221 |         await kinMobileNo.waitFor({ state: 'visible' });
  222 |         await kinMobileNo.pressSequentially(mobileNo, { delay: 50 });
  223 | 
  224 |         // 5. Same As Patient Address Checkbox
  225 |         if (sameAsPatient) {
  226 |             const sameAsPatientCheckbox = this.page.locator('input[ng-model="chkSameasPatAddr"]');
  227 |             const isChecked = await sameAsPatientCheckbox.isChecked();
  228 |             if (!isChecked) {
  229 |                 await sameAsPatientCheckbox.check({ force: true });
  230 |                 await sameAsPatientCheckbox.dispatchEvent('change');
  231 |                 await this.page.waitForTimeout(500); 
  232 |             }
  233 |         }
  234 | 
  235 |         // 6. Click 'Add' Button to save Kin to the grid
  236 |         const addKinButton = this.page.locator('button[ng-click="AddKinDetails(KinDetailsList);"]');
  237 |         await addKinButton.click();
  238 |         await this.page.waitForTimeout(1000); // Wait for the grid to update
  239 |     }
  240 | 
  241 |     // NEW METHOD: Fill Visit Information
  242 |     async fillVisitInformation(encounterType: string, department: string, doctor: string, admissionSource: string) {
  243 |         
  244 |         // 1. Encounter Type
  245 |         const encounterDropdown = this.page.locator('select[ng-model="Visit.EncounterTypeID"]');
> 246 |         await encounterDropdown.waitFor({ state: 'visible' });
      |                                 ^ Error: locator.waitFor: Target page, context or browser has been closed
  247 |         await encounterDropdown.selectOption({ label: encounterType });
  248 |         await this.page.waitForTimeout(500);
  249 | 
  250 |         // 2. Department (Triggers fnSetDoctor and fnSetCabin)
  251 |         const departmentDropdown = this.page.locator('select[ng-model="Visit.DepartmentID"]');
  252 |         await departmentDropdown.waitFor({ state: 'visible' });
  253 |         await departmentDropdown.selectOption({ label: department });
  254 |         await departmentDropdown.dispatchEvent('change');
  255 |         await this.page.waitForTimeout(1000); // Give Angular time to load the specific doctors for this department
  256 | 
  257 |         // 3. Primary Doctor
  258 |         const doctorDropdown = this.page.locator('select[ng-model="Visit.DoctorID"]');
  259 |         await doctorDropdown.waitFor({ state: 'visible' });
  260 |         
  261 |         // If your doctor string has trailing spaces in the HTML (e.g., "Doctor 1  "), 
  262 |         // using { label: doctor } will strictly match it.
  263 |         await doctorDropdown.selectOption({ label: doctor });
  264 |         await doctorDropdown.dispatchEvent('change');
  265 |         await this.page.waitForTimeout(1000);
  266 | 
  267 |         // 4. Admission Source
  268 |         const sourceDropdown = this.page.locator('select[ng-model="Visit.PatientSourceID"]');
  269 |         await sourceDropdown.waitFor({ state: 'visible' });
  270 |         await sourceDropdown.selectOption({ label: admissionSource });
  271 |         await sourceDropdown.dispatchEvent('change');
  272 |         await this.page.waitForTimeout(500);
  273 | 
  274 |         // 5. Queue No. 
  275 |         // (Note: The HTML shows ng-disabled="iseditQueueNo==false", meaning this might be auto-generated.
  276 |         // We will check if it's enabled before trying to type into it.)
  277 |         const queueInput = this.page.locator('input[ng-model="Visit.TokenNo"]');
  278 |         if (await queueInput.isEnabled()) {
  279 |             const randomQueue = Math.floor(1000 + Math.random() * 9000).toString();
  280 |             await queueInput.fill(randomQueue);
  281 |         }
  282 |     }
  283 | }
```