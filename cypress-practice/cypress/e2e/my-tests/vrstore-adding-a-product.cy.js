/// <reference types="cypress" />

it("adding a product", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);
  cy.get(".lang-menu__item.is-active .lang-menu__link").then(($element) => {
    if (!$element.text().includes("Укр")) {
      cy.contains("Укр").click({ force: true });
    } else {
      cy.log("The Ukrainian language has already been selected.");
    }
  });
  cy.get(".search__input").type("playstation");
  cy.get(".search__button").click();
  cy.contains("PlayStation VR2").click();
  cy.get("#j-buy-button-widget-3585 > .btn-content").click();
  cy.get(".popup-title").should("contain", "Кошик");
  cy.get(".__details").should("contain", "PlayStation VR2");
  cy.get(".counter-field").should("have.value", "1");
  cy.get(".__plus").click();
  cy.wait(1000);
  cy.get(".counter-field").should("have.value", "2");
  cy.get(".__minus").click();
  cy.wait(1000);
  cy.get(".counter-field").should("have.value", "1");
  cy.get(".btn-content").should("contain", "Оформити замовлення").should("exist");
});
