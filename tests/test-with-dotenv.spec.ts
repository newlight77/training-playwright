import { test, expect } from '@playwright/test';

const url = process.env.URL || ''

test('test form', async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
