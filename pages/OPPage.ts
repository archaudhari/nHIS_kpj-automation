import { Page } from '@playwright/test';

export class OPPage {
  constructor(private page: Page) {}

  async openRegistration() {
    // Click OP menu
    await this.page.getByRole('link', { name: 'OP' }).click(); 
    await this.page.getByRole('link', { name: 'Registration' }).click();

    // Click Registration
    // await this.page.locator('#li1iPatientRegistration a').click();

    // Ensure page loaded
    await this.page.waitForSelector('text=Patient Information');
  }
}