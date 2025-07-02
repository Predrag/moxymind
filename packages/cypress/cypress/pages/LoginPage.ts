// cypress/pages/LoginPage.ts

export class LoginPage {
    visit() {
        cy.visit('/');
    }

    fillUsername(username: string) {
        cy.getByTestId('username').type(username);
    }

    fillPassword(password: string) {
        cy.getByTestId('password').type(password);
    }

    submit() {
        cy.getByTestId('login-button').click();
    }

    getError() {
        return cy.getByTestId('error');
    }
}
