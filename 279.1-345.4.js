/////////279.1

let arr = [2,4,6];
    let res = arr.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(res);

////////279.2

let arr = ['a', 'b', 'c'];
let res = arr.map(function(elem) {
	return elem + '!';
});
console.log(res);

///////279.3

let arr = ['abc', 'bce', 'cde'];
let res = arr.map(function(elem) {
	return elem.split('').reverse().join('');
});
console.log(res);

///////279.4

let arr = ['123', '456', '789'];
let res = arr.map(function(elem) {
elem.split("");
return arr.push(Number(elem));
});
console.log(res);

///////279.5

let arr = [1,2,3];
let res = arr.map(function(elem, index) {
    return elem * index;
    });
    console.log(res);

////////280.1

let arr = [1,2,3];
let sum = 0;
arr.forEach(function(elem) {
    sum += elem ** 2;
});
    console.log(sum);

///////281.1

let arr = [-1, -3, 1, 2, 3];
let res = arr.filter(elem => {
	return elem >= 0;
});

console.log(res);

/////////281.2

let arr = [-1, -3, 1, 2, 3];
let res = arr.filter(elem => {
	return elem <= 0;
});

console.log(res);

////////281.3

let arr = [-1, -3, 1, 2, 3, 22];
let res = arr.filter(elem => {
	return elem >= 0 & elem <=10;
});

console.log(res);

/////////281.4

let arr = ['skibidi','dop','dop','yesyes'];
let res = arr.filter(elem => {
	return elem.length > 5;
});

console.log(res);

///////////281.5

let arr = [-1, -3, 1, 2, 3, 22];
let res = arr.filter(function(elem, index) {
    return (elem * index) < 30;
    });
    console.log(res);

////////////281.6

let arr = [1, 2, [3, 4], 5, [6, 7]];
let filtrate = arr.filter(Array.isArray);
console.log(filtrate)

/////282.1

let arr = [1, 2, 3, 4, 5];
let check = arr.every(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(check);

///////282.2

let arr = [1, 2, 3, 4, 5];
let check = arr.every(function(elem, index) {
	if (elem * index < 30) {
		return true;
	} else {
		return false;
	}
});
console.log(check);

/////////283.1

let arr = [2, 4, 6, 8];
let result = arr.some(elem => elem > 0);
console.log(result);

////////283.2

let arr = [2, 4, 6, 8];
let result = arr.some(function(elem, index) {
	return elem * index > 30;
});
console.log(result);

////////286.1

let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));

///////288.1

let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);
console.log(min)

//////293.1

function func(...nums) {
	console.log(nums);
}
func(1, 2, 3);
function func(...nums) {
	let sum = 0;
	for (let num of nums) {
		sum += num;
	}
	
	return sum / nums.length;
}
let result = func(1, 2, 3);
console.log(result);

//////296.1

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 

let [Name, surname, department, position, salary] = arr;
console.log(surname);

//////297.1

function func() {
	return ['John', 'Smit', 'development', 
		'programmer', 2000]; 
}

let arr = func();
let [Name, surname, department, position, salary] = func();
console.log(surname);

///////298.1

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 
let [,,department,position] = arr;
console.log(position);

///////300.1

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 
let [name, surname, ...info] = arr;
console.log(position);

//////301.1

let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position, date=2000] = arr;
let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}

////////302.1

let arr = [,,];
function funcDay() {
	return (new Date).getDate();
}
function funcMonth() {
	return (new Date).getMonth();
}
function funcYear() {
	return (new Date).getFullYear();
}
let [year = funcYear(), month = funcMonth(), day = funcDay()] = arr;
console.log(year,month,day);

/////////304.1

let options = {
color: 'red',
width: 400,
height: 500,
};
let {color, width, height} = options;
console.log(height);
    
/////////////305.1

let options = {
color: 'red',
width: 400,
height: 500,
};
let {color: c, width: w , height: h} = options
console.log(w);
    
////////////306.1

let options = {
width: 400,
height: 500,
};
let {color = 'black', width, height} = options
console.log(color);
    
//////////////307.1

let options = {
width: 400,
height: 500,
};
let {color:c = 'black', width, height} = options
console.log(c);
    
//////////////309.1

func( ['John', 'Smit', 'development', 'programmer', 2000] );
function func([name, surname, department, position, salary]) {
console.log(department);
console.log(position);
console.log(name);
console.log(surname);
console.log(salary);
}
    
///////////////309.2

func( ['John', 'Smit', 'development', 'programmer', 2000] );
function func([name, surname, ...info]) {
console.log(name);
console.log(surname);
console.log(info);
}
    
/////////////////309.3

func( ['John', 'Smit', 'development'] );
function func([name, surname, department, position = 'джуниор']) {
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
}

/////////////309.4

