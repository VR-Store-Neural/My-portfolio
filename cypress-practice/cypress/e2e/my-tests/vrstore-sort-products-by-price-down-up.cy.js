/// <reference types="cypress" />

it("sort products by price down-up", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);

  // Product search

  cy.get(".search__input").type("mavic");
  cy.get(".search__button").click();

  // Sorting products by increasing price

  cy.get(
    '[data-sort-href="/katalog-tovarov/search/filter/sort_price=ASC/?q=mavic"]'
  ).click();
  cy.wait(1000);

  // Sort check

  let previousPrice = 0; // Initial value for comparison

  cy.get(".catalog-grid__item .catalogCard-price").each(($element) => {
    cy.wrap($element)
      .invoke("text")
      .then((text) => {
        const price = parseInt(text.replace(/[\s,]/g, "")); // Convert price text to a number, removing spaces and commas
        expect(price).to.be.at.least(previousPrice); // Checking that the price is greater than or equal to the previous one
        previousPrice = price; // Previous price update
      });
  });

  cy.log("Sorting by ascending price works correctly.");
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