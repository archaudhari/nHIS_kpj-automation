# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
Test timeout of 100000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('select[ng-model="Visit.EncounterTypeID"]') to be visible
    21 × locator resolved to hidden <select ng-model="Visit.EncounterTypeID" ng-options="item.value as item.text for item in drpEncounterType" class="form-control input-sm validate[required] ng-pristine ng-untouched ng-valid">…</select>

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner:
      - text:  
      - navigation [ref=e3]:
        - generic [ref=e4]:
          - heading "Registration" [level=1] [ref=e6]
          - list [ref=e8]:
            - listitem [ref=e9]:
              - generic [ref=e10]: "Welcome: Employee 1338:(KPJ)"
            - listitem [ref=e11]:
              - generic [ref=e12]: "Last Login : 18/05/2026 01:19:04"
            - listitem [ref=e13]:
              - link " 274" [ref=e15] [cursor=pointer]:
                - /url: "#/InternalMessaging"
                - generic [ref=e16]: 
                - generic [ref=e17]: "274"
              - button "Mic On/Off" [ref=e19] [cursor=pointer]
              - img "Change Password" [ref=e22]
              - generic "Logout" [ref=e24]:
                - generic [ref=e25]: 
    - navigation [ref=e26]:
      - list [ref=e31]:
        - listitem [ref=e32]:
          - link [ref=e33] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e34]:
          - link "Home" [ref=e35] [cursor=pointer]:
            - /url: "#/home"
            - generic [ref=e36]: Home
        - listitem [ref=e37]:
          - link "Emergency" [ref=e38] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e39]: Emergency
        - listitem [ref=e40]:
          - link "OP" [ref=e41] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e42]: OP
          - text:                
        - listitem [ref=e43]:
          - link "IP" [ref=e44] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e45]: IP
        - listitem [ref=e46]:
          - link "Finance" [ref=e47] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e48]: Finance
        - listitem [ref=e49]:
          - link "Billing" [ref=e50] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e51]: Billing
        - listitem [ref=e52]:
          - link "Investigation" [ref=e53] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e54]: Investigation
        - listitem [ref=e55]:
          - link "Nursing Station" [ref=e56] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e57]: Nursing Station
        - listitem [ref=e58]:
          - link "OT" [ref=e59] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e60]: OT
        - listitem [ref=e61]:
          - link "Inventory" [ref=e62] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e63]: Inventory
        - listitem [ref=e64]:
          - link "Ancillary Services" [ref=e65] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e66]: Ancillary Services
        - listitem [ref=e67]:
          - link "Report" [ref=e68] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e69]: Report
        - listitem [ref=e70]:
          - link "System Configuration" [ref=e71] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e72]: System Configuration
        - listitem [ref=e73]:
          - link "Application Configuration" [ref=e74] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e75]: Application Configuration
        - listitem [ref=e76]:
          - link "Telemedicine" [ref=e77] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e78]: Telemedicine
    - generic [ref=e85]:
      - generic [ref=e87]:
        - tablist [ref=e88]:
          - generic [ref=e89]:
            - tab "Patient Information" [ref=e90]:
              - button "Patient Information" [ref=e91] [cursor=pointer]
              - button
            - text:             
        - generic [ref=e92]:
          - tab "Payor Information" [ref=e93]:
            - button "Payor Information" [ref=e94] [cursor=pointer]
          - text:    
        - text:  
      - generic [ref=e95]:
        - tab "Visit Information" [ref=e96]:
          - button "Visit Information" [ref=e97] [cursor=pointer]
        - text:  
        - generic [ref=e98]:
          - generic [ref=e99]:
            - generic [ref=e102] [cursor=pointer]:
              - checkbox "Register Only" [ref=e103]
              - text: Register Only
            - generic [ref=e106] [cursor=pointer]:
              - checkbox "Charges Only" [checked] [ref=e107]
              - text: Charges Only
          - generic [ref=e109]:
            - generic [ref=e110]:
              - generic [ref=e112]:
                - generic [ref=e113]: Sign
                - button "Clear" [ref=e120] [cursor=pointer]
              - checkbox [ref=e121]
              - text: Cash
              - checkbox [checked] [ref=e122]
              - text: Credit
            - generic [ref=e123]:
              - button "Consent" [ref=e124] [cursor=pointer]
              - button "Patient History" [disabled] [ref=e125]
              - button "Save" [ref=e126] [cursor=pointer]
              - button "Clear" [ref=e127] [cursor=pointer]
        - text:  
  - textbox [ref=e129]
```

# Test source

```ts
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
  252 |     // NEW METHOD: Click the Visit Information Tab/Accordion
  253 |     async openVisitInformationSection() {
  254 |         const visitInfoTab = this.page.locator('text="Visit Information"').first();
  255 |         await visitInfoTab.waitFor({ state: 'visible' });
  256 |         await visitInfoTab.click();
  257 |         await this.page.waitForTimeout(10000); 
  258 |     }
  259 | 
  260 |     async fillVisitInformation(encounterType: string, department: string, doctor: string, admissionSource: string) {
  261 |         
  262 |         const encounterDropdown = this.page.locator('select[ng-model="Visit.EncounterTypeID"]');
> 263 |         await encounterDropdown.waitFor({ state: 'visible' });
      |                                 ^ Error: locator.waitFor: Test timeout of 100000ms exceeded.
  264 |         await encounterDropdown.selectOption({ label: encounterType });
  265 |         await this.page.waitForTimeout(500);
  266 | 
  267 |         const departmentDropdown = this.page.locator('select[ng-model="Visit.DepartmentID"]');
  268 |         await departmentDropdown.waitFor({ state: 'visible' });
  269 |         await departmentDropdown.selectOption({ label: department });
  270 |         await departmentDropdown.dispatchEvent('change');
  271 |         await this.page.waitForTimeout(1000); 
  272 | 
  273 |         const doctorDropdown = this.page.locator('select[ng-model="Visit.DoctorID"]');
  274 |         await doctorDropdown.waitFor({ state: 'visible' });
  275 |         await doctorDropdown.selectOption({ label: doctor });
  276 |         await doctorDropdown.dispatchEvent('change');
  277 |         await this.page.waitForTimeout(1000);
  278 | 
  279 |         const sourceDropdown = this.page.locator('select[ng-model="Visit.PatientSourceID"]');
  280 |         await sourceDropdown.waitFor({ state: 'visible' });
  281 |         await sourceDropdown.selectOption({ label: admissionSource });
  282 |         await sourceDropdown.dispatchEvent('change');
  283 |         await this.page.waitForTimeout(500);
  284 | 
  285 |         const queueInput = this.page.locator('input[ng-model="Visit.TokenNo"]');
  286 |         if (await queueInput.isEnabled()) {
  287 |             const randomQueue = Math.floor(1000 + Math.random() * 9000).toString();
  288 |             await queueInput.fill(randomQueue);
  289 |         }
  290 |     }
  291 | }
```