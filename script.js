//! setTimeout
// console.log("Запит надіслано...");

// setTimeout(() => {
//   console.log("Підготовка даних...");
//   const user = {
//     name: "Oleg",
//     age: 30,
//     isAdmin: false,
//   };
//   setTimeout(() => {
//     user.isAdmin = true;
//     console.log("Дані отримано");
//     console.log(user);
//   }, 2000);
// }, 2000);

//! Promise

// console.log("Запит надіслано...");

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Підготовка даних...");
//     const user = {
//       id: 0,
//       name: "Oleg",
//       age: 30,
//       isAdmin: false,
//     };
//     if (user.id === undefined) rej("No id!");
//     res(user);
//   }, 2000);
// });

// promise
//   .then((user) => {
//     // setTimeout(() => {
//     //   user.isAdmin = true;
//     //   console.log("Дані отримано");
//     //   console.log(user);
//     // }, 2000);

//     // return new Promise((res) => {
//     //   user.isAdmin = true;
//     //   res(user);
//     // });

//     user.isAdmin = true;
//     return user;
//   })
//   .then((user) => {
//     console.log("Дані отримано");
//     console.log(user);
//   })
//   .catch((err) => console.error(err))
//   .finally(() => console.log("Кінець запиту"));

//! ============================================

// new Promise((res) => res(10))
//   .then((value) => value * 10)
//   .then((value) => value - 5)
//   .then((value) => {
//     console.log("Підготовка даних");
//     return value;
//   })
//   .then((value) => {
//     console.log("результат: " + value);
//     return value;
//   });

//! ============================================

const sleep = (ms) => new Promise((res) => setTimeout(() => res(ms), ms));
const sleepRej = (ms) =>
  new Promise((res, rej) => setTimeout(() => rej(ms), ms));

// sleep(2000).then(() => console.log("Виконалось після 2 с"));
// sleep(5000).then(() => console.log("Виконалось після 5 с"));

Promise.all([sleep(3000), sleepRej(3500), sleep(5000)])
  .then((data) => {
    console.log("Проміси виконались");
    console.log(data);
  })
  .catch((err) => console.error(err)); //чекає на виконання найдовшого промісу

// Promise.race([sleep(3000), sleep(2999)]).then((data) => {
//   console.log("Найшвидший виконано");
//   console.log(data);
// }); // виконує найшвидший запит
