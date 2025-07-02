import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    constructor(public page: Page) { }

    async addProductToCart(productId: string) {
        await this.page.getByTestId(`add-to-cart-${productId}`).click();
    }

    async removeProductFromCart(productId: string) {
        await this.page.getByTestId(`remove-${productId}`).click();
    }

    async isOnPage() {
        await this.page.waitForURL(/.*inventory\.html/);
        await this.page.getByText('Products').waitFor({ state: 'visible' });
    }

    async openMenu() {
        await this.page.locator('#react-burger-menu-btn').click();
    }

    async logout() {
        await this.page.getByTestId('logout-sidebar-link').click();
    }
    getCartBadge(): Locator {
        return this.page.getByTestId('shopping-cart-badge');
    }
    getProducts(): Locator {
        return this.page.getByText('Products');
    }
}
