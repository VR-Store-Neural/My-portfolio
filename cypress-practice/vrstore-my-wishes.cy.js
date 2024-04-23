/// <reference types="cypress" />

it("sort products by price down-up", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);

  // Вхід в особистий кабінет

  cy.get(".userbar__button").click();
  cy.get("#login_form_id > .form > :nth-child(2) > .field").type(
    "email"
  );
  cy.get("#login_form_id > .form > :nth-child(4) > .field").type(
    "password"
  );
  cy.get("#login_form_id > .form > .__submit > .btn > .btn-input").click();
  cy.wait(1000);

  // Перевірка входу в особистий кабінет

  cy.get('.userbar__button[title="nick"]').should("exist");
  cy.log("Авторизація пройшла успішно");

  // Пошук товару

  cy.get(".search__input").type("ecoflow");
  cy.get(".search__button").click();

  // Додавання товарів до обраного

  let addedProducts = 0; // Лічильник доданих товарів

  cy.get(".catalog-grid__item").each(($element) => {
    cy.wrap($element).then(($item) => {
      if ($item.find(":contains('В желания')").length > 0) {
        if (addedProducts < 2) {
          cy.wrap($item).contains("В желания").click({ force: true }); // Клікаємо на кнопку "В желания"
          cy.get("body").click("topLeft").wait(1000);
          addedProducts++; // Збільшуємо лічильник доданих товарів
        } else {
          return false; // Завершуємо цикл, якщо додано два товари
        }
      }
    });
  });

  // Перевірка листа бажань

  cy.get(".favorites-view__icon").click();
  cy.contains("Список желаний").should("exist");
  const expectedItemCount = 2; // Задана кількість елементів
  cy.get(".catalog-grid__item").should("have.length", expectedItemCount);
});
