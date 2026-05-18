# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
Error: locator.innerText: Test ended.
Call log:
  - waiting for locator('select[ng-model="Visit.DoctorID"]').first().locator('option').nth(55)

```

# Test source

```ts
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
  201 |     // UPDATED METHOD: Fill Next of Kin Details (Now includes Name)
  202 |     async fillNextOfKinDetails(title: string, name: string, relation: string, kinNric: string, mobileCode: string, mobileNo: string, sameAsPatient: boolean) {
  203 |         
  204 |         // 1. Title
  205 |         const kinTitle = this.page.locator('select[ng-model="Registration.KinTitleID"]');
  206 |         await kinTitle.waitFor({ state: 'visible' });
  207 |         await kinTitle.selectOption({ label: title });
  208 | 
  209 |         // 2. NAME (The newly added field)
  210 |         const kinNameInput = this.page.locator('input[ng-model="Registration.KinName"]');
  211 |         await kinNameInput.waitFor({ state: 'visible' });
  212 |         // Using fill() is usually safe for plain text fields without heavy ng-change events
  213 |         await kinNameInput.fill(name);
  214 | 
  215 |         // 3. Relationship
  216 |         const kinRelation = this.page.locator('select[ng-model="Registration.KinRelationID"]');
  217 |         await kinRelation.waitFor({ state: 'visible' });
  218 |         await kinRelation.selectOption({ label: relation });
  219 | 
  220 |         // 4. NEXT OF KIN NRIC
  221 |         const kinNricInput = this.page.locator('input[ng-model="Registration.KinNationalId"]');
  222 |         await kinNricInput.waitFor({ state: 'visible' });
  223 |         await kinNricInput.pressSequentially(kinNric, { delay: 50 });
  224 | 
  225 |         // 5. Mobile Code
  226 |         const kinMobileCode = this.page.locator('select[ng-model="Registration.KinMobileCountryCode"]');
  227 |         await kinMobileCode.waitFor({ state: 'visible' });
  228 |         await kinMobileCode.selectOption({ label: mobileCode });
  229 | 
  230 |         // 6. Mobile Number
  231 |         const kinMobileNo = this.page.locator('#txtKinMobileNo');
  232 |         await kinMobileNo.waitFor({ state: 'visible' });
  233 |         await kinMobileNo.pressSequentially(mobileNo, { delay: 50 });
  234 | 
  235 |         // 7. Same As Patient Address Checkbox
  236 |         if (sameAsPatient) {
  237 |             const sameAsPatientCheckbox = this.page.locator('input[ng-model="chkSameasPatAddr"]');
  238 |             const isChecked = await sameAsPatientCheckbox.isChecked();
  239 |             if (!isChecked) {
  240 |                 await sameAsPatientCheckbox.check({ force: true });
  241 |                 await sameAsPatientCheckbox.dispatchEvent('change');
  242 |                 await this.page.waitForTimeout(500); 
  243 |             }
  244 |         }
  245 | 
  246 |         // 8. Click 'Add' Button to save Kin to the grid
  247 |         const addKinButton = this.page.locator('button[ng-click="AddKinDetails(KinDetailsList);"]');
  248 |         await addKinButton.click();
  249 |         await this.page.waitForTimeout(1000); 
  250 |     }
  251 | 
  252 |     // =====================================================================
  253 |     // =====================================================================
  254 |     // =====================================================================
  255 |     // 8. VISIT INFORMATION (STALE-ELEMENT IMMUNE)
  256 |     // =====================================================================
  257 |     async fillVisitInformation(encounterType: string, department: string, admissionSource: string, targetVisitType: string) {
  258 |         
  259 |         // 1. Encounter Type
  260 |         const encounterDropdown = this.page.locator('select[ng-model="Visit.EncounterTypeID"]');
  261 |         await encounterDropdown.waitFor({ state: 'visible' });
  262 |         await encounterDropdown.selectOption({ label: encounterType });
  263 |         await this.page.waitForTimeout(500);
  264 | 
  265 |         // 2. Department 
  266 |         const departmentDropdown = this.page.locator('select[ng-model="Visit.DepartmentID"]');
  267 |         await departmentDropdown.waitFor({ state: 'visible' });
  268 |         await departmentDropdown.selectOption({ label: department });
  269 |         await departmentDropdown.dispatchEvent('change');
  270 |         
  271 |         // Wait for backend to fetch doctors for this department
  272 |         const doctorDropdown = this.page.locator('select[ng-model="Visit.DoctorID"]').first();
  273 | await expect.poll(async () => await doctorDropdown.locator('option').count(), { timeout: 5000 }).toBeGreaterThan(1);        // =====================================================================
  274 |         // THE FIX: Extract all doctors into memory BEFORE starting the loop.
  275 |         // This prevents Angular DOM-refreshes from crashing the script.
  276 |         // =====================================================================
  277 |         const doctorOptionsCount = await doctorDropdown.locator('option').count();
  278 |         const availableDoctors: { name: string, value: string }[] = [];
  279 | 
  280 |         for (let i = 1; i < doctorOptionsCount; i++) {
  281 |             const option = doctorDropdown.locator('option').nth(i);
> 282 |             const name = await option.innerText();
      |                                       ^ Error: locator.innerText: Test ended.
  283 |             const value = await option.getAttribute('value');
  284 |             if (value) {
  285 |                 availableDoctors.push({ name: name.trim(), value: value });
  286 |             }
  287 |         }
  288 | 
  289 |         // 3. DOCTOR & VISIT TYPE SMART LOOP
  290 |         let foundWorkingDoctor = false;
  291 |         const visitTypeDropdown = this.page.locator('select[ng-model="Visit.VisitType"]').first();
  292 | 
  293 |         // Loop through our safe, in-memory array
  294 |         for (const doctor of availableDoctors) {
  295 |             
  296 |             console.log(`Checking Doctor: ${doctor.name}...`);
  297 | 
  298 |             // Select doctor using the exact Angular value
  299 |             await doctorDropdown.selectOption({ value: doctor.value }, { force: true });
  300 |             await doctorDropdown.dispatchEvent('change');
  301 | 
  302 |             try {
  303 |                 // Wait to see if Visit Type populates (2 seconds max)
  304 | await expect.poll(async () => await doctorDropdown.locator('option').count(), { timeout: 5000 }).toBeGreaterThan(1);                
  305 |                 const availableVisitTypes = await visitTypeDropdown.locator('option').allInnerTexts();
  306 |                 const cleanVisitTypes = availableVisitTypes.map(v => v.trim());
  307 |                 
  308 |                 if (cleanVisitTypes.includes(targetVisitType)) {
  309 |                     console.log(`✅ Success! "${doctor.name}" allows Visit Type: ${targetVisitType}`);
  310 |                     
  311 |                     // Select "New"
  312 |                     await visitTypeDropdown.selectOption({ label: targetVisitType }, { force: true });
  313 |                     await visitTypeDropdown.dispatchEvent('change');
  314 |                     
  315 |                     foundWorkingDoctor = true;
  316 |                     
  317 |                     // STOP SEARCHING! This breaks the loop immediately.
  318 |                     break; 
  319 | 
  320 |                 } else {
  321 |                     console.log(`❌ "${targetVisitType}" missing for this doctor. Moving to next...`);
  322 |                 }
  323 | 
  324 |             } catch (error) {
  325 |                 console.log(`❌ Visit Type stayed empty. Moving to next doctor...`);
  326 |             }
  327 |         }
  328 | 
  329 |         // 4. FAIL-SAFE
  330 |         if (!foundWorkingDoctor) {
  331 |             throw new Error(`CRITICAL FAILURE: Could not find ANY doctor in "${department}" that allows the "${targetVisitType}" visit type.`);
  332 |         }
  333 | 
  334 |         // Wait a tiny bit for UI to settle after breaking the loop
  335 |         await this.page.waitForTimeout(500);
  336 | 
  337 |         // 5. QUEUE NO. (Script jumps straight here after finding "New")
  338 |         const queueInput = this.page.locator('input[ng-model="Visit.TokenNo"]');
  339 |         await expect(queueInput).toBeEnabled({ timeout: 5000 });
  340 |         
  341 |         const randomQueue = Math.floor(100 + Math.random() * 900).toString();
  342 |         await queueInput.fill(randomQueue);
  343 |         await this.page.locator('body').click();
  344 |         await this.page.waitForTimeout(500);
  345 | 
  346 |         // 6. ADMISSION SOURCE
  347 |         const sourceDropdown = this.page.locator('select[ng-model="Visit.PatientSourceID"]');
  348 |         await sourceDropdown.waitFor({ state: 'visible' });
  349 |         await sourceDropdown.selectOption({ label: admissionSource });
  350 |         await sourceDropdown.dispatchEvent('change');
  351 |         await this.page.waitForTimeout(500);
  352 |     }
  353 | }
```