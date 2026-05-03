import { test, expect } from '@playwright/test';
import { loginAPI } from './auth.api';

test('Validate KPJ Login API', async () => {
  const response = await loginAPI();

  console.log('STATUS:', response.status);
  console.log('HEADERS:', response.headers);
  console.log('BODY:', response.data);

  expect(response.status).toBe(200);

  // Temporary validation (since response is HTML)
  expect(response.headers['content-type']).toContain('text/html');
});