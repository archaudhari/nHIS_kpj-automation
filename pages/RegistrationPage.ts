import { Page, expect } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Add this method inside your RegistrationPage class
    async fillDynamicPatientName(patientName: string) {
        const firstNameInput = this.page.locator('#txtFirstName');
        
        // 1. Ensure the page has fully settled before doing anything
        await this.page.waitForLoadState('domcontentloaded');

        // 2. Wait for the input to exist and be visible
        await firstNameInput.waitFor({ state: 'visible' });

        // 3. Click the field to focus it, then WAIT for Angular to activate its listeners
        await firstNameInput.click();
        await this.page.waitForTimeout(1000); 

        // 4. Type the text sequentially and slightly slower
        await firstNameInput.pressSequentially(patientName, { delay: 100 });
        
        // 5. Intentionally click OUTSIDE the input to trigger your app's ng-blur SearchPatientByInput
        await this.page.locator('body').click(); 
        
        // 6. Wait a moment for that background search to finish before verifying
        await this.page.waitForTimeout(1500); 

        // 7. Finally, verify the text is actually there
        const expectedValue = patientName.toUpperCase();
        await expect(firstNameInput).toHaveValue(expectedValue);
    }

    // ... your other methods like selectNationalityDropdown ...
}