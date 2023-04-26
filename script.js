// const arr = [5, 10, 16, 20];

// console.log(arr.some(el => el % 5 === 0))
// console.log(arr.every(el => el % 5 === 0))

//! ==============================

// const oddArr = [1, 3, 5, 7, 9, 11, 13, 15];

// for (let i = 0; i < oddArr.length; i += 1) {
//   console.log(`Index: ${i} | El: ${oddArr[i]}`);
// }

// for (let i = oddArr.length - 1; i >= 0; i -= 1) {
//   console.log(`Index: ${i} | El: ${oddArr[i]}`);
// }

// for (const i in oddArr) {
//   console.log(typeof i); //str
//   console.log(`Index: ${i} | El: ${oddArr[i]}`);
// }

// for (const el of oddArr) {
//   console.log(el);
// }

// const user = {
//   name: "Oleg",
//   age: 32,
// };

// for (const key in user) {
//   console.log(`Key: ${key} | Value: ${user[key]}`);
// }

//! ==============================

// this вказує на обʼєкт, який викликає ф-цію

// function boo() {
//   console.log(this);
// }

// boo(); //коли ф-ція викликається без контексту - this вказує на глобальний обʼєкт window (звичайний режим), або на undefined (strict mode)

// const user = {
//   name: "Oleg",
//   age: 32,
//   greeting() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// // контекст надається не при створенні(опису) ф-ції, а при її виклику (крім стрілкових ф-цій)

// user.greeting();

// const user2 = {
//   name: "Alina",
//   age: 29,
//   sayHello: user.greeting,
// };

// user2.sayHello();

// user.greeting.call(user2);

// function foo(callback) {
//   console.log("Inside foo");
//   callback();
// }

// foo(user.greeting.bind(user2));
// // під час передачі ф-ції у якості колбеку - контекст втрачається

// const doo = () => console.log(this);
//doo - запамʼятала під час створення, що її this - це window, і у якому б контексті ми її не викликали, її this не зміниться

// function doo() {
//   console.log(this);
// }

// const user = {
//   name: "Oleg",
//   age: 32,
//   greeting() {
//     console.log(`Hello, my name is ${this.name}`);
//     const foo = () => console.log(this);
//     foo()
//   },
//   goo: doo,
// };

// user.greeting()

// user.goo();

// doo.call(user);

//! ==============================

// spread(розбити, розпилити) і rest(остача) - ...

// const arr = [1, 2, 3];

// console.log(Math.max(...arr));

// const arr1 = [...arr];

// arr1[0] = 5;
// console.log(arr, arr1);

// function sum(...values) {
//   return values.reduce((sum, el) => el + sum, 0);
// }

// console.log(sum(1, 5, 3, 8));
// console.log(sum(1, 5));
// console.log(sum(1, 5, 6, 4, 2, 4, 6, 3));
// console.log(sum(1, 5, 6));

//! ==============================

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = arr.reduce((sum, el) => el + sum, 0);
// console.log(sum);

/*
with initalAcc
reduce(callback, initalAcc)
callback(acc, el, i, arr)

1. arr.reduce((sum = 0, el = 1) => el + sum, 0);
el + sum = 1 + 0 = 1
2. arr.reduce((sum = 1, el = 2) => el + sum, 0);
el + sum = 1 + 2 = 3
3. arr.reduce((sum = 3, el = 3) => el + sum, 0);
el + sum = 3 + 3 = 6

10. arr.reduce((sum = 45, el = 10) => el + sum, 0);
el + sum = 45 + 10 = 55

result: 55
*/

/*
without initalAcc

2. arr.reduce((sum = 1, el = 2) => el + sum); = 3
*/

//! ==============================

// const user = {
//   name: "Diana",
//   age: 38,
//   sex: "female",
// };

// const { name: username, age, sex = "none" } = user;
// // const name = user.name
// // const username = user.name

// console.log(user.name);
// console.log(username);
// console.log(age);
// console.log(sex);

