/// <reference types="cypress" />

it("sort products by price down-up", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);

  // Пошук товару

  cy.get(".search__input").type("mavic");
  cy.get(".search__button").click();

  // Сортування товарів за зниженням ціни

  cy.get(
    '[data-sort-href="/katalog-tovarov/search/filter/sort_price_up=DESC/?q=mavic"]'
  ).click();
  cy.wait(1000);

  // Перевірка сортування товарів

  let previousPrice = Number.MAX_VALUE; // Початкове значення для порівняння

  cy.get(".catalog-grid__item .catalogCard-price").each(($element) => {
    cy.wrap($element)
      .invoke("text")
      .then((text) => {
        const price = parseInt(text.replace(/[\s,]/g, "")); // Перетворення тексту ціни в число, видаляючи пробіли та коми
        expect(price).to.be.at.most(previousPrice); // Перевірка, що ціна менша або рівна попередній
        previousPrice = price; // Оновлення попередньої ціни
      });
  });

  cy.log("Сортування за зниженням ціни працює правильно.");
});
