/// <reference types="cypress" />

it("sort products by price down-up", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);

  // Product search

  cy.get(".search__input").type("mavic");
  cy.get(".search__button").click();

  // Sorting products by decreasing price

  cy.get(
    '[data-sort-href="/katalog-tovarov/search/filter/sort_price_up=DESC/?q=mavic"]'
  ).click();
  cy.wait(1000);

  // Checking the sorting of goods

  let previousPrice = Number.MAX_VALUE; // Initial value for comparison

  cy.get(".catalog-grid__item .catalogCard-price").each(($element) => {
    cy.wrap($element)
      .invoke("text")
      .then((text) => {
        const price = parseInt(text.replace(/[\s,]/g, "")); // Convert price text to a number, removing spaces and commas
        expect(price).to.be.at.most(previousPrice); // Checking that the price is less than or equal to the previous one
        previousPrice = price; // Previous price update
      });
  });

  cy.log("Sorting by descending price works correctly.");
});
