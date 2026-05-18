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
Error: page.waitForTimeout: Test timeout of 100000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner:
      - text:  
      - navigation [ref=e3]:
        - generic [ref=e4]:
          - heading "Patient Dashboard" [level=1] [ref=e6]
          - list [ref=e8]:
            - listitem [ref=e9]:
              - generic [ref=e10]: "Welcome: Employee 1338:(KPJ)"
            - listitem [ref=e11]:
              - generic [ref=e12]: "Last Login : 18/05/2026 02:00:19"
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
          - link "IP" [ref=e38] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e39]: IP
        - listitem [ref=e40]:
          - link "Emergency" [ref=e41] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e42]: Emergency
        - listitem [ref=e43]:
          - link "OP" [ref=e44] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e45]: OP
          - text:                
        - listitem [ref=e46]:
          - link "Billing" [ref=e47] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e48]: Billing
        - listitem [ref=e49]:
          - link "Finance" [ref=e50] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e51]: Finance
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
          - button "Visit Information" [expanded] [ref=e97] [cursor=pointer]
        - tabpanel "Visit Information" [ref=e98]:
          - generic [ref=e101]:
            - generic [ref=e102]:
              - generic [ref=e104]:
                - generic [ref=e105]: Episode No
                - textbox [ref=e107]
              - generic [ref=e109]:
                - generic [ref=e110]: Time
                - textbox [ref=e112]: 11:31 PM
              - generic [ref=e114]:
                - generic [ref=e115]: Encounter Type*
                - combobox [ref=e117]:
                  - option "--Select--"
                  - option "Outpatient" [selected]
              - generic [ref=e119]:
                - generic [ref=e120]: Cash Counter*
                - combobox [ref=e122]:
                  - option "--Select--"
                  - option "ADM5-C-01 (Ward Level 5)" [selected]
                  - option "ADM6-C-01 (Ward Level 6)"
                  - option "ADM7-C-01 (Ward Level 7)"
                  - option "ADMG-C-01 (Central)"
                  - option "ADMG-C-02 (Central)"
                  - option "ADMG-C-03 (Central)"
                  - option "ADMG-C-04 (Central)"
                  - option "ADMG-C-05 (Central)"
                  - option "ADMG-C-06 (Central)"
                  - option "ADMG-E-01 (Central)"
                  - option "ADMG-S-01 (Central)"
                  - option "ADMG-S-02 (Central)"
                  - option "BILL-BL01 (IP Billing)"
                  - option "BILL-BL02 (IP Billing)"
                  - option "BILL-BL03 (IP Billing)"
                  - option "BILL-BL04 (IP Billing)"
                  - option "BILL-BL05 (IP Billing)"
                  - option "BILL-BL06 (IP Billing)"
                  - option "BILL-BL07 (IP Billing)"
                  - option "CC-CC01 (Credit Control)"
                  - option "CC-CC02 (Credit Control)"
                  - option "CC-CC03 (Credit Control)"
                  - option "CC-CC04 (Credit Control)"
                  - option "CC-CC05 (Credit Control)"
                  - option "CC-CC06 (Credit Control)"
                  - option "CC-CC07 (Credit Control)"
                  - option "DCL1-C-01 (Daycare)"
                  - option "DCL1-C-02 (Daycare)"
                  - option "DCL1-C-03 (Daycare)"
                  - option "DCL1-C-04 (Daycare)"
                  - option "DC-O-01 (Daycare)"
                  - option "DCOC-C-01 (Daycare (Oncology) )"
                  - option "DCOC-C-02 (Daycare (Oncology) )"
                  - option "ED-C-01 (Emergency)"
                  - option "ED-C-02 (Emergency)"
                  - option "ED-C-03 (Emergency)"
                  - option "ED-E-01 (Emergency)"
                  - option "ED-S-01 (Emergency)"
                  - option "HSD-C-01 (HSD)"
                  - option "OPD-B-01 (Outpatient)"
                  - option "OPD-B-02 (Outpatient)"
                  - option "OPD-B-03 (Outpatient)"
                  - option "OPD-B-04 (Outpatient)"
                  - option "OPD-E-01 (Outpatient)"
                  - option "OPD-E-02 (Outpatient)"
                  - option "RAD-C-01 (Imaging)"
                  - option "REHB-C-01 (Rehab)"
                  - option "REHB-C-02 (Rehab)"
                  - option "SH-C-01 (Emergency (Staff Health) )"
                  - option "SP10-C-01 (SPC10/11 (Paeds))"
                  - option "SP10-C-02 (SPC10/11 (Paeds))"
                  - option "SP10-C-03 (SPC10/11 (Paeds))"
                  - option "SP12-C-01 (SPC12)"
                  - option "SP12-C-02 (SPC12)"
                  - option "SP12-C-03 (SPC12)"
                  - option "SP12-C-04 (SPC12)"
                  - option "SP13-C-01 (SPC13A)"
                  - option "SP13-C-02 (SPC13A)"
                  - option "SPC1-C-01 (SPC1 (Onco))"
                  - option "SPC1-C-02 (SPC1 (Onco))"
                  - option "SPC2-C-01 (SPC2)"
                  - option "SPC2-C-02 (SPC2)"
                  - option "SPC3-C-01 (SPC3)"
                  - option "SPC3-C-02 (SPC3)"
                  - option "SPC3-C-03 (SPC3)"
                  - option "SPC3-C-04 (SPC3)"
                  - option "SPC5-C-01 (SPC5)"
                  - option "SPC5-C-02 (SPC5)"
                  - option "SPC6-C-01 (SPC6)"
                  - option "SPC6-C-02 (SPC6)"
                  - option "SPC6-C-03 (SPC6)"
                  - option "SPC7-C-01 (SPC7)"
                  - option "SPC7-C-02 (SPC7)"
                  - option "SPC8-C-01 (SPC8)"
                  - option "SPC8-C-02 (SPC8)"
                  - option "SPC8-C-03 (SPC8)"
                  - option "SPC9-C-01 (SPC9 (IVF))"
                  - option "SPC9-C-02 (SPC9 (IVF))"
                  - option "SPC9-C-03 (SPC9 (IVF))"
                  - option "SPC9-C-04 (SPC9 (IVF))"
                  - option "SPC9-C-05 (SPC9 (IVF))"
              - generic [ref=e124]:
                - generic [ref=e125]: Location*
                - combobox [disabled] [ref=e127]:
                  - option "--Select--"
                  - option "KPJ" [selected]
              - generic [ref=e129]:
                - generic [ref=e130]: Registration Department*
                - combobox [ref=e132]:
                  - option "--Select--"
                  - option "Anaesthesiology & Critical Care"
                  - option "Anatomical Pathology"
                  - option "Breast & Endocrine Surgery"
                  - option "Breast & Oncoplastic Surgery"
                  - option "Cardiology"
                  - option "Cardiothoracic Surgery"
                  - option "Cardiothoracic Surgery (Paediatric)"
                  - option "Chemical Pathology"
                  - option "Clinical Haematology"
                  - option "Clinical Oncology"
                  - option "Colorectal Surgery"
                  - option "Daycare"
                  - option "Dermatology"
                  - option "Dietetics"
                  - option "Ear, Nose & Throat Surgery"
                  - option "Endocrinology"
                  - option "Gastroenterology & Hepatology"
                  - option "General Paediatric & Paediatric Dermatology"
                  - option "General Paediatric & Paediatric Endocrinology"
                  - option "General Paediatrics"
                  - option "General Paediatrics & Clinical Genetics"
                  - option "General Paediatrics & Paediatric Cardiology"
                  - option "General Paediatrics & Paediatric Gastroenterology & Hepatology"
                  - option "General Paediatrics & Paediatric Neurology"
                  - option "General Surgery"
                  - option "Geriatric Medicine"
                  - option "Haematopathology"
                  - option "Haemodalysis"
                  - option "Hand & Microsurgery (Orthopaedic)"
                  - option "Health Screening Centre"
                  - option "Hepatobiliary Surgery"
                  - option "Infectious Diseases"
                  - option "Intensive Care & Internal Medicine"
                  - option "Internal Medicine" [selected]
                  - option "Laboratory"
                  - option "Neonatology"
                  - option "Nephrology"
                  - option "Neurology"
                  - option "Neuropsychology"
                  - option "Neurosurgery"
                  - option "Nuclear Medicine"
                  - option "Obstetrics & Gynaecology"
                  - option "Obstetrics & Gynaecology, Fertility"
                  - option "Obstetrics & Gynaecology, Gynae-Oncology"
                  - option "Obstetrics & Gynaecology, Maternal Fetal"
                  - option "Oncology"
                  - option "Ophthalmology"
                  - option "Oral & Maxillofacial Surgery"
                  - option "Orthopaedic Surgery"
                  - option "Paediatric Surgery"
                  - option "Palliative Medicine"
                  - option "Pathology"
                  - option "Plastic & Reconstructive Surgery"
                  - option "Psychiatry"
                  - option "Radiology"
                  - option "Rehab & Physiotherapy"
                  - option "Rehabilitation Medicine"
                  - option "Resident Medical Officer"
                  - option "Respiratory Medicine"
                  - option "Rheumatology"
                  - option "Sonographer"
                  - option "Sport Medicine"
                  - option "Upper Gastrointestinal & Bariatric Surgery"
                  - option "Upper Gastrointestinal Surgery"
                  - option "Urology"
                  - option "Vascular Surgery"
              - generic [ref=e134]:
                - generic [ref=e135]: Cluster
                - combobox [ref=e137]:
                  - option "-Select-"
                  - option "N/A"
                  - option "SPC1"
                  - option "SPC10"
                  - option "SPC11"
                  - option "SPC12"
                  - option "SPC13A" [selected]
                  - option "SPC2"
                  - option "SPC3"
                  - option "SPC5"
                  - option "SPC6"
                  - option "SPC7"
                  - option "SPC8"
                  - option "SPC9"
              - generic [ref=e139]:
                - generic [ref=e140]: Sub Dept
                - combobox [disabled] [ref=e142]:
                  - option "--Select--" [selected]
              - generic [ref=e144]:
                - generic [ref=e145]: Primary Doctor*
                - combobox [ref=e147]:
                  - option "--Select--"
                  - option "Demo Doctor"
                  - option "Doctor 11"
                  - option "Doctor 12"
                  - option "Doctor 20"
                  - option "Doctor 213 TIEBA"
                  - option "Doctor 52"
                  - option "Doctor 87"
                  - option "Doctor Aisya"
                  - option "Doctor hayati"
                  - option "Doctor_Amrita"
                  - option "Doctor_Annie" [selected]
                  - option "Doctor_Fikry"
                  - option "Doctor_Firdaus"
                  - option "Doctor_Kabir"
                  - option "Doctor_Kabir"
                  - option "Doctor_Natasha"
                  - option "Doctor_Pornima"
                  - option "Doctor_Pornima"
                  - option "Doctor_Raihan"
                  - option "Doctor_Shantanu"
                  - option "Doctor_Shantanu"
                  - option "Doctor_Tieba"
                  - option "Employee 71"
                  - option "Ilham Bin Sirayuddin"
                  - option "keerthana"
                  - option "Medical Officer Aisya"
                  - option "Medical Officer_Amrita"
                  - option "Medical Officer_Annie"
                  - option "Medical Officer_Fikry"
                  - option "Medical Officer_Firdaus"
                  - option "Medical Officer_Kabir"
                  - option "Medical Officer_Natasha"
                  - option "Medical Officer_Raihan"
                  - option "Medical Officer_Tieba"
                  - option "Nor Liza Ariffin"
                  - option "SABARI"
              - generic [ref=e149]:
                - generic [ref=e150]: Visit Type*
                - combobox [ref=e152]:
                  - option "--Select--" [selected]
              - generic [ref=e154]:
                - generic [ref=e155]: Admission Source*
                - combobox [ref=e157]:
                  - option "--Select--" [selected]
                  - option "CAMP/Loyalty"
                  - option "External"
                  - option "Internal"
                  - option "Pre-Employment"
              - generic [ref=e159]:
                - generic [ref=e160]: Consultation Room
                - combobox [ref=e162]:
                  - option "--Select--" [selected]
              - generic [ref=e163]:
                - generic [ref=e164]:
                  - generic [ref=e165]: Queue No.*
                  - generic [ref=e166]:
                    - textbox [ref=e167]
                    - text: 
                - generic [ref=e170] [cursor=pointer]:
                  - checkbox "E-Invoicing Required" [ref=e171]
                  - text: E-Invoicing Required
              - generic [ref=e172]:
                - generic [ref=e173]:
                  - generic [ref=e174]: Ref Entity Type
                  - combobox [ref=e176]:
                    - option "--Select--" [selected]
                    - option "Agent"
                    - option "Refentity"
                - generic [ref=e177]:
                  - generic [ref=e178]: Promotion/Program
                  - combobox [disabled] [ref=e180]:
                    - option "--Select--" [selected]
              - generic [ref=e181]:
                - generic [ref=e182]:
                  - generic [ref=e183]: Ref Entity Name
                  - combobox [ref=e185]:
                    - option "--Select--" [selected]
                - generic [ref=e186]:
                  - generic [ref=e187]: Ref Entity Name
                  - textbox [ref=e189]
                - generic [ref=e191]:
                  - generic [ref=e192] [cursor=pointer]:
                    - checkbox "Medico Legal Case" [ref=e193]
                    - text: Medico Legal Case
                  - generic [ref=e194] [cursor=pointer]:
                    - checkbox "Brought Dead" [ref=e195]
                    - text: Brought Dead
                - generic [ref=e198] [cursor=pointer]:
                  - checkbox "Referral letter from GP or other hospitals" [ref=e199]
                  - text: Referral letter from GP or other hospitals
              - generic [ref=e201]:
                - generic [ref=e202]: Remark
                - textbox [ref=e204]
              - generic [ref=e205]:
                - generic [ref=e206]:
                  - generic [ref=e207]: Provisional Diagnosis
                  - generic [ref=e209]:
                    - textbox [ref=e210]
                    - button "" [ref=e212] [cursor=pointer]:
                      - generic [ref=e213]: 
                - generic [ref=e214]:
                  - generic [ref=e215]: Case Category
                  - combobox [ref=e217]:
                    - option "--Select--" [selected]
                    - option "Foreign Patients - Expatriate"
                    - option "Foreign Patients - Foreign Worker"
                    - option "Foreign Patients - Malaysia My Second Home (MM2H) Participant"
                    - option "Foreign Patients - Student"
                    - option "Foreign Patients -Professional Worker"
                    - option "Health Tourist"
                    - option "No Information"
                    - option "Tourist Seeking Treatment"
            - generic [ref=e218]:
              - generic [ref=e219]: PreviousVisits
              - table [ref=e221]:
                - rowgroup [ref=e222]:
                  - row "OP Visit No. Visit Date Doctor Sub Dept Department Visit Type Patient Type Consultation Room Promotion/Program Ref Entity Type Ref Entity Name Remark" [ref=e223]:
                    - columnheader "OP Visit No." [ref=e224]
                    - columnheader "Visit Date" [ref=e225]
                    - columnheader "Doctor" [ref=e226]
                    - columnheader "Sub Dept" [ref=e227]
                    - columnheader "Department" [ref=e228]
                    - columnheader "Visit Type" [ref=e229]
                    - columnheader "Patient Type" [ref=e230]
                    - columnheader "Consultation Room" [ref=e231]
                    - columnheader "Promotion/Program" [ref=e232]
                    - columnheader "Ref Entity Type" [ref=e233]
                    - columnheader "Ref Entity Name" [ref=e234]
                    - columnheader "Remark" [ref=e235]
                - rowgroup
              - button "Future Orders" [disabled] [ref=e239]
        - generic [ref=e240]:
          - generic [ref=e241]:
            - generic [ref=e244] [cursor=pointer]:
              - checkbox "Register Only" [ref=e245]
              - text: Register Only
            - generic [ref=e248] [cursor=pointer]:
              - checkbox "Charges Only" [checked] [ref=e249]
              - text: Charges Only
          - generic [ref=e251]:
            - generic [ref=e252]:
              - generic [ref=e254]:
                - generic [ref=e255]: Sign
                - button "Clear" [ref=e262] [cursor=pointer]
              - checkbox [ref=e263]
              - text: Cash
              - checkbox [checked] [ref=e264]
              - text: Credit
            - generic [ref=e265]:
              - button "Consent" [ref=e266] [cursor=pointer]
              - button "Patient History" [disabled] [ref=e267]
              - button "Save" [ref=e268] [cursor=pointer]
              - button "Clear" [ref=e269] [cursor=pointer]
        - text:  
  - textbox [ref=e271]
