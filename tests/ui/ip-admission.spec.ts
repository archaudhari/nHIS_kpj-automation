// ============================================================
// tests/ui/ip-admission.spec.ts
// ============================================================
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AdmissionPage } from '../../pages/AdmissionPage';
import { ENV } from '../../utils/env';


test('KPJ IP Admission Flow', async ({ page }) => {

  const login     = new LoginPage(page);
  const admission = new AdmissionPage(page);

  // ── Step 1: Go to Login page ────────────────────────────
  await page.goto('/Account/Login/', {
      waitUntil: 'domcontentloaded',
    });

  // ── Step 2: Login ────────────────────────────────────────
  // Fills credentials + mandatory dropdowns + waits for PatientDashboard
  await login.login(ENV.USERNAME, ENV.PASSWORD);

  // ── Step 3: Navigate IP → Admission ─────────────────────
  // Clicks #li0IP > a, waits for submenu, clicks #li1Admission
  await admission.navigateToAdmission();

  // ── Step 4: ADMISSION INFORMATION ───────────────────────
  // 1. Registration Department  → random selection
  // 2. Primary Doctor            → auto-populated after department, random pick
  // 3. Encounter Type             → "InPatient"
  // 4. Admission Type             → "Elective"
  // 5. Admission Source           → "Internal"
  const targetEncounterType   = 'InPatient';
  const targetAdmissionType   = 'Elective';
  const targetAdmissionSource = 'Internal';

  console.log(`[Admission Setup] Encounter: ${targetEncounterType} | Admission Type: ${targetAdmissionType} | Source: ${targetAdmissionSource}`);

  await admission.fillAdmissionInformation(
      targetEncounterType,
      targetAdmissionType,
      targetAdmissionSource
  );

  // ── Step 5: VACANT BED SELECTION ────────────────────────
  // Opens the "Available Wards" modal, finds the first bed where
  // Bed Occupied = "Available" and ticks its checkbox.
  await admission.selectVacantBed();

  // ── Step 6: SAVE ADMISSION ───────────────────────────────
  // Clicks Save → confirms "Are you sure" popup → clicks Save again
  await admission.saveAdmission();
});
