import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 100000,
  retries: 1,
  // Add these lines:
  workers: 1, // Change from default to 1
  fullyParallel: false,
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    viewport: { width: 1280, height: 720 }, // Ensures consistent element visibility
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  }
});