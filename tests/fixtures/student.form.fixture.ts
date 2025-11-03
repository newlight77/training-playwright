import { test as base, Page } from '@playwright/test';
import { StudentFormPage, StudentResultModalPage } from '../pages/StudentFormPage';
export type { StudentFormType } from '../pages/StudentFormPage';


type StudentFormFixture = {
    studentFormPage: StudentFormPage
    resultModalPage: StudentResultModalPage
}

const test = base.extend<StudentFormFixture>({
    studentFormPage: async ({page}: {page: Page}, use) => {
        await use(new StudentFormPage(page));
    },
    resultModalPage: async ({page}: {page: Page}, use) => {
        await use(new StudentResultModalPage(page));
    }
})

const expect = base.expect;

export const studentFormFixture = {
    test: test,
    expect: expect
}
