import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ENV } from '../../utils/env';

test.skip('KPJ Login UI Test', async ({ page }) => {
  await page.goto(`${ENV.BASE_URL}/Account/Login/`, { 
  waitUntil: 'domcontentloaded' 
});
  await page.fill('input[placeholder="Login Name"]', ENV.USERNAME);
  await page.fill('input[type="Password"]', ENV.PASSWORD);

  await page.click('button:has-text("LOGIN")');
  await page.waitForTimeout(2000);
  await page.click('button:has-text("LOGIN")');

  await page.waitForURL('**/PatientDashboard');
});

// // tests/ui/login.spec.ts


// // Skipped — login is covered inside op-registration.spec.ts
// // Enable this only when testing login in isolation
// test.skip('KPJ Login UI Test', async ({ page }) => {});