func('development', ['John', 'Smit'], [2018, 12, 31] );
function func(department, [name, surname], [year, month, day]) {
console.log(department);
console.log(name);
console.log(surname);
console.log(year);
console.log(month);
console.log(day);
}

/////////310.1

function func({color, width, height}) {
console.log(color);
console.log(width);
console.log(height);
}   
func( {color: 'red', width: 400, height: 500} );
    
/////////////310.2

function func({color = 'black', width, height}) {
console.log(color);
console.log(width);
console.log(height);
}  
func( {color: 'red', width: 400, height: 500} );

///////311.1

let date = new Date();
console.log(date.getDate);

////////311.2

let date = new Date();
console.log(date.getMonth);

///////311.3

let date = new Date();
console.log(date.getCurrentYear);

//////////312.1

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
let date = new Date();
console.log(
    (date.getHours()) + ':' + (date.getMinutes()) + ':' + (date.getSeconds()) + ' ' +
    addZero(date.getDate()) + '-' +
	addZero(date.getMonth() + 1) + '-' +
	addZero(date.getFullYear()) 
);


/////////313.1

let str = '2025-12-31';
let res = str.split('-').reverse().join('.');

console.log(res);

///////314.1

let date = new Date();
console.log(date.getDay());

//////////314.2

let date = new Date();
today = date.getDay();
if (today == 0 || today == 6) {
    console.log('Выходной')
} else {
    console.log('Будний')
};

////////314.3

let date = new Date();
let today = date.getDay();
console.log(6 - today);

///////////315.1

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let date = new Date();
let mon  = date.getMonth();
console.log(months[mon]);

///////////316.1

let date = new Date(2024, 5, 19);
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 
	'чт', 'пт', 'сб']; 
    console.log(days[day]);

///////////317.1

let date = new Date(2025, 1, 1, 00, 00, 01);
console.log(date.getTime());

///////318.1

let date1  = new Date(1988, 3, 1, 23, 59, 59);
let date2 = new Date(2000, 1, 10, 23, 59, 59);
let diff = date2.getTime() - date1.getTime();
console.log(diff);

/////////////318.2

let now  = new Date();
let date2 = new Date(2005, 5, 19, 23, 59, 59);
let diff = now.getTime() - date2.getTime();
console.log(diff / (1000 * 60 * 60 * 24 * 30));

////////////321.1

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
  }
  console.log( getLastDayOfMonth(2012, 0) );

/////////////321.2

let date = new Date(2025, 5, 0);
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);

/////////////////322.1

function isLeap(year) {
    let date = new Date(year, 2, 0);

    if (date.getDate() == 29) {
 	    console.log( ) true;
    } else {
 	    console.log( ) false;
    }
 }
console.log(isLeap(2024));

////////////323.1

function checkDate(year, month, day) {
   let date = new Date(year, month, day);
        if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
             console.log( ) true;
         } else {
             console.log( ) false;
         }
     }
 console.log(checkDate(2025, 0, 31));

 ///////////////324.1

 let now  = new Date(); 
 let date = new Date(now.getFullYear(), 11, 31); 
 console.log(date.getDay());
 
//325
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, 24);
console.log(date.getDay());

//////////326.1

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, 24);
console.log(date.getDay());

////////////326.2

let now = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(date.getDay());

////////////326.3

let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(date.getDay());

////////////327.1

let now = new Date();
let date1 = new Date(now.getFullYear(), 0, 1, 12, 59, 59);
let date2 = new Date(now.getFullYear(), 8, 10, 12, 59, 59);
console.log((date2 - date1) * 1.1574 * 10**(-8)); 

////////////327.2

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), 20, 12, 59, 59);
let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10, 12, 59, 59);
console.log((date2 - date1) * 1.1574 * 10**(-8)); 

/////////328

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
console.log((now - date) * 2.778 * 10**(-7));

/////////329

let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
console.log((now - date1) / (1000 * 60 * 60));

//////////330

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
console.log((date - now) / (1000 * 60 * 60));

////////////331

let res = 0;
for (let year = 2000; year <= new Date().getFullYear(); year++) {
 	let date = new Date(year, 0, 1);
	
 	if (date.getDay() == 0 || date.getDay() == 6) {
 		res++;
 	}
 }

 console.log(res);

/////////332.1

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 1);
console.log((now - date) / 1000);

////////////332.2

let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
console.log((date - now) / 1000);

///////////332.3

let now  = new Date();
let date1 = new Date(now.getFullYear() + 1, 1, 1);
console.log((date1 - now) *  1.1574 * 10**(-8) );

////////////332.4

let res = 0;
let now = new Date().getFullYear();
for (let month = 0; month < 12; month++) {
    let date = new Date(now, month, 13);
     if (date.getDay() === 5) { 
         res++;
     }
 }
 console.log(res);

