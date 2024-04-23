/// <reference types="cypress" />

it("sort products by price down-up", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);

  // Пошук товару

  cy.get(".search__input").type("mavic");
  cy.get(".search__button").click();

  // Сортування товарів за зростанням ціна

  cy.get(
    '[data-sort-href="/katalog-tovarov/search/filter/sort_price=ASC/?q=mavic"]'
  ).click();
  cy.wait(1000);

  // Перевірка сортування

  let previousPrice = 0; // Початкове значення для порівняння

  cy.get(".catalog-grid__item .catalogCard-price").each(($element) => {
    cy.wrap($element)
      .invoke("text")
      .then((text) => {
        const price = parseInt(text.replace(/[\s,]/g, "")); // Перетворення тексту ціни в число, видаляючи пробіли та коми
        expect(price).to.be.at.least(previousPrice); // Перевірка, що ціна більша або рівна попередній
        previousPrice = price; // Оновлення попередньої ціни
      });
  });

  cy.log("Сортування за зростанням ціни працює правильно.");
});

/*
cy.get(".catalog-grid__item").each(($item, index, $list) => {
    // Отримати ціну з поточного елемента
    cy.wrap($item)
      .find(".catalogCard-price")
      .invoke("text")
      .then((priceText) => {
        // Перетворити текст ціни в число, видаливши пробіли та роздільник
        const price = parseInt(priceText.replace(/[\s,]/g, ""));
        // Перевірити, що ціна не є NaN та більше попередньої ціни (якщо це не перший товар)
        if (!isNaN(price) && index > 0) {
          const previousPriceText = $list
            .eq(index - 1)
            .find(".catalogCard-price")
            .text();
          const previousPrice = parseInt(
            previousPriceText.replace(/[\s,]/g, "")
          );
          // Перевірка, що ціна поточного товару більше або рівна попередньої ціни
          expect(price).to.be.at.least(previousPrice);
        }
      });
  });
*/