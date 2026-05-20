import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('deve carregar a home corretamente', async ({ page }) => {
    await page.goto('https://www.criciuma.com.br/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    await expect(page).toHaveTitle(/Criciúma/i);

    await expect(page.locator('img').first()).toBeVisible();

    await expect(page.getByText('PRÓXIMO JOGO').first()).toBeVisible();

    await expect(
      page.locator('h2, h3').filter({ hasText: 'ÚLTIMAS NOTÍCIAS' }).first()
    ).toBeVisible();

    await page.screenshot({
      path: 'artifacts/home.png',
      fullPage: true
    });
  });
});
