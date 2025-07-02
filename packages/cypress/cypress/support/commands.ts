export { };


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/index.ts
Cypress.Commands.add('getByTestId', (value) => {
    return cy.get(`[data-test=${value}]`)
})

// cypress/support/index.ts
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-test attribute.
             * @example cy.getByTestId('greeting')
             */
            getByTestId(value: string): Chainable<JQuery<HTMLElement>>
        }
    }
}