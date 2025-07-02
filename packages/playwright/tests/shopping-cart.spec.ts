import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Shopping cart', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        await loginPage.goto();
        await loginPage.fillUsername('standard_user');
        await loginPage.fillPassword('secret_sauce');
        await loginPage.submit();
        await inventoryPage.addProductToCart('sauce-labs-backpack');
    });

    test('should add a product to the cart', async () => {
        await expect(inventoryPage.getCartBadge()).toHaveText('1');
    });

    test('should remove a product from the cart', async () => {
        await inventoryPage.removeProductFromCart('sauce-labs-backpack');
        await expect(inventoryPage.getCartBadge()).not.toBeVisible();
    });
});
