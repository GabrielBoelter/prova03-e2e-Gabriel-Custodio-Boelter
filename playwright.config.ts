import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/Example',

  timeout: 60000,

  retries: 1,

  fullyParallel: true,

  reporter: [['html', { outputFolder: 'artifacts/report' }], ['list']],

  use: {
    baseURL: 'https://www.criciuma.com.br',

    headless: true,

    actionTimeout: 15000, 

    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',

    viewport: {
      width: 1440,
      height: 900
    }
  }
});
