/// <reference types="cypress" />

it("sort products by price down-up", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);

  // Autorization

  cy.get(".userbar__button").click();
  cy.get("#login_form_id > .form > :nth-child(2) > .field").type(
    "email"
  );
  cy.get("#login_form_id > .form > :nth-child(4) > .field").type(
    "password"
  );
  cy.get("#login_form_id > .form > .__submit > .btn > .btn-input").click();
  cy.wait(1000);

  // Verification of access to the personal account

  cy.get('.userbar__button[title="nick"]').should("exist");
  cy.log("Authorization was successful");

  // Product search

  cy.get(".search__input").type("ecoflow");
  cy.get(".search__button").click();

  // Adding products to favorites

  let addedProducts = 0; // Counter of added products

  cy.get(".catalog-grid__item").each(($element) => {
    cy.wrap($element).then(($item) => {
      if ($item.find(":contains('В желания')").length > 0) {
        if (addedProducts < 2) {
          cy.wrap($item).contains("В желания").click({ force: true }); // Click on the button "В желания"
          cy.get("body").click("topLeft").wait(1000);
          addedProducts++; // We increase the counter of added goods
        } else {
          return false; // We complete the cycle if two products are added
        }
      }
    });
  });

  // Checking the letter of wishes

  cy.get(".favorites-view__icon").click();
  cy.contains("Список желаний").should("exist");
  const expectedItemCount = 2; // A given number of elements
  cy.get(".catalog-grid__item").should("have.length", expectedItemCount);
});