```

# Test source

```ts
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
  254 |     // 8. VISIT INFORMATION
  255 |     // =====================================================================
  256 |     async openVisitInformationSection() {
  257 |         const encounterDropdown = this.page.locator('select[ng-model="Visit.EncounterTypeID"]').first();
  258 |         const isAlreadyOpen = await encounterDropdown.isVisible({ timeout: 2000 });
  259 | 
  260 |         if (!isAlreadyOpen) {
  261 |             console.log("Visit Information is closed. Forcing open via JavaScript...");
  262 |             
  263 |             // Use .last() to ignore top-of-page breadcrumbs and target the actual accordion tab
  264 |             const visitInfoTab = this.page.locator('a, h4, span, .panel-title').filter({ hasText: 'Visit Information' }).last();
  265 |             
  266 |             // Wait for it to exist in the HTML (doesn't have to be perfectly visible)
  267 |             await visitInfoTab.waitFor({ state: 'attached' });
  268 |             
  269 |             // THE FIX: Fire a raw DOM click. This bypasses ALL UI overlap issues!
  270 |             await visitInfoTab.evaluate((element) => (element as HTMLElement).click());
  271 |             
  272 |             // Wait 1.5 seconds for the accordion slide-down animation to finish
  273 |             await this.page.waitForTimeout(1500); 
  274 |         } else {
  275 |             console.log("Visit Information is already open! Skipping click.");
  276 |         }
  277 |     }
  278 |     // Note: We removed the 'doctor' parameter. The script will find one dynamically!
  279 |     // =====================================================================
  280 |     // 8. VISIT INFORMATION (SELF-HEALING)
  281 |     // =====================================================================
  282 |     async fillVisitInformation(encounterType: string, department: string, admissionSource: string, targetVisitType: string) {
  283 |         
  284 |         // 1. Encounter Type
  285 |         const encounterDropdown = this.page.locator('select[ng-model="Visit.EncounterTypeID"]');
  286 |         await encounterDropdown.waitFor({ state: 'visible' });
  287 |         await encounterDropdown.selectOption({ label: encounterType });
  288 |         await this.page.waitForTimeout(500);
  289 | 
  290 |         // 2. Department 
  291 |         const departmentDropdown = this.page.locator('select[ng-model="Visit.DepartmentID"]');
  292 |         await departmentDropdown.waitFor({ state: 'visible' });
  293 |         await departmentDropdown.selectOption({ label: department });
  294 |         await departmentDropdown.dispatchEvent('change');
  295 |         
  296 |         // Wait for backend to fetch doctors for this department
  297 |         const doctorDropdown = this.page.locator('select[ng-model="Visit.DoctorID"]').first();
  298 |         // Wait up to 5s for more than one option to be populated (skip "--Select--")
  299 |         const maxWait = 5000;
  300 |         const pollInterval = 100;
  301 |         const start = Date.now();
  302 |         let optionCount = await doctorDropdown.locator('option').count();
  303 |         while (optionCount <= 1 && (Date.now() - start) < maxWait) {
  304 |             await this.page.waitForTimeout(pollInterval);
  305 |             optionCount = await doctorDropdown.locator('option').count();
  306 |         }
  307 |         if (optionCount <= 1) {
  308 |             throw new Error('Timed out waiting for doctor options to populate');
  309 |         }
  310 | 
  311 |         // 3. DOCTOR & VISIT TYPE SMART LOOP
  312 |         const doctorOptionsCount = await doctorDropdown.locator('option').count();
  313 |         let foundWorkingDoctor = false;
  314 | 
  315 |         // Loop through all available doctors (Starting at index 1 to skip "--Select--")
  316 |         for (let i = 1; i < doctorOptionsCount; i++) {
  317 |             
  318 |             const doctorName = await doctorDropdown.locator('option').nth(i).innerText();
  319 |             console.log(`Checking Doctor: ${doctorName.trim()}...`);
  320 | 
  321 |             // Select doctor by INDEX 
  322 |             await doctorDropdown.selectOption({ index: i }, { force: true });
  323 |             await doctorDropdown.dispatchEvent('change');
  324 |             
  325 |             // Wait 1.5 seconds for the fnSetVisitType API call to finish
> 326 |             await this.page.waitForTimeout(1500);
      |                             ^ Error: page.waitForTimeout: Test timeout of 100000ms exceeded.
  327 | 
  328 |             const visitTypeDropdown = this.page.locator('select[ng-model="Visit.VisitType"]').first();
  329 | 
  330 |             // THE FIX: The Try/Catch Selection Approach
  331 |             try {
  332 |                 // We tell Playwright to try and select "New". 
  333 |                 // We set a very short timeout (2 seconds) so it fails fast if "New" doesn't exist.
  334 |                 await visitTypeDropdown.selectOption({ label: targetVisitType }, { force: true, timeout: 2000 });
  335 |                 await visitTypeDropdown.dispatchEvent('change');
  336 |                 
  337 |                 console.log(`✅ Success! Doctor supports Visit Type: ${targetVisitType}. Stopping loop!`);
  338 |                 foundWorkingDoctor = true;
  339 |                 
  340 |                 // break immediately stops the loop from checking any more doctors!
  341 |                 break; 
  342 |                 
  343 |             } catch (error) {
  344 |                 // If the selection failed, "New" wasn't an option. The loop continues to the next doctor.
  345 |                 console.log(`❌ Visit Type "${targetVisitType}" not available for this doctor. Moving to next...`);
  346 |             }
  347 |         }
  348 | 
  349 |         // If it checked every doctor and none of them worked, crash the test safely.
  350 |         if (!foundWorkingDoctor) {
  351 |             throw new Error(`CRITICAL FAILURE: Could not find ANY doctor in "${department}" that supports the "${targetVisitType}" visit type.`);
  352 |         }
  353 | 
  354 |         // 4. QUEUE NO. (The script arrives here immediately after 'break' is triggered!)
  355 |         const queueInput = this.page.locator('input[ng-model="Visit.TokenNo"]');
  356 |         await expect(queueInput).toBeEnabled({ timeout: 5000 });
  357 |         
  358 |         const randomQueue = Math.floor(100 + Math.random() * 900).toString();
  359 |         await queueInput.fill(randomQueue);
  360 |         await this.page.locator('body').click();
  361 |         await this.page.waitForTimeout(500);
  362 | 
  363 |         // 5. ADMISSION SOURCE
  364 |         const sourceDropdown = this.page.locator('select[ng-model="Visit.PatientSourceID"]');
  365 |         await sourceDropdown.waitFor({ state: 'visible' });
  366 |         await sourceDropdown.selectOption({ label: admissionSource });
  367 |         await sourceDropdown.dispatchEvent('change');
  368 |         await this.page.waitForTimeout(500);
  369 |     }
  370 | }
```