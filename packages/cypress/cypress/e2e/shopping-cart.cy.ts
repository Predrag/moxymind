import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";


const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername("standard_user");
    loginPage.fillPassword("secret_sauce");
    loginPage.submit();
    inventoryPage.addProductToCart("sauce-labs-backpack");
})

describe("Add product to cart", () => {
    it("should add a product to the cart", () => {
        inventoryPage.getCartBadge().should("contain", "1");
    });
});

describe("Remove product from cart", () => {
    it("should remove a product from the cart", () => {
        inventoryPage.removeProductFromCart("sauce-labs-backpack");
        inventoryPage.getCartBadge().should("not.exist");
    });
});