////////////332.5

let now = new Date();
let lastYear = now.getFullYear();
let month3 = now.getMonth() - 3;
 if (month3 < 0) {
     lastYear--;
    month3 = 12 + month3;
}
console.log(lastYear);

///////////332.6

let now = new Date();
let lastDaym= new Date(now.getFullYear(), now.getMonth() + 1, 0);
let lastDay = lastDaym.getDay();
console.log(lastDay); 

////////////332.7

let now = new Date();
let year = now.getFullYear();
let date = new Date(year, 2, 0);
 if (date.getDate() == 29) {
        console.log('високосный');;
 } else {
     console.log('не високосный');;
};

////////////332.8

let now = new Date();
for (let year = now.getFullYear() - 1; year >= 0; year--) {
    let date = new Date(year, 2, 0);
    if (date.getDate() == 29) {
        console.log(year);
         break;
     }
}

//////////332.9

let now = new Date().getFullYear();
let nextYear = now + 1;
while (true) {
  if ((nextYear % 4 === 0 && nextYear % 100 !== 0) || nextYear % 400 === 0) {
     console.log(nextYear);
     break;
   }
   nextYear++;
 }

/////////333

let date1 = '2020-11-31';
let date2 = '2020-12-01';
if (date1 > date2) {
    console.log('date1 > date2');
} else {
    console.log('date1 < date2');
}

///////////334

let date1 = '09-21';
let date2 = '09-23';
if (date1 > date2) {
    console.log('date1 > date2');
} else {
    console.log('date1 < date2');
}

////////335

let date = '08-20';
    if (date >= '03-21' && date <= '04-19') {
      console.log("Овен");
    } 
    if (date >= '04-20' && date <= '05-20') {
      console.log("Телец" ) ;
    } 
    if (date >= '05-21' && date <= '06-20') {
      console.log("Близнецы" ) ;
    } 
    if (date >= '06-21' && date <= '07-22') {
      console.log("Рак" ) ;
    } 
    if (date >= '07-23' && date <= '08-22') {
      console.log("Лев" ) ;
    } 
    if (date >= '08-23' && date <= '09-22') {
       console.log("Дева" ) ;
     } 
    if (date >= '09-23' && date <= '10-22') {
      console.log("Весы" ) ;
    }
    if (date >= '10-23' && date <= '11-21') {
      console.log("Скорпион" ) ;
    } 
    if (date >= '11-22' && date <= '12-21') {
      console.log("Стрелец" ) ;
    } 
    if (date >= '12-22' && date <= '01-19') {
      console.log( "Козерог") ;
    } 
    if (date >= '01-20' && date <= '02-18') {
      console.log("Водолей" ) ;
    } 
    if (date >= '02-19' && date <= '03-20') {
      console.log("Рыбы" ) ;
    } 

///////////////336.1

let now = new Date(); 
let pol = new Date();
pol.setHours(12, 0, 0, 0);
if (now >= pol) {
  console.log("Уже прошел полдень");
} else {
  console.log("Еще не наступил полдень");
}

/////////////336.2

let now = new Date();
let pol = new Date(now.getFullYear(), now.getMonth(), 15);
if (now > pol) {
    console.log("Половина месяца уже прошла");
} else {
    console.log("Половина месяца еще не прошла");
}

/////////////339.1

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
console.log(elem1);
console.log(elem2);
console.log(elem3);

//////////////340.1

let elem = document.querySelector('#block p');
console.log(elem);

/////////////340.2

let elem = document.querySelector('.block p');
console.log(elem);

///////////////340.3

let elem = document.querySelector('.www');
console.log(elem);

////////////////341.1

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
button1.addEventListener('click', function() {
	console.log('1');
});
button2.addEventListener('click', function() {
	console.log('2');
});
button3.addEventListener('click', function() {
	console.log('3');
});

////////////////////342.1

let button1 = document.querySelector('#button1');
button1.addEventListener('click', func1);

let button2 = document.querySelector('#button2');
button2.addEventListener('click', func2);

function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
}

/////////////////343

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);
function func() {
	console.log('message');
}

//////////////344

let elem = document.querySelector('#elem');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);
function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}

////////////////345.1

let button = document.querySelector('#button');
button.addEventListener('dblclick', function() {
	console.log('kitty');
});

///////////////345.2

let button = document.querySelector('#button');
button.addEventListener('mouseover', function() {
	console.log('kitty');
});

///////////////////345.3

let button = document.querySelector('#button');
button.addEventListener('mouseout', function() {
	console.log('hi');
});

////////////////345.4

let button = document.querySelector('#button');
button.addEventListener('mouseover', function() {
	console.log('hi');
});
button.addEventListener('mouseout', function() {
	console.log('bye');
});
