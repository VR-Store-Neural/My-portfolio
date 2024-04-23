/// <reference types="cypress" />

it("delete a product from basket", () => {
  cy.visit("https://vr-store.com.ua/");
  cy.viewport(1920, 1080);

  // Вибір мови сайту

  cy.get(".lang-menu__item.is-active .lang-menu__link").then(($element) => {
    if (!$element.text().includes("Укр")) {
      cy.contains("Укр").click({ force: true });
    } else {
      cy.log("Українську мову вже обрано.");
    }
  });

  // Пошук товару

  cy.get(".search__input").type("playstation");
  cy.get(".search__button").click();

  // Додавання товарів у кошик

  let addedProducts = 0; // Змінна для відстеження кількості доданих товарів

  cy.get(".catalog-grid__item").each(($element) => {
    cy.wrap($element).then(($item) => {
      if ($item.find(".productSticker-item.__new").length > 0) {
        if (addedProducts < 3) {
          // Перевіряємо, щоб не додати більше трьох товарів
          cy.wrap($item).find(".btn-content").click(); // Клікаємо на кнопку "Купити"
          cy.get("body").click("topLeft").wait(1000);
          addedProducts++; // Збільшуємо лічильник доданих товарів
        } else {
          return false; // Завершуємо цикл, якщо додано три товари
        }
      }
    });
  });
  cy.get(".basket__link").click({ force: true });

  // Перевірка суми у кошику

  let currentTotal0 = 0; // Оголошуємо змінну для зберігання поточної суми

  cy.get(".__cost > .cart-cost")
    .each(($element, index) => {
      // Отримуємо текст з кожного елемента і перетворюємо його в число
      cy.wrap($element)
        .invoke("text")
        .then((text) => {
          const price0 = parseInt(text.replace(/\s/g, "").replace("$", "")); // Перетворюємо текст ціни в ціле число, вилучаючи пробіли
          if (index === 0) {
            // Якщо це перший елемент, просто зберігаємо його значення як поточну суму
            currentTotal0 = price0;
          } else {
            // Якщо це не перший елемент, додаємо його ціну до поточної суми
            currentTotal0 += price0;
          }
        });
    })
    .then(() => {
      // Після того як пройшли всі елементи, отримана сума повинна дорівнювати значенню в елементі "cart-footer-b"
      cy.get(".cart-footer-b")
        .invoke("text")
        .then((text) => {
          const totalPrice0 = parseInt(
            text.replace(/\s/g, "").replace("$", "")
          ); // Перетворюємо текст суми в ціле число, вилучаючи пробіли
          expect(currentTotal0).to.equal(totalPrice0); // Перевіряємо, чи дорівнює сума отриманій сумі в корзині
        });
    });

  // Видалення товару з кошику

  cy.get(".__minus").eq(1).click({ force: true });
  cy.wait(1000);

  // Перевірка суми у кошику після видалення одного товару

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
