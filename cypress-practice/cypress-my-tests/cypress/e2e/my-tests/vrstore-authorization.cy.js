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

  // Вхід в особистий кабінет

  cy.get(".userbar__button").click();
  cy.get("#login_form_id > .form > :nth-child(2) > .field").type(
    "browl@yahoo.com"
  );
  cy.get("#login_form_id > .form > :nth-child(4) > .field").type(
    "Aquapark_3000"
  );
  cy.get("#login_form_id > .form > .__submit > .btn > .btn-input").click();
  cy.wait(1000);

  // Перевірка входу в особистий кабінет

  cy.get('.userbar__button[title="Browl"]').should("exist");
  cy.log("Авторизація пройшла успішно");
});
