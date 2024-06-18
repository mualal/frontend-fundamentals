console.log('Hello from app.js');


// -- ТИПЫ ДАННЫХ В JAVASCRIPT --
console.log('\n-- ТИПЫ ДАННЫХ В JAVASCRIPT --');

undefined;
null;
console.log(typeof undefined);
console.log(typeof null);

// boolean
true;
false;

// string - строка
'Hello world!';
"Hi there";
`Hello again`;
"I'm ...";
console.log(typeof 'www');

// symbol
Symbol(01);

// number - число; BigInt - объект
18;
3.14;
2.71828;
NaN;
console.log(typeof NaN);

// Object - объектный тип
// объект
// массив
// функции
// ошибка


// -- ПЕРЕМЕННЫЕ В ЯЗЫКЕ ПРОГРАММИРОВАНИЯ --
console.log('\n-- ПЕРЕМЕННЫЕ В ЯЗЫКЕ ПРОГРАММИРОВАНИЯ --');

console.log(1000 * 5 + 99 - 6);

// Константа (не планируем менять)
const a = 1000 * 5 + 99 - 6;
console.log(a);
const firstName = 'John';
const lastName = 'Doe';

// Не константа (планируем менять)
let age = 33;
age = 34;
age = 35;

// Использование
const b = a + 100;
console.log(a, b);

// директива var ранее существовала и до сих пор существует (похожа на let)
// в современных приложениях практически не используют var
var z = 10;

const isAdult = true; // camelCase

// имя не может начинаться с цифры
const _$aBc10 = 'Use';


// -- МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ --
console.log('\n-- МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ --');

// бинарные: -, +, *, /, %, **
10 % 4;
10 ** 4;

// унарные: -, +
-1;
-0;
+0;
0;
+"2"; // будет обычная двойка 2
+"2 check"; // будет NaN

// конкатенация +
"Hello " + "world"; // "Hello world"
2 + "2"; // "22"

// инкремент, декремент
// --, ++
// x++ === (x = x + 1)
// ++x === (x = x + 1)
let x = 1;
console.log(x++); // 1
console.log(++x); // 3
x = 3; // инструкция (не может быть частью другого выражения)
x++; // выражение (может быть частью другого выражения)

// x-- === (x = x - 1)

// +=, -=, *=, /=
// x += 4 === (x = x + 4)
// x *= 2 === (x = x * 2)


// -- ЛОГИЧЕСКИЕ ВЫРАЖЕНИЯ --
console.log('\n-- ЛОГИЧЕСКИЕ ВЫРАЖЕНИЯ --');

// >, <, >=, <=, !=, ==

console.log('is 5 > 2', 5 > 2);
console.log('is 5 < 2', 5 < 2);

console.log('is equal: 5 and 5', 5 == 5);
console.log('is equal: 5 and 4', 5 == 4);

console.log('is equal: 5 and "5"', 5 == '5');
console.log('is equal: 5 and "5"', 5 === '5');

console.log('is not equal: 10 and 8', 10 != 8);
console.log('is not equal: 10 and "10"', 10 !== "10");

// составные логические выражения
// И - && (true - когда оба выражения истинны)
1 === 1 && 2 === 2; // true
1 === 1 && 2 === '2'; // false
1 === 1 && 2 === 2 && 3 === 3 && 4 === "4"; // false
// ИЛИ - || (true - когда хотя бы одно выражение истинно)
1 === 2 || 2 === 2; // true
1 === 2 || 2 === 3; // false
1 === 2 || 2 === 3 || 4 === 4; // true
// сочетание И, ИЛИ
1 === 2 || 2 === 3 && 4 === 4; // false
2 === 2 || 2 === 3 && 4 === 4; // true


// -- УСЛОВНЫЙ ОПЕРАТОР --
console.log('\n-- УСЛОВНЫЙ ОПЕРАТОР --');

age = 20;

if (age >= 18) {
    console.log('Access granted')
} else {
    console.log('Access denied')
}

let salary = 2000;

// if (salary < 2500) console.log('I need to improve!');
if (salary > 3000) {
    console.log('It\'s time to relax \n');
} else if (salary > 2500) {
    console.log('Well, good enough. But I can be better.');
} else if (salary >= 2000) {
    console.log('I need to improve');
} else {
    console.log('Not enough!');
}
console.log('End');


// -- ОПЕРАТОР SWITCH --
console.log('\n-- ОПЕРАТОР SWITCH --');

let stat = 'idle';

switch (stat) {
    case 'idle': {
        console.log('Nothing is happening');
        break;
    }
    case 'loading':
        console.log('Data is loading');
        break;
    case 'respond':
        console.log('We have data');
        break;
    case 'error':
        console.log('Something went wrong');
        break;
    default:
        console.log('Error');
}


// -- ТЕРНАРНЫЙ ОПЕРАТОР --
console.log('\n-- ТЕРНАРНЫЙ ОПЕРАТОР --');

// тернарный оператор является выражением (всегда что-то возвращает)
// if и switch являются инструкциями

age = 18;

age >= 18 ? console.log('Access granted') : console.log('Access denied');
console.log(age >= 18 ? 'Access granted' : 'Access denied');
console.log('Access', age >= 18 ? 'granted' : 'denied');

let isAdultPerson = age >= 18 ? true : false;
// let isAdultPerson = age >= 18;

stat = 'loading'

let isLoading = stat === 'loading';

let statNumber = stat === 'idle' ? 0 : 1;
console.log({isLoading});
console.log({statNumber});


// -- ARRAY (BASICS) --
console.log('\n-- ARRAY (BASICS) --');

const numbers = [12, 32, 38, 41, 55];
console.log(numbers);
console.log(numbers[0]);
numbers[0] = 18;
console.log(numbers[0]);
console.log('Length:', numbers.length);

console.log(numbers[numbers.length]);
console.log(numbers[numbers.length - 1]);

const strs = ['abc', 'bcd'];
// strs[2] = 'sd';
// console.log(strs);
// strs[5] = 'new';
// console.log(strs);
strs.push('new item');
strs.push('new item 2');
console.log(strs);
console.log(strs.pop());
console.log(strs);


// -- LOOP (BASICS) --
console.log('\n-- LOOP (BASICS) --');

// while
let index = 0;
const numbersLoop = [1, 2, 54, 88, 92, 100];
while (index < numbersLoop.length) {
    numbersLoop[index] *= 2;
    console.log(numbersLoop[index]);
    index++;
}
console.log('Hello after while', index);

// for (индекс не существует за пределами цикла и не занимает память)
for (let i = 0; i < numbersLoop.length; i++) {
    numbersLoop[i] *= 2;
    console.log(numbersLoop[i]);
}
console.log('Hello after for');


// -- LOOP BREAK --
console.log('\n-- LOOP BREAK --');

inBrowser = typeof(window) != 'undefined';

// для node
var promptf = 0;
if (!(inBrowser)) {
    promptf = require("prompt-sync")({ sigint: true });
}

let tries = 0;
while (true) {
    const age = inBrowser ? +prompt('Сколько Вам лет?') : +promptf('Сколько Вам лет?');
    if (age) {
        if (inBrowser) alert('Welcome');
        console.log('Welcome!');
        break;
    }
    tries++;
    if (tries === 3) {
        // для браузера
        if (inBrowser) alert('Попытки закончились, приходите завтра')
        console.log('Попытки закончились, приходите завтра');
        break;
    }
    // для браузера
    // alert('Данные введены некорректно.');
    console.log('Данные введены некорректно.');
}
console.log('End');


// -- LOOP CONTINUE --
console.log('\n-- LOOP CONTINUE --');

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
console.log('end');
