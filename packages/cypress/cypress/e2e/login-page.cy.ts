import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

beforeEach(() => {
  loginPage.visit();
})

describe("Login with valid credentials", () => {
  it("should allow user to log in with valid credentials", () => {
    loginPage.fillUsername("standard_user");
    loginPage.fillPassword("secret_sauce");
    loginPage.submit();
    cy.url().should("include", "/inventory.html");
    cy.contains("Products").should("be.visible");
  });
});

describe("Login with invalid credentials", () => {
  it("should show error message for invalid login", () => {
    loginPage.fillUsername("locked_out_user");
    loginPage.fillPassword("wrong_password");
    loginPage.submit();
    loginPage.getError().should("be.visible");
  });
});

describe("Logout functionality", () => {
  it("should allow user to log out", () => {
    loginPage.fillUsername("standard_user");
    loginPage.fillPassword("secret_sauce");
    loginPage.submit();
    inventoryPage.isOnPage();
    inventoryPage.openMenu();
    inventoryPage.logout();
    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});
