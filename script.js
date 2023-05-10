/*
html

 <div>
        DIV
        <p>
            P
            <span>
                SPAN
            </span>
        </p>
    </div>

*/

// const allElements = document.querySelectorAll("*");

// document.querySelector("span").addEventListener("click", (event) => {
//   // event.stopPropagation();
//   event.stopImmediatePropagation();
// });
// document.querySelector("span").addEventListener("click", () => {
//   console.log("second listener");
// });

// for (const el of allElements) {
//   el.addEventListener("click", () => alert(`Занурення: ${el.tagName}`), true);
//   el.addEventListener("click", () => alert(`Сплиття: ${el.tagName}`));
// }
// el.addEventListener("click", () => {}, useCapture = true/false);
/* el.addEventListener("click", () => {}, {
  capture: true - занурення, false - сплиття,
  once: true - подія спрацює тільки один раз, false - подія відпрацює до тих пір, поки ми не знімемо обробник,
  passive: true - забороняємо використовувати event.preventDefault(), false - можна
});
*/

// document.body.addEventListener("click", (event) => {
//   console.log(event.target);
// });

//! ====================================

// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делагування.

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

/*
мікрозадача 1: зміна кількості кілограм під час зміни повзунка

1. отримати refs
2. повісити обробник подій на форму по події input
3. за допомогою таргету визначимо інпут для кількості мʼяса
4. зчитуємо велью інпуту і записуємо його у спан з кількістю кг

*/

/*
мікрозадача 2: отримати значення ціни за кг і вирахувати фінальну вартість

1. створення обʼєкту який буде зберігати значення полів та реалізує метод розрахунку фінальної вартості
2. заповнити поля обʼєкту значеннями з інпутів
3. вивести результат розрахунку на екран
*/

const refs = {
  form: document.getElementById("form"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
  price: document.getElementById("price"),
  quantity: document.getElementById("quantity"),
};

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return Number((this.price * this.quantity).toFixed(2));
  },
};

dataFill();
displayTotal();
updateAmount();

refs.form.addEventListener("input", handleFormInput);

function handleFormInput({ target }) {
  if (target.name === "quantity") updateAmount();

  target.setAttribute("value", target.value);
  dataFill();
  displayTotal();
}

function dataFill() {
  data.price = Number(refs.price.value);
  data.quantity = Number(refs.quantity.value);
}

function displayTotal() {
  const totalPrice = data.calcTotalPrice();
  refs.total.textContent =
    (Number.isInteger(totalPrice) ? `${totalPrice}.00` : totalPrice) + " грн";
}

function updateAmount() {
  refs.amount.textContent = quantity.value;
}
