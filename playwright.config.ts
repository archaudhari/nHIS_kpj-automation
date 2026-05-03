import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 1000000,

  retries: 1,

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
});