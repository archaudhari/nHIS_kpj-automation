import { Page, expect } from '@playwright/test';

export class AdmissionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // =====================================================================
    // NAVIGATE TO IP > ADMISSION
    // Mirrors RegistrationPage.navigateToRegistration() pattern.
    // Adjust the menu IDs (#li0IP / #li1Admission) to match your sidebar HTML.
    // =====================================================================
    async navigateToAdmission() {
        // 1. Click the 'IP' main menu to expand the dropdown
        const ipMenu = this.page.locator('#li0IP > a');
        await ipMenu.waitFor({ state: 'visible' });
        await ipMenu.click();

        // 2. Click the 'Admission' option
        const admissionLink = this.page.locator('#li1Admission > a');
        await admissionLink.waitFor({ state: 'visible' });
        await admissionLink.click();

        // 3. Wait for Angular to navigate to the Admission view
        await this.page.waitForURL('**/AdmissionScreen', { waitUntil: 'domcontentloaded' });

        // Close any open dropdown by clicking the body
        await this.page.locator('body').click({ position: { x: 0, y: 0 } });
    }

    // =====================================================================
    // ADMISSION INFORMATION
    // Spec call: fillAdmissionInformation(encounterType, admissionType, admissionSource)
    //
    // Flow (confirmed from live page snapshot):
    //   1. Registration Department → random selection (ng-model="Admission.DepartmentID")
    //                                  triggers Primary Doctor list to load
    //   2. Primary Doctor           → select from populated list
    //   3. Encounter Type           → "InPatient" or "DayCare" (ng-model="Admission.AdmissionPurposeID")
    //   4. Admission Type           → e.g. "Elective" (ng-model="Admission.AdmissionTypeID")
    //   5. Admission Source         → e.g. "Internal" (ng-model="Admission.PatientSourceID")
    // =====================================================================
    async fillAdmissionInformation(
        encounterType:   string = 'InPatient',
        admissionType:   string = 'Elective',
        admissionSource: string = 'Internal'
    ) {

        // ── 1. REGISTRATION DEPARTMENT (random) ─────────────────────────────────
        // ng-model="Admission.DepartmentID" confirmed from provided HTML.
        // Selecting a department triggers the Primary Doctor list to populate.
        const deptDropdown = this.page.locator('select[ng-model="Admission.DepartmentID"]');
        await deptDropdown.waitFor({ state: 'visible', timeout: 15000 });

        const deptOptions: { text: string; value: string }[] =
            await deptDropdown.evaluate((sel: HTMLSelectElement) =>
                Array.from(sel.options)
                    .map(o => ({ text: o.text.trim(), value: o.value }))
                    .filter(o => o.value !== '' && !o.text.toLowerCase().includes('select'))
            );

        if (deptOptions.length === 0) {
            throw new Error('[Admission] No Registration Department options found.');
        }

        const randomDept = deptOptions[Math.floor(Math.random() * deptOptions.length)];

        await this.page.evaluate(
            ({ val }: { val: string }) => {
                const sel = document.querySelector('select[ng-model="Admission.DepartmentID"]') as HTMLSelectElement | null;
                if (!sel) throw new Error('Admission.DepartmentID select not found');
                sel.value = val;
                sel.dispatchEvent(new Event('change', { bubbles: true }));
            },
            { val: randomDept.value }
        );
        console.log(`[Admission] 1. Registration Department → "${randomDept.text}"`);
        await this.page.waitForTimeout(1500); // let Angular load Primary Doctor list

        // ── 2. PRIMARY DOCTOR ────────────────────────────────────────────────────
        // ng-model contains "doctor" but not "modality" — same probe pattern as
        // RegistrationPage to avoid hard-coding a guessed selector.
        const primaryDoctorNgModel: string = await this.page.evaluate(() => {
            const all = Array.from(document.querySelectorAll('select[ng-model]'));
            const match = all.find(s => {
                const m = (s.getAttribute('ng-model') ?? '').toLowerCase();
                return m.includes('doctor') && !m.includes('modality') && m.startsWith('admission');
            });
            return match?.getAttribute('ng-model') ?? '';
        });

        if (!primaryDoctorNgModel) {
            throw new Error('[Admission] Primary Doctor dropdown not found in DOM.');
        }
        console.log(`[Admission] 2. Primary Doctor ng-model = "${primaryDoctorNgModel}"`);

        // Wait for the doctor list to populate
        await expect.poll(
            () => this.page.evaluate((m: string) => {
                const sel = document.querySelector(`select[ng-model="${m}"]`) as HTMLSelectElement | null;
                if (!sel) return 0;
                return Array.from(sel.options).filter(o =>
                    o.value !== '' && !o.text.toLowerCase().includes('select')
                ).length;
            }, primaryDoctorNgModel),
            { timeout: 20000, message: `Primary Doctor dropdown (${primaryDoctorNgModel}) never populated after department selection` }
        ).toBeGreaterThan(0);

        const doctorOptions: { text: string; value: string }[] =
            await this.page.evaluate((m: string) => {
                const sel = document.querySelector(`select[ng-model="${m}"]`) as HTMLSelectElement | null;
                if (!sel) return [];
                return Array.from(sel.options)
                    .map(o => ({ text: o.text.trim(), value: o.value }))
                    .filter(o => o.value !== '' && !o.text.toLowerCase().includes('select'));
            }, primaryDoctorNgModel);

        if (doctorOptions.length === 0) {
            throw new Error(`[Admission] No Primary Doctor options found for department "${randomDept.text}".`);
        }

        const randomDoctor = doctorOptions[Math.floor(Math.random() * doctorOptions.length)];

        await this.page.evaluate(
            ({ m, val }: { m: string; val: string }) => {
                const sel = document.querySelector(`select[ng-model="${m}"]`) as HTMLSelectElement | null;
                if (!sel) throw new Error(`Primary Doctor select not found: ${m}`);
                sel.value = val;
                sel.dispatchEvent(new Event('change', { bubbles: true }));
            },
            { m: primaryDoctorNgModel, val: randomDoctor.value }
        );
        console.log(`[Admission] 2. Primary Doctor → "${randomDoctor.text}"`);
        await this.page.waitForTimeout(800);

        // ── 3. ENCOUNTER TYPE ────────────────────────────────────────────────────
        // ng-model="Admission.AdmissionPurposeID" — options: DayCare / InPatient
        const encounterDropdown = this.page.locator('select[ng-model="Admission.AdmissionPurposeID"]');
        await encounterDropdown.waitFor({ state: 'visible', timeout: 10000 });

        const encounterOptions: { text: string; value: string }[] =
            await encounterDropdown.evaluate((sel: HTMLSelectElement) =>
                Array.from(sel.options)
                    .map(o => ({ text: o.text.trim(), value: o.value }))
                    .filter(o => o.value !== '' && !o.text.toLowerCase().includes('select'))
            );

        const matchedEncounter =
            encounterOptions.find(o => o.text.toLowerCase() === encounterType.toLowerCase())
            ?? encounterOptions.find(o => o.text.toLowerCase().includes(encounterType.toLowerCase()))
            ?? encounterOptions[0];

        if (!matchedEncounter) {
            throw new Error('[Admission] No valid Encounter Type options found.');
        }

        await encounterDropdown.selectOption({ value: matchedEncounter.value });
        await encounterDropdown.dispatchEvent('change');
        console.log(`[Admission] 3. Encounter Type → "${matchedEncounter.text}"`);
        await this.page.waitForTimeout(500);

        // ── 4. ADMISSION TYPE ────────────────────────────────────────────────────
        // ng-model="Admission.AdmissionTypeID" — options: Delivery / Direct / Elective /
        // Emergency Admission / False Delivery / Newborn
        // Note: "Delivery" comes pre-selected in the provided HTML.
        const admissionTypeDropdown = this.page.locator('select[ng-model="Admission.AdmissionTypeID"]');
        await admissionTypeDropdown.waitFor({ state: 'visible', timeout: 10000 });

        const admissionTypeOptions: { text: string; value: string }[] =
            await admissionTypeDropdown.evaluate((sel: HTMLSelectElement) =>
                Array.from(sel.options)
                    .map(o => ({ text: o.text.trim(), value: o.value }))
                    .filter(o => o.value !== '' && !o.text.toLowerCase().includes('select'))
            );

        const matchedAdmissionType =
            admissionTypeOptions.find(o => o.text.toLowerCase() === admissionType.toLowerCase())
            ?? admissionTypeOptions.find(o => o.text.toLowerCase().includes(admissionType.toLowerCase()))
            ?? admissionTypeOptions[0];

        if (!matchedAdmissionType) {
            throw new Error('[Admission] No valid Admission Type options found.');
        }

        await admissionTypeDropdown.selectOption({ value: matchedAdmissionType.value });
        await admissionTypeDropdown.dispatchEvent('change');
        console.log(`[Admission] 4. Admission Type → "${matchedAdmissionType.text}"`);
        await this.page.waitForTimeout(500); // ng-change="FillServiceGrid()" — let grid populate

        // ── 5. ADMISSION SOURCE ──────────────────────────────────────────────────
        // ng-model="Admission.PatientSourceID" — "Internal" comes pre-selected
        const sourceDropdown = this.page.locator('select[ng-model="Admission.PatientSourceID"]');
        await sourceDropdown.waitFor({ state: 'visible', timeout: 10000 });

        const sourceOptions: { text: string; value: string }[] =
            await sourceDropdown.evaluate((sel: HTMLSelectElement) =>
                Array.from(sel.options)
                    .map(o => ({ text: o.text.trim(), value: o.value }))
                    .filter(o => o.value !== '' && !o.text.toLowerCase().includes('select'))
            );

        const matchedSource =
            sourceOptions.find(o => o.text.toLowerCase() === admissionSource.toLowerCase())
            ?? sourceOptions.find(o => o.text.toLowerCase().includes(admissionSource.toLowerCase()))
            ?? sourceOptions[0];

        if (matchedSource) {
            await sourceDropdown.selectOption({ value: matchedSource.value });
            await sourceDropdown.dispatchEvent('change');
            console.log(`[Admission] 5. Admission Source → "${matchedSource.text}"`);
        }
        await this.page.waitForTimeout(500);

        console.log('[Admission] fillAdmissionInformation complete ✅');
    }

    // =====================================================================
    // SELECT VACANT BED
    // 1. Click the "Available Wards" (bed icon) button to open the modal
    // 2. Wait for the #bedStatus modal to be visible
    // 3. Loop through bed rows until one with Bed Occupied = "Available" is found
    // 4. Tick its checkbox
    // 5. Close/confirm the modal (if a confirm button exists)
    // =====================================================================
    async selectVacantBed() {

        // ── 1. OPEN "Available Wards" MODAL ──────────────────────────────────────
        // <button ... title="Available Wards" data-toggle="modal"
        //         ng-click="OpenBedStatus()" data-target="#bedStatus">
        const bedStatusBtn = this.page.locator('button[title="Available Wards"]');
        await bedStatusBtn.waitFor({ state: 'visible', timeout: 10000 });
        await bedStatusBtn.click();
        console.log('[Bed] "Available Wards" button clicked — waiting for modal...');

        // ── 2. WAIT FOR MODAL ─────────────────────────────────────────────────────
        const bedModal = this.page.locator('#bedStatus');
        await bedModal.waitFor({ state: 'visible', timeout: 10000 });
        console.log('[Bed] Bed status modal opened ✅');

        // Allow the bed grid to populate
        await this.page.waitForTimeout(800);

        // ── 3. FIND FIRST ROW WHERE "Bed Occupied" = "Available" ────────────────────
        // From the screenshot, each row is a <tr> with columns:
        // Select (checkbox) | Code | Bed | Room Type | Ward | Bed Occupied
        // We loop rows and pick the first one whose last cell text is "Available"
        // AND whose checkbox is enabled (not disabled/occupied rows are greyed out).
        const bedRows = bedModal.locator('table tbody tr');
        const rowCount = await bedRows.count();

        if (rowCount === 0) {
            throw new Error('[Bed] No bed rows found in the Vacant Bed Selection table.');
        }

        let bedSelected = false;

        for (let i = 0; i < rowCount; i++) {
            const row = bedRows.nth(i);

            // Read the "Bed Occupied" status — last column in the row
            const cells = row.locator('td');
            const cellCount = await cells.count();
            if (cellCount === 0) continue;

            const statusText = (await cells.nth(cellCount - 1).innerText()).trim();
            const checkbox = row.locator('input[type="checkbox"]');

            const isAvailable = statusText.toLowerCase() === 'available';
            const checkboxExists = await checkbox.count() > 0;

            if (isAvailable && checkboxExists) {
                const isDisabled = await checkbox.first().isDisabled();
                if (isDisabled) continue; // skip rows where checkbox is disabled

                await checkbox.first().check();

                const bedCode = (await cells.nth(1).innerText()).trim();
                const bedLabel = (await cells.nth(2).innerText()).trim();
                console.log(`[Bed] ✅ Selected bed "${bedCode}" (${bedLabel}) — status "${statusText}"`);

                bedSelected = true;
                break;
            }
        }

        if (!bedSelected) {
            throw new Error('[Bed] No available (non-occupied, enabled) bed found in the table.');
        }

        await this.page.waitForTimeout(300);

        // ── 4. CONFIRM / CLOSE MODAL ──────────────────────────────────────────────
        // Try a common "Select"/"Confirm"/"OK"/"Save" button inside the modal first;
        // fall back to closing via the modal's close button if none exists.
        const confirmBtn = bedModal.getByRole('button', { name: /select|confirm|ok|save/i });
        if (await confirmBtn.count() > 0) {
            await confirmBtn.first().click();
            console.log('[Bed] Confirm button clicked inside bed modal.');
        } else {
            const closeBtn = bedModal.locator('button.close, [data-dismiss="modal"]').first();
            if (await closeBtn.count() > 0) {
                await closeBtn.click();
                console.log('[Bed] Modal closed via close button.');
            }
        }

        await bedModal.waitFor({ state: 'hidden', timeout: 10000 });
        console.log('[Bed] Bed status modal closed ✅');
    }

    // =====================================================================
    // SAVE ADMISSION
    // Same ng-confirm popup pattern as RegistrationPage.saveRegistration().
    // 1. Click the Admission Save button
    // 2. Wait for the "Are you sure" confirmation popup
    // 3. Click "Save" inside the popup
    // =====================================================================
    async saveAdmission() {

        // ── 1. CLICK MAIN SAVE BUTTON ────────────────────────────────────────────
        // Adjust this selector to the actual Admission Save button's unique id,
        // e.g. '#admbutton', if it differs from the registration page's #regbutton.
        const saveBtn = this.page.locator('#admbutton');
        await saveBtn.waitFor({ state: 'visible', timeout: 10000 });
        await saveBtn.click();
        console.log('[Save] Admission Save button clicked — waiting for confirmation popup...');

        // ── 2. WAIT FOR ng-confirm POPUP ─────────────────────────────────────────
        const confirmPopup = this.page.locator('.ng-confirm-content-pane');
        await confirmPopup.waitFor({ state: 'visible', timeout: 10000 });
        await expect(confirmPopup).toContainText('Are you sure', { ignoreCase: true });
        console.log('[Save] Confirmation popup appeared ✅');

        // ── 3. CLICK CONFIRM "Save" INSIDE POPUP ─────────────────────────────────
        const confirmSaveBtn = this.page.locator('.ng-confirm-buttons').getByRole('button', { name: 'Save' });
        await confirmSaveBtn.waitFor({ state: 'visible', timeout: 5000 });
        await confirmSaveBtn.click();
        console.log('[Save] Confirm "Save" clicked ✅');

        // ── 4. WAIT FOR POPUP TO DISMISS ─────────────────────────────────────────
        await confirmPopup.waitFor({ state: 'hidden', timeout: 10000 });
        console.log('[Save] Admission saved successfully ✅');
    }
}
