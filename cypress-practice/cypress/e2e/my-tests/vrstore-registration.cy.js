/// <reference types="cypress" />

it("registration", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);
  cy.get(".lang-menu__item.is-active .lang-menu__link").then(($element) => {
    if (!$element.text().includes("Укр")) {
      cy.contains("Укр").click({ force: true });
    } else {
      cy.log("Українську мову вже обрано.");
    }
  });
  cy.get(".userbar__button").click();
  cy.get('[href="#j-popup-tab-signup"] > .login-tabs-txt').click();
  cy.get("#signup-form > .form > :nth-child(2) > .field").type("nick");
  cy.get("#signup-form > .form > :nth-child(4) > .field").type("email");
  cy.get(":nth-child(6) > .field").type("password");
  cy.get("#signup-form > .form > .__submit > .btn > .btn-input").click();
  cy.get('.popup-confirm > .btn > .btn-content').should('exist').click();
  cy.wait(1000);
  cy.get('.userbar__button').trigger('mouseover');
  cy.contains('Особисті дані').click();
  cy.get('.main-h').should('contain', 'Особисті дані')
});
