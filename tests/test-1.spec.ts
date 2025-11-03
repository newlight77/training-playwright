import { test, expect } from '@playwright/test';

test('test textbox', async ({ page }) => {

  await page.goto("https://demoqa.com/text-box");

  await page.getByRole("list").getByText("Text Box").click();

  await page.locator("#userName").fill("kong");
  await page.locator("#userEmail").fill("kong@nickel.eu");
  await page.locator("#currentAddress").fill("1 place des Marseillières");
  await page.locator("#permanentAddress").fill("1 place des Marseillières");

});


test('test checkbox', async ({ page }) => {

  await page.goto("https://demoqa.com/checkbox");

  await page.getByRole("list").getByText("Check Box").click();

  await page.getByRole('button', { name: 'Toggle' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle').click();

  const notesCheckbox = page.locator('label').filter({ hasText: 'Notes' }).getByRole('img').first()

  await notesCheckbox.check();

  expect(await notesCheckbox.isChecked()).toBe(true);

  await notesCheckbox.uncheck();

  expect(await notesCheckbox.isChecked()).toBe(false);

});


test('test checkbox CRX recorded', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');
  await page.locator('label').filter({ hasText: 'Notes' }).getByRole('img').first().click();
  await page.locator('label').filter({ hasText: 'Commands' }).getByRole('img').first().click();
  await page.locator('label').filter({ hasText: 'Documents' }).getByRole('img').first().click();
  await page.getByRole('button', { name: 'Toggle' }).first().click();
});


test('test select', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');

  await page.getByRole('listitem').filter({ hasText: 'Select Menu' }).click();

  await page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
  await page.getByText('Group 1, option 1', { exact: true }).click();

  await page.getByText('Select Title').click();
  await page.getByText('Mr.', { exact: true }).click();

  await page.locator('#oldSelectMenu').selectOption('1');

  await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
  await page.locator('#react-select-4-option-0').click();
  await page.locator('#react-select-4-option-3').click();
  await page.locator('#react-select-4-option-2').click();

  await page.locator('div').filter({ hasText: /^Standard multi selectVolvoSaabOpelAudi$/ }).first().click();
  await page.locator('#cars').selectOption('volvo');
  await page.locator('#cars').selectOption('opel');
});


test('test upload', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.getByText('Forms', { exact: true }).click();
  await page.locator('span').filter({ hasText: 'Forms' }).locator('div').nth(4).click();
  await page.getByRole('listitem').getByText('Practice Form').click();
  await page.getByRole('button', { name: 'Select picture' }).click();
  await page.getByRole('button', { name: 'Select picture' }).setInputFiles('./assets/moni-logo.jpg');
});
