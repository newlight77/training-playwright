import { test, expect, Page } from '@playwright/test';
import { StudentFormPage, type StudentFormType } from './pages/StudentFormPage';

test('test form with POM', async ({ page }) => {

  // GIVEN
  const studentForm = new StudentFormPage(page);
  await studentForm.goTo();

  const data: StudentFormType = {
    firstname : "Kong",
    lastname : "King",
    email : "kong@nickel.ee",
    gender: "Male",
    phoneNumber: "0699999999",

  }

  // WHEN
  await studentForm.fillForm(data);
  await studentForm.submit()

  // THEN
  const titlesuccess = page.locator("#example-modal-sizes-title-lg")
  expect(titlesuccess).toContainText("Thanks for submitting the form");

  await page.getByRole('button', { name: 'Close' }).click();

});
