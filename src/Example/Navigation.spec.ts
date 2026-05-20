import { test, expect } from '@playwright/test';

test.describe('Navegação', () => {
  test('deve acessar area dos socios', async ({ page, context }) => {
    await page.goto('https://www.criciuma.com.br/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),

      page
        .getByRole('link', {
          name: /área dos sócios/i
        })
        .click()
    ]);

    await newPage.waitForLoadState();

    expect(newPage.url()).toMatch(/socio|carvoeiro/i);

    await newPage.screenshot({
      path: 'artifacts/socios.png',
      fullPage: true
    });
  });
});
