// console.log(_.add(6, 4));

//* scroll throttle

// const refs = {
//   otuputScrollStandart: document.getElementById("otuputScrollStandart"),
//   otuputScrollThrottled: document.getElementById("otuputScrollThrottled"),
// };

// const eventScrollCounter = {
//   standart: 0,
//   throttled: 0,
// };

// window.addEventListener("scroll", () => {
//   eventScrollCounter.standart += 1;
//   refs.otuputScrollStandart.textContent = eventScrollCounter.standart;
// });

// window.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventScrollCounter.throttled += 1;
//     refs.otuputScrollThrottled.textContent = eventScrollCounter.throttled;
//   }, 500)
// );

//* resize throttle

// const refs = {
//   otuputResizeStandart: document.getElementById("otuputResizeStandart"),
//   otuputResizeThrottled: document.getElementById("otuputResizeThrottled"),
// };

// const eventResizeCounter = {
//   standart: 0,
//   throttled: 0,
// };

// window.addEventListener("resize", () => {
//   eventResizeCounter.standart += 1;
//   refs.otuputResizeStandart.textContent = eventResizeCounter.standart;
// });

// window.addEventListener(
//   "resize",
//   _.throttle(() => {
//     eventResizeCounter.throttled += 1;
//     refs.otuputResizeThrottled.textContent = eventResizeCounter.throttled;
//   }, 500)
// );

//! ====================================

// document.getElementById("nameInput").addEventListener("input", (event) => {
//   console.log(event.currentTarget); //посилання на дом елемент, на якому висить обробник подій
//   console.log(event.target); // посилання на дом елемент, на якому спрацювала подія (елемент, який викликає подію)

//   console.log(event.target.value);
// });

// document.getElementById("nameInput").addEventListener(
//   "input",
//   _.debounce(
//     (event) => {
//       console.log(event.target.value);
//     },
//     1000,
//     {
//       trailing: true,
//       leading: true,
//     }
//   )
// );

//! ====================================

/*
1. визначити ліміти довжини символів для кожного поля вводу
2. отримаємо посилання на дом елементи
3. повісимо слухач подій на форму на подію input
4. порівняння фактичної довжини строки з дата атрибутами
  4.1. якщо не попадаємо у діапазон - вішаємо на елемент клас wrong
  4.2. якщо все гуд - вішаємо на елемент клас correct
*/

// const refs = {
//   signInForm: document.getElementById("signInForm"),
// };

// const classes = {
//   correct: "correct",
//   wrong: "wrong",
// };

// refs.signInForm.addEventListener("input", _.debounce(handleInput, 500));

// function handleInput({ target }) {
//   const valueLength = target.value.length;
//   console.log(target.dataset);
//   if (
//     valueLength < target.dataset.minLength ||
//     valueLength > target.dataset.maxLength
//   ) {
//     target.classList.remove(classes.correct);
//     target.classList.add(classes.wrong);
//   } else {
//     target.classList.remove(classes.wrong);
//     target.classList.add(classes.correct);
//   }
// }

//! ====================================

// document.body.addEventListener("click", handleClick);

// function handleClick(event) {
//   console.log(event.target); // елемент, який викликає подію (на який ми клікнули)
//   console.log(event.currentTarget); // елемент, на якому висить слухач подій
//   // event.target.style.backgroundColor = "blue";
// }

// window.addEventListener("keydown", handleKeyboard)

// function handleKeyboard(event){
//   console.log(event)
// }

//! ====================================
