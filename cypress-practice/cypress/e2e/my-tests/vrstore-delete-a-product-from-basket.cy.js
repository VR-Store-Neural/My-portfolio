/// <reference types="cypress" />

it("delete a product from basket", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);

  // Site language selection

  cy.get(".lang-menu__item.is-active .lang-menu__link").then(($element) => {
    if (!$element.text().includes("Укр")) {
      cy.contains("Укр").click({ force: true });
    } else {
      cy.log("The Ukrainian language has already been selected.");
    }
  });

  // Product search

  cy.get(".search__input").type("playstation");
  cy.get(".search__button").click();

  // Adding products to the cart

  let addedProducts = 0; // A variable to track the number of added products

  cy.get(".catalog-grid__item").each(($element) => {
    cy.wrap($element).then(($item) => {
      if ($item.find(".productSticker-item.__new").length > 0) {
        if (addedProducts < 3) {
          // We check not to add more than three products
          cy.wrap($item).find(".btn-content").click(); // Click on the button "Купити"
          cy.get("body").click("topLeft").wait(1000);
          addedProducts++; // We increase the counter of added goods
        } else {
          return false; // We complete the cycle if three products have been added
        }
      }
    });
  });
  cy.get(".basket__link").click({ force: true });

  // Checking the amount in the cart

  let currentTotal0 = 0; // We declare a variable to store the current amount

  cy.get(".__cost > .cart-cost")
    .each(($element, index) => {
      // We get the text from each element and turn it into a number
      cy.wrap($element)
        .invoke("text")
        .then((text) => {
          const price0 = parseInt(text.replace(/\s/g, "").replace("$", "")); // We convert the price text into an integer, removing spaces
          if (index === 0) {
            // If it is the first element, we simply store its value as the current amount
            currentTotal0 = price0;
          } else {
            // If it is not the first item, we add its price to the current amount
            currentTotal0 += price0;
          }
        });
    })
    .then(() => {
      // After all the elements have been passed, the resulting sum should be equal to the value in the element "cart-footer-b"
      cy.get(".cart-footer-b")
        .invoke("text")
        .then((text) => {
          const totalPrice0 = parseInt(
            text.replace(/\s/g, "").replace("$", "")
          ); // We convert the sum text into an integer, removing spaces
          expect(currentTotal0).to.equal(totalPrice0); // We check whether the amount is equal to the received amount in the basket
        });
    });

  // Removing the product from the cart

  cy.get(".__minus").eq(1).click({ force: true });
  cy.wait(1000);

  // Checking the amount in the cart after removing one product

  let currentTotal1 = 0; 

  cy.get(".__cost > .cart-cost")
    .each(($element, index) => {
      cy.wrap($element)
        .invoke("text")
        .then((text) => {
          const price1 = parseInt(text.replace(/\s/g, "").replace("$", "")); 
          if (index === 0) {
            currentTotal1 = price1;
          } else {
            currentTotal1 += price1;
          }
        });
    })
    .then(() => {
      cy.get(".cart-footer-b")
        .invoke("text")
        .then((text) => {
          const totalPrice1 = parseInt(
            text.replace(/\s/g, "").replace("$", "")
          ); 
          expect(currentTotal1).to.equal(totalPrice1); 
        });
    });
});

/*
  cy.get(".catalog-grid__item").each(($element) => {
    cy.wrap($element).then(($item) => {
      if ($item.find(".productSticker-item.__new").length > 0) {
        cy.wrap($item).find(".btn-content").click();
      }
    });
    cy.get("body").click("topLeft");
  });
  */
