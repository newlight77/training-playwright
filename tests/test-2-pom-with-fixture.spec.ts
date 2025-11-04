import { type StudentFormType } from './pages/StudentFormPage';
import { studentFormFixture as fixture } from './fixtures/student.form.fixture';

fixture.test('test form with POM', async ({ studentFormPage, resultModalPage }) => {

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
  await studentFormPage.fillAndSubmit(data);

  // THEN
  fixture.expect(resultModalPage.getResultElement()).toContainText("Thanks for submitting the form");

  await resultModalPage.close();

});
