// -- OBJECTS --
console.log('\n-- OBJECTS --');

const developer = {
    // key: value,
    name: 'Vasiliy',
    surname: 'Petrov',
    age: 30,
    skills: ['JavaScript', 'TypeScript', 'CSS'],
    isMaried: false,
    'is maried': false,
};

developer.isMaried = true;

console.log(developer.name);
console.log(developer.skills);
console.log(developer.isMaried);

// не кроссбраузерный оператор delete; лучше не использовать
delete developer.isMaried;

console.log(developer.isMaried);
console.log(developer['is maried']);
console.log(developer['name']);


// -- ПЕРЕДАЧА (СОХРАНЕНИЕ) ПО ССЫЛКЕ --
// ДЛЯ ОБЪЕКТОВ, МАССИВОВ, ФУНКЦИЙ И ТД.
console.log('\n-- ПЕРЕДАЧА (СОХРАНЕНИЕ) ПО ССЫЛКЕ --');

const Petr = {
    age: 23,
    hobby: 'fishing',
};

const Ivan = Petr;
console.log(Ivan);
Ivan.skills = ['PC gaming'];
console.log(Ivan);
console.log(Petr);

// Обращаемся в одну и ту же область памяти,
// которая просто имеет разные названия
Ivan.hobby = 'Video games';
console.log(Petr);

const numbers1 = [1, 2, 3];
const numbers2 = numbers1;
console.log(numbers2);
numbers2.push(4);
console.log(numbers2);
console.log(numbers1);
numbers1.pop();
console.log(numbers2);


// -- ОПЕРАТОР IN --
console.log('\n-- ОПЕРАТОР IN --');

console.log('name' in developer);
console.log('fullname' in developer);


// -- ЦИКЛ FOR IN ДЛЯ ОБЪЕКТОВ (появился в стандарте ES6 в 2015 году) --
console.log('\n-- ЦИКЛ FOR IN --');

for (let prop in developer) {
    console.log(prop, developer[prop]);
}


// -- ЦИКЛ FOR OF (появился в стандарте ES6 в 2015 году) --
console.log('\n-- ЦИКЛ FOR OF --');

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}


// -- METHODS --
console.log('\n-- METHODS --');

const developer0 = {
    name: 'Vasiliy',
    surname: 'Petrov',
    age: 30,
    skills: ['JavaScript', 'TypeScript', 'CSS'],
    isMaried: false,
    addAge: function() {
        developer0.age++;
        console.log(this);
    }
};

developer0.addAge();

const developer1 = {
    name: 'Vasiliy',
    surname: 'Petrov',
    age: 30,
    skills: ['JavaScript', 'TypeScript', 'CSS'],
    isMaried: false,
    addAge() {
        this.age++;
        console.log(this);
    },
    getMarried() {
        this.isMaried = true;
    },
    getDivorced() {
        this.isMaried = false;
    },
};

developer1.addAge();

// __proto__
// developer1;

console.log(developer1.hasOwnProperty('name'));
console.log(developer1.hasOwnProperty('fullname'));


// -- STRING METHODS --
console.log('\n-- STRING METHODS --');

const str = 'Hello world';
console.log(str);

// запускать в консоли браузера
console.log(str.__proto__);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.includes('world', str));
console.log(str.indexOf('world'));
console.log(str.indexOf('js'));

// chaining
console.log(str.toLowerCase().includes('hello'));

console.log(str.slice(0, 5));
console.log(str.slice(6, 9));
console.log(str.slice(6));

console.log(str.split(' ').join(' | '));

const hello = '    Hello    ';
console.log(hello.trim());
console.log(hello.trimEnd());
console.log(hello.trimStart());


// -- NUMBER METHODS --
console.log('\n-- NUMBER METHODS --');

const num = 1180000.15555;
// для чисел не можем использовать методы напрямую
// для строк:
console.log('aaaa'.toUpperCase());
// для чисел так не работает; нужно создавать переменную

console.log(num.toFixed());
console.log(num.toFixed(2));

console.log(num.toLocaleString());
console.log(num.toLocaleString('ru-RU'));
console.log(num.toLocaleString('de-DE'));
console.log(num.toLocaleString('ar-EG'));
console.log(num.toLocaleString('en-IN'));
console.log(num.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'}));


// -- ARRAY METHODS --
console.log('\n-- ARRAY METHODS --');

const numbers0 = [1, 2, 3, 4];

// pop, push
// shift, unshift

console.log(numbers0.includes(4));
console.log(numbers0.indexOf(2));
console.log(numbers0.indexOf(9));

console.log(numbers0.slice(0, 2));

const nums2 = numbers0.concat([30, 40, 50]);
console.log(nums2);
console.log(numbers0);

console.log(numbers0.join(', '));


// -- ERRORS --
console.log('\n-- ERRORS --');

// ReferenceError: x
// TypeError: x()

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('В функцию не переданы числа для сложения');
    }
    return a + b;
}

try {
    sum();
    console.log('not seen');
} catch(err) {
    console.error(err.message);
    console.error(err);
}
console.log('end');

// отдельный случай: логическая ошибка - когда код работает некорректно


// -- REGULAR EXPRESSIONS --
console.log('\n-- REGULAR EXPRESSIONS --');

const regex1 = /\w+/;
const regex2 = new RegExp('\\w+');

const strNew = 'JavaScript is cool language. Everybody should learn JavaScript.';
console.log(/JavaScript/.test(strNew));
console.log(/javascript/.test(strNew));
console.log(/javascript/i.test(strNew)); // без учёта регистра

console.log(strNew.replace(/javascript/i, 'php'));
console.log(strNew.replace(/javascript/ig, 'php')); // заменяет все вхождения

console.log(strNew.match(/javascript/i));
console.log(strNew.match(/javascript/ig));
console.log(strNew.match(/js/ig));

// RegExp используются, например, для проверки формата почты или номера телефона

function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

console.log(validateEmail('aaa'));
console.log(validateEmail('yandex@yandex.ru'));
