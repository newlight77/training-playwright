import { Locator, Page } from "@playwright/test";

const url = "https://demoqa.com/automation-practice-form"

export type StudentFormType = {
    firstname: string,
    lastname: string,
    email: string,
    gender: string,
    phoneNumber: string,
}

export class StudentResultModalPage {
    readonly closeButton: Locator
    readonly success: Locator

    constructor(private readonly page: Page) {
        this.success = this.page.locator("#example-modal-sizes-title-lg")
        this.closeButton = this.page.getByRole('button', { name: 'Close' })
    }

    getResultElement = () => {
     return this.success
    }

    close = async() => {
        await this.closeButton.click();
    }
}

export class StudentFormPage {

    readonly firstnameInput: Locator
    readonly lastnameInput: Locator
    readonly userEmailInput: Locator
    readonly maleGender: Locator
    readonly phoneNumber: Locator

    readonly submitButton: Locator


    constructor(private readonly page: Page) {
        this.firstnameInput = this.page.getByRole('textbox', { name: 'First Name' })
        this.lastnameInput = this.page.getByRole('textbox', { name: 'Last Name' })
        this.userEmailInput = this.page.getByRole('textbox', { name: 'name@example.com' })
        this.maleGender = this.page.getByText('Male', { exact: true })
        this.phoneNumber = this.page.getByRole('textbox', { name: 'Mobile Number' })
        this.submitButton = this.page.getByRole('button', { name: 'Submit' })

    }

    goTo = async () => {
        await this.page.goto(url);
        await this.page.locator('span').filter({ hasText: 'Forms' }).getByRole('img').nth(1).click();
        await this.page.getByRole('listitem').getByText('Practice Form').click();
    }

    fillAndSubmit = async ({firstname, lastname, email, gender, phoneNumber}: StudentFormType) => {
        await this.firstnameInput.fill(firstname);
        await this.lastnameInput.fill(lastname);
        await this.userEmailInput.fill(email);

        if (gender === 'Male')
            await this.maleGender.check();

        await this.phoneNumber.fill(phoneNumber);

        await this.submitButton.click();
    }

}
