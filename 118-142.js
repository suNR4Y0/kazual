////////118.1
let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}

/////////////118.2
let test = true;

if (test === false) {
	console.log('+++');
} else {
	console.log('---');
}

//////////119.1
false, null, undefined, NaN, пустая строка и 0

/////////////120
let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}   

//////////121.1
let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}
////////////121.2

let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

///////////////121.3

let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}

////////123.1

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

////////123.2

let test1 = true;
let test2 = true;

if (test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
}

////////123.3

let test1 = true;
let test2 = true;

if (!test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
} 

////////123.4

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

////////123.5

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 && test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

////////123.6

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

////////123.7

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || !test2 && !test3) {
	console.log('+++');
} else {
	console.log('---');
}

//124 Проверьте, что переменная test равна 10, то пусть на экран выведется 'yes'. В противном случае пусть ничего не произойдет.

let test = 1;

if (test == 10) {
	console.log('yes');
}

////////////125.1


if (test > 0) 
	console.log('+++');
 else 
	console.log('---');

////////////125.2

if (test > 0) console.log('+++');

//////////////////127.1


let day = 15;

if (day <=10 && day >0) {
	console.log('Первая декада');
} else if (day > 10 && day <=20) {
	console.log('Вторая декада');
} else if (day > 20 && day <= 31) {
	console.log('Третья декада');
}

//////////////////127.2

let day = 15;

if (day <=10 && day >0) {
	console.log('Первая декада');
} else if (day > 10 && day <=20) {
	console.log('Вторая декада');
} else if (day > 20 && day <= 31) {
	console.log('Третья декада');
} else 
    console.log('Ошибка');

//////////////////128.1

let num = 16;
let str = String(num);
let sum = 0

if (num >=10 && num <=99) {
    for (let digit of str){
        sum += +digit;
    }
	if (sum <=9) {
		console.log(sum, 'сумма цифр однозначна');
	} else {
		console.log(sum, 'сумма цифр двухзначная');
	}
} else {
	console.log('это не число');
}

//////////////////129.1

let lang = 'ru';

switch (lang){
  case 'ru':
	  console.log('рус');
  break;
  case 'en':
	  console.log('анг');
  break;
  case 'de':
	  console.log('нем');
  break;
  default:
	  console.log('язык не поддерживается');
  break;
}

////////////////131


let num = 1;
let res = num >= 0 ? 1: 2;
console.log(res);

//////////////////132.1

let a = 2 * (3 - 1);
let b = 6 - 2;
let result = a == b;
console.log(result)


//////////////////132.2

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
let result = a > b;
console.log(result);


//////////////////132.3

let a = 2 ** 4;
let b = 4 ** 2;
let result = a != b;
console.log(result);

///////////////133

let ok = confirm('Вам есть 18?');

if (ok) {
	alert('Для взрослых');
} else {
	alert('Доступ пользователю запрещён');
}

///////////////////134

let age = 17;

if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}
console.log(adult);

////////////////////////135.1

let age = 17;
let adult;

if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}

console.log(adult);

////////////////////////135.2

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
    adult = false;
}

console.log(adult);

////////////////////////135.3

let age = 17;
let res;

if (age >= 18) {
	if (age <= 23) {
		 res = 'от 18 до 23';
	} else {
		 res = 'больше 23';
	}
} else {
	 res = 'меньше 18';
}

console.log(res);

////////////////////////135.4

let age = 19;
let res;

if (age >= 18) {

	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);

/////////////////////136

let min = 10;

if (min >= 0 && min <= 20) {
	console.log('1 четверть');
}

if (min >= 21 && min <= 40) {
	console.log('2 четверть');
}

if (min >= 41 && min <= 60) {
	console.log('3 четверть');
}

///////////////////////////137

let arr = [1,2,3];
if (arr.length == 3) {
     res = arr.reduce(function(sum,elem){
        return sum + elem;
    }, 0);
	console.log(res);
}

//////////////////////138.1

let str = 'a2345';

if (str[0] == 'a') {
	console.log('!');
}

//////////////////////138.2

let str = '1234x';
let last = str[str.length - 1];

if (last == 'x') {
	console.log('!');
}

//////////////////////138.3

let str = 'a2345';

if (str[0] == 'a' || str[0] == 'b') {
	console.log('!');
}

////////////////////////139.1

let num = 12340
let str = String(num);
let last =str[str.length - 1];

if (last == 0) {
	console.log('+++');
} else {
	console.log('---');
}

////////////////////////139.2
let num = 12340
let str = String(num);
let last =str[str.length - 1];

if (last % 2 == 0) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////140.1

let a = 10;

if (a % 2 === 0) {
	console.log('Четное');
} else {
	console.log('Нечетное');
}

//////////////////////140.2

let a = 12;

if (a % 3 === 0) {
	console.log('Делится');
} else {
	console.log('Не делится');
}

//////////////////////////////////141.2

let num1 = '1';
let num2 = '2';
if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.3

let num1 = '1';
let num2 = '2';
if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.4

let num = [1,2,3];

if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.5

let num = 123;

if (String(num)[0] === '1') {
  console.log('+++');
} else {
  console.log('---');
}

//////////////////////////////////141.6

let num = 123;

if (String(num)[0] === '1') {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.7

let num = 123;
let first = String(num)[0];
if (first === '1') {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.8

let num = 12;

if (String(num).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

//////////////////////////////////141.9

let num = 12;
let str = String(num);
if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.10

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.11

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.12

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////////141.13

let num = '123033'; 
let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
if (sum1 === sum2) {
  console.log('суммы равны');
} else {
  console.log('суммы не равны');
}

/////////////////////////////142.1

let month = 6;

if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Лето");
} else if (month >= 9 && month <= 11) {
  console.log("Осень");
} else if (month >= 1 && month < 3 || month == 12){
  console.log("Зима");
}

/////////////////////////////142.2

let str = 'abcde';

if (str[0] === 'a') {
  console.log('да');
} else {
  console.log('нет');
}

//////////////////////////////142.3

let str = 12345;

if (String(str)[0] == '1' || String(str)[0] == '2' || String(str)[0] == '3') {
	console.log('Да');
}
else{
    console.log('Нет')
}

/////////////////////////////142.4

let number = 123;
let sum = 0;

while (number > 0) {
  sum += number % 10; 
  number = Math.floor(number / 10); 
}

console.log(sum);

/////////////////////////////142.5

let num = 123033;
let val= String(num);
let sum1 = Number(val[0]) + Number(val[1]) + Number(val[2]);
let sum2 = Number(val[3]) + Number(val[4]) + Number(val[5]);
if (sum1 === sum2) {
  console.log('суммы равны');
} else {
  console.log('суммы не равны');
}
