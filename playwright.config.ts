/// <reference types="node" />
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 100000,
  retries: 0,          // ← no retries, run once only
  workers: 1,          // ← single worker, no parallel sessions
  fullyParallel: false,
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',  // no retries so trace won't fire, but harmless
  }
});