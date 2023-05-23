// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = []

arr[0] = 1
arr[4] = 5
arr[9] = 10

// console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title: "titleName",
    pageCount: "pageCountName",
    genre: "genreName"
}

// console.log(book);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let books= [
    {
    title: "titleName1",
    pageCount: "pageCountName1",
    genre: "genreName1",
    author: {
        name: "Artur",
        age: 18
    }
},
    {
    title: "titleName2",
    pageCount: "pageCountName2",
    genre: "genreName2",
    author: {
        name: "Alex",
        age: 43
    }
    },
    {
    title: "titleName3",
    pageCount: "pageCountName3",
    genre: "genreName3",
    author: {
        name: "Olga",
        age: 24
    }
    },

]

// console.log(books);


// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: "name1",
        username: "username1",
        password: "password1"
},
    {
        name: "name2",
        username: "username2",
        password: "password2"
    },
    {
        name: "name3",
        username: "username3",
        password: "password3"
    },
    {
        name: "name4",
        username: "username4",
        password: "password4"
    },
    {
        name: "name5",
        username: "username5",
        password: "password5"
    },
    {
        name: "name6",
        username: "username6",
        password: "password6"
    },
    {
        name: "name7",
        username: "username7",
        password: "password7"
    },
    {
        name: "name8",
        username: "username8",
        password: "password8"
    },

    {
        name: "name9",
        username: "username9",
        password: "password9"
    },
    {
        name: "name10",
        username: "username10",
        password: "password10"
    },
]

// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = 1
// if (a!==0)
// {console.log("Вірно!")}
// else
// {console.log("Невірно!")}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 15

// if (time>0 && time<=15)
// {console.log("Перша чверть!")}
//
// else if (time>=16 && time<=29)
// {console.log("Друга чверть!")}
//
// else if (time>=30 && time<=44)
// {console.log("Третя чверть!")}
//
// else if (time>=45 && time<=60)
// {console.log("Четверта чверть!")}
//
// else {console.log("???");}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

// let dayNumber = +prompt("Яке сьогодні число?")
//
// if (dayNumber>=1 && dayNumber<=10)
// {console.log("Перша декада!")}
//
// else if (dayNumber>=11 && dayNumber<=19)
// {console.log("Друга декада!!")}
//
// else if (dayNumber>=19 && dayNumber<=31)
// {console.log("Третя декада!!")}
//
// else {console.log("Error");}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let dayNumber = +prompt("Який сьогодні день?")
//
// switch (dayNumber) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("???");
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х я
//         вляється false (хибноподібні, тобто приводиться до false)

// let x = prompt() || 'default';
// console.log(x);
