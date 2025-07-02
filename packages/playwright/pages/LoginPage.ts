import { Page } from '@playwright/test';

export class LoginPage {
    constructor(public page: Page) { }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.waitForLoadState('networkidle');
    }

    async fillUsername(username: string) {
        await this.page.getByTestId('username').fill(username);
    }

    async fillPassword(password: string) {
        await this.page.getByTestId('password').fill(password);
    }
    async submit() {
        await this.getSubmit().click();
        await this.page.waitForLoadState('networkidle');
    }
    getSubmit() {
        return this.page.getByTestId('login-button');
    }
    getError() {
        return this.page.getByTestId('error');
    }
}
