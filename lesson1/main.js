// - Створити змінні. Присвоїти кожному з них значення: 'hello','world', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello'
console.log(hello)

let world = 'world'
console.log(world)

let num1 = 1
console.log(num1)

let num10 = 10
console.log(num10)

let num999 = 999
console.log(num999)

let num123 = 123
console.log(num123)

let PI = 3.14
console.log(PI)

let  boolean1 = true
console.log(boolean1)

let boolean2 = false
console.log(boolean2)



// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Ruslan'
let middleName = 'Ihorovich'
let lastName = 'Kondra'

let FML = `${firstName}+${middleName}+${lastName}`
console.log(FML);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName2 = prompt("Введіть ваше ім'я:");
let middleName2 = prompt("Введіть ваше по-батькові:");
let age = prompt("Введіть ваш вік:");

console.log(`Мене звати ${firstName2} ${middleName2} і мені ${age} років.`);
