/// <reference types="cypress" />

it("authorization", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);
  cy.get(".lang-menu__item.is-active .lang-menu__link").then(($element) => {
    if (!$element.text().includes("Укр")) {
      cy.contains("Укр").click({ force: true });
    } else {
      cy.log("The Ukrainian language has already been selected.");
    }
  });

  // Authorization

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
});