// function userGreeting({ name, age }) {
//   console.log(`Hello, my name is ${name}. I am ${age} years old.`);
// }

// userGreeting(user);
// userGreeting({
//   name: "Vitaliy",
//   age: 15,
// });

// const rgb = [100, 50, 64];
// // const red = rgb[0];
// // const green = rgb[1];
// // const blue = rgb[2];

// const [red, green, blue] = rgb;
// console.log(red, green, blue);

//! ==============================

// function access(age, onSuccess, onReject) {
//   if (age >= 18) onSuccess("Раді вас бачити на нашому сайті");
//   else onReject("На жаль, ми не можемо вас впустити");
// }

// function onSuccess(msg) {
//   console.log(`Успіх! ✅ ${msg}`);
// }
// function onReject(msg) {
//   console.log(`Невдача! ❌ ${msg}`);
// }

// access(15, onSuccess, onReject);
// access(29, onSuccess, onReject);

//! ==============================

// class Rectangle {
//   constructor({ heigth, width }) {
//     this.name = "Rectangle";
//     this.heigth = heigth;
//     this.width = width;
//   }

//   greeting() {
//     console.log(`Hey, I am a ${this.name}`);
//   }

//   calculateArea() {
//     return this.width * this.heigth;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super({ width: length, heigth: length });
//     this.name = "Square";
//   }
// }

// const rectangle = new Rectangle({ width: 10, heigth: 4 });

// rectangle.greeting();

// console.log(rectangle.calculateArea());

// const square = new Square(5);

// square.greeting();

// console.log(square.calculateArea());

// console.log(square);

//! ==============================

// const example = {};
// example.prop = "exists";

// console.log(example);
// // `hasOwnProperty` will only return true for direct properties:
// example.hasOwnProperty("prop"); // true
// example.hasOwnProperty("toString"); // false
// example.hasOwnProperty("hasOwnProperty"); // false

// // The `in` operator will return true for direct or inherited properties:
// "prop" in example; // true
// "toString" in example; // true
// "hasOwnProperty" in example; // true.       Прямі та успадковані властивості"
// console.log("map" in example)

// const example = {
//   value: "hi",
// };

// const example2 = Object.create(example);
// console.log(example);

// console.log(example.hasOwnProperty("value"));
// console.log(Object.hasOwn(example, "value"));
// console.log(Object.hasOwn(example2, "value"));

//! ==============================

// const arr = [1, -2, 3, 4, -5, 6];

// const arr2 = arr.map((el) => el ** 3);

// console.table(arr);
// console.table(arr2);

// const arr3 = arr.map((el) => {
//   return {
//     number: el,
//     isPositive: el > 0,
//   };
// });

// const arr3 = arr.map((el) => ({
//   number: el,
//   isPositive: el > 0,
// }));

// console.log(arr3);

//! ==============================

// Як це працює? знайти суму всіх непарних додатніх чисел до якогось числа.

// function iterativeOddSumTo(number) {
//   /*
//     1. перевірка на коректне значення параметру
//     2. створити змінну накопичувач
//     3. запустити цикл від 1 до number включно
//     4. перевірка чи являється поточне число непарним
//         4.1. додати поточне число до змінної накопичувач
//     5. повернути значення
//  */

//   if (number <= 0) return 0;

//   let sum = 0;

//   //   for (let i = 1; i <= number; i += 1) {
//   //     if (i % 2 !== 0) sum += i;
//   //   }

//   for (let i = 1; i <= number; i += 2) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(iterativeOddSumTo(1)); // 1
// console.log(iterativeOddSumTo(10)); // 25
// console.log(iterativeOddSumTo(-1)); // 0

//! ==============================

// function removeEveryOther(arr) {
//   //     const result = []
//   //     for(let i = 0; i< arr.length; i+=2){
//   //       result.push(arr[i])
//   //     }
//   //   return result
//   return arr.reduce((result, el, i) => {
//     if (i % 2 === 0 || i === 0) result.push(el);
//     return result;
//   }, []);
// }

//! ==============================
