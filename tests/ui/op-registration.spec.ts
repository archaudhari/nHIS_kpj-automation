import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { OPPage } from '../../pages/OPPage';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { ENV } from '../../utils/env';

test('KPJ OP Registration Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const op = new OPPage(page);
  const registration = new RegistrationPage(page);

  // ✅ Step 1: Login (reuse existing logic)
  await page.goto(ENV.BASE_URL);

  // ✅ Step 2: Navigate to OP → Registration
  await op.openRegistration();

  // ✅ Step 3: Fill form
  await registration.fillBasicDetails();
  await registration.fillAddress();
  await registration.fillVisitDetails();

  // ✅ Step 4: Save
  await registration.clickSave();
});