import { test, expect } from '@playwright/test';

test.describe('Banner principal', () => {
  test('deve navegar no carousel principal', async ({ page }) => {
    await page.goto('https://www.criciuma.com.br/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    const carouselDots = page.locator('.slick-dots li');

    await expect(carouselDots.first()).toBeVisible({
      timeout: 15000
    });

    const count = await carouselDots.count();

    expect(count).toBeGreaterThan(1);

    await carouselDots.nth(1).click();

    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'artifacts/carousel.png',
      fullPage: true
    });
  });
});
