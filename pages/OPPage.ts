// ============================================================
// pages/OPPage.ts
// ============================================================
import { Page } from '@playwright/test';

export class OPPage {
  constructor(private page: Page) {}

  // ── Locators (confirmed from DOM inspection) ─────────────
  //    Source: <li class="treeview treeview-width" id="li0OP">
  //              <a href="#" onclick="SetTitleOfHTMLView(/OP/,25)...">
  //                <span class="menu-text">OP</span>
  //              </a>
  //            <li id="li1PatientRegistration" onclick="SetTitleOfHTMLView(/Registration/,27)">
  private opMenu      = '#li0OP > a';
  private regMenuItem = '#li1PatientRegistration';

  // ── openRegistration() ───────────────────────────────────
  async openRegistration() {

    // Step 1: Click the OP top-nav item
    //   TODO: If your test environment has a different li ID for OP,
    //         update '#li0OP > a' to match. Check: DevTools → inspect OP link → copy id.
    await this.page.locator(this.opMenu).click();

    // Step 2: Wait for the Registration submenu item to become visible
    //   The treeview-menu expands after the click — we wait for the exact
    //   element rather than using a fixed timeout.
    //   TODO: If Registration still isn't found, open DevTools while the
    //         submenu is open and confirm the li id is 'li1PatientRegistration'.
    await this.page.locator(this.regMenuItem).waitFor({
      state: 'visible',
      timeout: 5000,
    });

    // Step 3: Click Registration
    await this.page.locator(this.regMenuItem).click();

    // Step 4: Confirm the Registration page has loaded
    //   TODO: If the heading text is different (e.g. 'New Patient' or 'OP Registration'),
    //         update the selector below to match what appears on screen.
    await this.page.waitForSelector('text=Patient Information', {
      state: 'visible',
      timeout: 15000,
    });

    console.log('✅ Successfully navigated to OP > Registration');
  }
}
