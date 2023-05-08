/*
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
*/

/*
  1. отримати всі посилання на дом елементи (refs)
  2. повісити обробник подій по кліку на кнопку
    2.1. додаємо клас open на body
  3. повісити обробники подій по кліку на кнопку close і на overlay
    3.1. прибрати клас open у тегу body
  4. повісити обробник подій по натисканню клавіш (keydown) на window
    4.1. перевірка на клавішу esc, якщо натиснули на неї - прибираємо клас open
*/

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const classes = {
//   open: "open",
// };

// refs.openModalBtn.addEventListener("click", openModal);
// refs.overlay.addEventListener("click", closeModal);
// refs.modalCloseBtn.addEventListener("click", closeModal);

// function openModal() {
//   document.body.classList.add(classes.open);
//   window.addEventListener("keydown", closeModalOnESC);
// }

// function closeModal() {
//   document.body.classList.remove(classes.open);
//   window.removeEventListener("keydown", closeModalOnESC);
// }

// function closeModalOnESC(event) {
//   console.log(`key: ${event.key} | code: ${event.code}`);
//   if (event.code === "Escape") closeModal();
// }

//! 2 спосіб

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const classes = {
//   open: "open",
// };

// refs.openModalBtn.addEventListener("click", toggleModal);
// refs.overlay.addEventListener("click", toggleModal);
// refs.modalCloseBtn.addEventListener("click", toggleModal);

// function toggleModal() {
//   document.body.classList.toggle(classes.open);
//   if (document.body.classList.contains(classes.open))
//     window.addEventListener("keydown", closeModalOnESC);
//   else window.removeEventListener("keydown", closeModalOnESC);
// }

// function closeModalOnESC(event) {
//   console.log(`key: ${event.key} | code: ${event.code}`);
//   if (event.code === "Escape") toggleModal();
// }

//! =======================================

// const mainForm = document.getElementById("mainForm");
// const { username, pass } = mainForm.elements;

// console.dir(mainForm.elements);

// mainForm.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(username.value);
//   console.log(pass.value);

//   if (username.value.trim() === "" || pass.value.trim() === "") {
//     mainForm.classList.add("wrong");
//   } else {
//     mainForm.classList.remove("wrong");
//     alert("Data sent!");
//     mainForm.reset();
//   }
// }

//! =======================================

// const mainForm = document.getElementById("mainForm");
// const { username, pass } = mainForm.elements;

// username.addEventListener("input", handleInput);
// pass.addEventListener("change", handleChange);

// function handleInput(event) {
//   console.log(event.target.value);
//   const valueLength = event.target.value.length;
//   if (valueLength <= 3 || valueLength >= 10) {
//     console.log("некоректний розмір тексту");
//   } else {
//     console.log("все окей");
//   }
// }

// function handleChange(event) {
//   console.log(event.target.value);
// }

const lang = document.getElementById("lang");

lang.addEventListener("change", handleLangSwitch);

function handleLangSwitch(event) {
  console.log(this);
  console.log(event.target);
  console.log(event.target.value);

}

//! =======================================
