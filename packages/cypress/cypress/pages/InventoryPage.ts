// cypress/pages/InventoryPage.ts

export class InventoryPage {
    addProductToCart(productTestId: string) {
        cy.getByTestId(`add-to-cart-${productTestId}`).click();
    }
    removeProductFromCart(productTestId: string) {
        cy.getByTestId(`remove-${productTestId}`).click();
    }

    getCartBadge() {
        return cy.get('.shopping_cart_badge');
    }

    openMenu() {
        cy.get('#react-burger-menu-btn').click();
    }

    logout() {
        cy.get('#logout_sidebar_link').click();
    }

    isOnPage() {
        cy.url().should('include', '/inventory.html');
        cy.contains('Products').should('be.visible');
    }
}
