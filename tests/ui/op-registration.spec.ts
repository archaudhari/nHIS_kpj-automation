// ============================================================
// tests/ui/op-registration.spec.ts
// ============================================================
import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { OPPage } from '../../pages/OPPage';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { ENV } from '../../utils/env';

test('KPJ OP Registration Flow', async ({ page }) => {

  const login        = new LoginPage(page);
  const op           = new OPPage(page);
  const registration = new RegistrationPage(page);

  // ── Step 1: Go to Login page ────────────────────────────
  await page.goto(`${ENV.BASE_URL}/Account/Login/`, {
    waitUntil: 'domcontentloaded',
  });

  // ── Step 2: Login ────────────────────────────────────────
  // Fills credentials + mandatory dropdowns + waits for PatientDashboard
  await login.login(ENV.USERNAME, ENV.PASSWORD);

  // ── Step 3: Navigate OP → Registration ──────────────────
  // Clicks #li0OP > a, waits for submenu, clicks #li1PatientRegistration
  await op.openRegistration();

  // ── Step 4: Wait for Registration form to be ready ──────
  await registration.waitForPageLoad();

  // ── Step 5: Fill Patient Information ────────────────────
  await registration.fillBasicDetails();

  // ── Step 6: Fill Address ─────────────────────────────────
  await registration.fillAddress();

  // ── Step 7: Fill Visit Details ───────────────────────────
  await registration.fillVisitDetails();

  // ── Step 8: Save ─────────────────────────────────────────
  await registration.clickSave();

  // ── Step 9: Assert success ───────────────────────────────
  await registration.validateSuccess();
});
