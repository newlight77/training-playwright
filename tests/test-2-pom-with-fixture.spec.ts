import { test, expect, Page } from '@playwright/test';
import { StudentFormPage, type StudentFormType } from './pages/StudentFormPage';
import { studentFormFixture } from './fixtures/student.form.fixture';

studentFormFixture.test('test form with POM', async ({ studentFormPage, resultModalPage }) => {

  // GIVEN
  await studentFormPage.goTo();
  
  const data: StudentFormType = {
    firstname : "Kong",
    lastname : "King",
    email : "kong@nickel.ee",
    gender: "Male",
    phoneNumber: "0699999999",
  }

  // WHEN
  await studentFormPage.fillForm(data);
  await studentFormPage.submit()

  // THEN
  studentFormFixture.expect(resultModalPage.getResultElement()).toContainText("Thanks for submitting the form");

  await resultModalPage.close();

});
