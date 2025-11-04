import { test, expect } from '@playwright/test';

test('example with tag',
  { tag: ["@example"],
    annotation: { type: "example", description: "tests for example with tag @example" }
  },
  async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
