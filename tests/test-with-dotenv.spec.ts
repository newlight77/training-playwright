import { test, expect } from '@playwright/test';
import { config } from './config/config';

test('test form', async ({ page }) => {
  await page.goto(config.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
