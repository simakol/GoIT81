// class Blogger {
//   static sayHello() {
//     console.log("Hi there");
//   }

//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   greeting() {
//     console.log(`Hi, my name is ${this.#name}`);
//   }
// }

// const a = {
//   value: 3,
//   getValue() {
//     console.log(this.value);
//   },
// };

// const Blogger = new Blogger("Oleg");

// console.log(Blogger);

// Blogger.greeting();

// Blogger.sayHello();

// const arr = [1, 2, 3];

// console.log(arr.__proto__);
// // [[Prototype]]
// console.log(arr.prototype);
// console.log(Array.prototype);

// Array.prototype.myMethod = () => {
//   console.log("This is my custom method");
// };

// arr.myMethod()

// console.log(arr.toString());

// console.dir(Array);
// console.dir(Object);

//! ==========================

//* Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

//* email - пошта, рядок
//* age - вік, число
//* numberOfPosts - кількість постів, число
//* topics - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: Blogger ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

//! ==========================
//* Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

//* getItems() - повертає масив товарів.
//* addItem(item) - отримує новий товар і додає його до поточних.
//* removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     const index = this.items.indexOf(item);
//     this.items.splice(index, 1);
//     // this.items.splice(this.items.indexOf(item), 1);
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍑");
// console.table(storage.items); // [ '🍎', '🍇', '🍌' ]

//! ==========================

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     if (newLogin.trim() !== "") this.#login = newLogin;
//     else console.log("Your login not correct");
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// // "    sss     " -> .trim() -> "sss"
// // "    s s s     " -> .trim() -> "s s s"

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });
// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// mango.login = "       ";
// console.log(mango.login); // Mangodoge
// console.log(mango.email);
// mango.email = "mango@gmail.com";
// console.log(mango.email);

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

//! ==========================

//* Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items = this.items.filter((note) => note.text !== text);
//   }
//   updatePriority(text, newPriority) {
//     const note = this.items.find((note) => note.text === text);
//     if (note) note.priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
// myNotes.updatePriority("sldjfsldkfj", Notes.Priority.HIGH);
// console.log(myNotes.items);

//! ==========================

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

//! ==========================

// class User {
//   static Roles = {
//     admin: "admin",
//   };

//   constructor(name) {
//     this.name = name;
//   }
// }

// const user = new User("Olga");

// console.log(user.name);
// console.log(User.Roles);

//! ==========================

// const objA = {
//   a: "a",
// };

// const objB = Object.create(objA);
// objB.b = "b";

// console.log(objB);
// console.log(objB.a);

//! ==========================
