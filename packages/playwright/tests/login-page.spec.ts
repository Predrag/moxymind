import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Login page', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        await loginPage.goto();
    });

    test('should allow user to log in with valid credentials', async ({ page }) => {
        await loginPage.fillUsername('standard_user');
        await loginPage.fillPassword('secret_sauce');
        await loginPage.submit();
        expect(page.url()).toMatch(/.*inventory\.html/);
        await expect(inventoryPage.getProducts()).toBeVisible();
    });

    test('should show error message for invalid login', async () => {
        await loginPage.fillUsername('locked_out_user');
        await loginPage.fillPassword('wrong_password');
        await loginPage.submit();
        await expect(loginPage.getError()).toBeVisible();
    });
    test('should allow user to log out', async () => {
        await loginPage.fillUsername('standard_user');
        await loginPage.fillPassword('secret_sauce');
        await loginPage.submit();
        await inventoryPage.isOnPage();
        await inventoryPage.openMenu();
        await inventoryPage.logout();
        await expect(loginPage.getSubmit()).toBeVisible();
        await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/');
    });
});