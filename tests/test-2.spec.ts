import { test, expect } from '@playwright/test';


test('test form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.locator('span').filter({ hasText: 'Forms' }).getByRole('img').nth(1).click();
  await page.getByRole('listitem').getByText('Practice Form').click();

  await page.getByRole('textbox', { name: 'First Name' }).fill('Kong');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Tata');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('kong@nickel.ee');
  await page.getByText('Male', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0699999999');

  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('option', { name: 'Choose Tuesday, November 4th,' }).click();

  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Testing E2E');

  await page.getByText('Reading').check();
  await page.getByText('Select picture').click();
  await page.getByRole('button', { name: 'Select picture' }).setInputFiles('./assets/moni-logo.jpg');

  await page.getByRole('textbox', { name: 'Current Address' }).fill('1 place des marseillières');

  await page.getByText('Select State').click();
  await page.getByText('NCR', { exact: true }).click();

  await page.getByText('Select City').click();
  await page.getByText('Delhi', { exact: true }).click();

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator("#example-modal-sizes-title-lg")).toContainText("Thanks for submitting the form");
});
