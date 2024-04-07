/////////////346.1

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
	console.log(elem.textContent);
});

///////////////346.2

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
	elem.textContent = 'Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.';
    console.log(elem.textContent);
});

///////////////346.3

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
button.addEventListener('click', function() {
    let numbers = Number(elem1.textContent) + Number(elem2.textContent);
    console.log(numbers);
});

///////////////346.4

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let di = document.querySelector('#di');
button.addEventListener('click', function() {
    let numbers = Number(elem1.textContent) + Number(elem2.textContent) + Number(elem3.textContent);
    console.log(numbers);
    document.getElementById('di').innerHTML = numbers;
});

///////////////346.5

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
button.addEventListener('click', function() {
    let numbers = Number(elem1.textContent) + 1;
    elem1.textContent = numbers;
});

/////////////////346.6

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
button.addEventListener('click', function() {
    let numbers = elem1.textContent + '!';
    elem1.textContent = numbers;
});

//////////////347.1

let button = document.querySelector('#button');
let elem = document.querySelector('#elem1');
button.addEventListener('click', function() {
    console.log(elem.innerHTML);
});

/////////////////347.2

let button = document.querySelector('#button');
let elem = document.querySelector('#elem1');
button.addEventListener('click', function() {
    elem.innerHTML = '<b>fgfcx</b>';
});

////////////////348.1

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    console.log(elem.type);
});

////////////////348.2

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    elem.type = 'submit';
});

/////////////////348.3

let button = document.querySelector('#button');
let link = document.querySelector('#link');
let di = document.querySelector('#di');
button.addEventListener('click', function() {
    di.innerHTML = link.href
});

///////////////////348.4

let button = document.querySelector('#button');
let link = document.querySelector('#link');
button.addEventListener('click', function() {
    link.innerHTML += link.href;
});

////////////////348.5

let button = document.querySelector('#button');
let pict = document.querySelector('#pict');
let text = document.querySelector('#text');
button.addEventListener('click', function() {
    text.innerHTML = pict.src;
});

/////////////////348.6

let button = document.querySelector('#button');
let pict = document.querySelector('#pict');
let text = document.querySelector('#text');
button.addEventListener('click', function() {
    pict.width = '300';
});

////////////////349.1

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    console.log(elem.value);
    elem.value = 'new text';
});

//////////////////349.2

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
let text = document.querySelector('#text');
button.addEventListener('click', function() {
    console.log(elem.value);
    text.innerHTML = elem.value;
});

///////////////349.3

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let text = document.querySelector('#text');
button.addEventListener('click', function() {
    elem2.value = Math.pow(parseInt(elem1.value), 2);
});

////////////////349.4

let button = document.querySelector('#button');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let text  
button.addEventListener('click', function() {
    text = elem1.value;
    elem1.value = elem2.value;
    elem2.value = text;
});

////////////////350.1

let elem = document.querySelector('#elem1');
elem.addEventListener('focus', function() {
	elem.value = 1;
});
elem.addEventListener('blur', function() {
	elem.value = 2;
});

//////////////////350.2

let elem = document.querySelector('#elem1');
elem.addEventListener('focus', function() {
	elem.value = 1;
});
elem.addEventListener('blur', function() {
	elem.value = Math.pow(parseInt(elem.value), 2);
});

////////////////350.3

let elem = document.querySelector('#elem1');
elem.addEventListener('focus', function() {
	elem.value = '';
});

///////////////351.1

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    document.write(elem.className);
})

//////////////351.2

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    elem.className = 'hello';
    document.write(elem.className);
})

////////////////351.3

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    let arr = elem.className.split(' ');
    document.write(arr);
})

////////////352.1

console.log( document.querySelector('#image').src );

///////////////354.1

let elem = document.querySelector('#elem');
elem.addEventListener('focus', func);
function func() {
	this.value = '1';
}
elem.addEventListener('blur', func2);
function func2() {
	this.value = '2';
}

/////////////354.2

let button = document.querySelector('#button');
button.addEventListener('click', function() {
    button.value++;
})

//////////////355.1

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
this.textContent += '!';
}

//////////////355.2

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
elem1.addEventListener('blur', func);
elem2.addEventListener('blur', func);
elem3.addEventListener('blur', func);
function func() {
	this.value = Math.pow(this.value, 2);
}

//////////////356.1

let elems = document.querySelectorAll('.www');
button.addEventListener('click', function() {
    for (let elem of elems) {
        elem.textContent = 'text';
    }
})

//////////////356.2

let elems = document.querySelectorAll('.www');
button.addEventListener('click', function() {
    for(let i=0;i<elems.length; ){
        let elem= elems[i++];
        elem.innerHTML += i;
    }
})

//////////////356.3

let elems = document.querySelectorAll('.elem');
let text = document.querySelector('#text');
let but = document.querySelector('#but');
let sum = 0;
but.addEventListener('click', function() {
    for (let elem of elems) {
		sum += Number(elem.value);	
		text.innerHTML = sum;
    }
})

/////////////357.1

let elems = document.querySelectorAll('.elem');
for (let elem of elems) {
	elem.addEventListener('focus', func);
}
function func() {
	this.value = Number(this.value) + 1;
}

///////////////357.2

let elems = document.querySelectorAll('.elem');
for (let elem of elems) {
	elem.addEventListener('click', func);
}
function func() {
	this.textContent = Math.pow(Number(this.textContent), 2);
}

///////////////358.1

let divs = document.querySelectorAll('div');
for (let div of divs) {
	div.addEventListener('click', function(){
		this.textContent++;
	});
}

////////////////359.1

let button = document.querySelector('#button');
let hr = document.querySelector('#href');
button.addEventListener('click', func);
function func() {
hr.textContent += hr.href;
this.removeEventListener('click', func);
}

////////////////364.1

let txt1 = document.querySelector('#id1');
let id1 = document.querySelector('#txt1');
txt1.addEventListener('blur', function() { 
  let txt2 = txt1.value;
  id1.textContent += ' ' + txt2;
  console.log(id1.textContent);
});


/////////////364.2

let id2 = document.querySelector('#id2');
let id3 = document.querySelector('#id3');
let id4 = document.querySelector('#id4');
let txt2 = document.querySelector('#txt2');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
    let sum = Number(id2.value) + Number(id3.value) + Number(id4.value);
    txt2.textContent = "Сумма: " + sum;
});


//////////////////364.3

let id5 = document.querySelector('#id5');
let txt3 = document.querySelector('#txt3');
id5.addEventListener('blur', function(){
    let number1 = id5.value;
    let sum = 0;
    for (let i = 0; i < number1.length; i++) {
        sum += parseInt(number1.charAt(i));
    }
    txt3.textContent = "Сумма цифр: " + sum;
});

//////////////////364.4

let id6 = document.querySelector('#id6');
let txt4 = document.querySelector('#txt4');
id6.addEventListener('blur', function(){
    let number2 = id6.value.split(",");
    let sum = 0;
    for (let i = 0; i < number2.length; i++) {
        sum += parseInt(number2[i]);
    }
    let itog = sum / number2.length;
    txt4.textContent = "Среднее арифметическое: " + itog;
})

/////////////////////364.5

let id7 = document.querySelector('#id7');
let id8 = document.querySelector('#id8');
let id9 = document.querySelector('#id9');
let id10 = document.querySelector('#id10');
id7.addEventListener('blur', function(){
    let number4 = id7.value.split(" ");
        id8.value = number4[0];
        id9.value = number4[1];
        id10.value = number4[2];
    }
);

////////////////364.6

let id11 = document.querySelector('#id11');
id11.addEventListener("blur", function() {
    let znach1 = id11.value;
    let words = znach1.split(" ");
    let itog2 = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
    id11.value = itog2;
});

////////////364.7

let id12 = document.querySelector('id12');
let txt5 = document.querySelector('txt5');
id12.addEventListener("blur", function() {
    let zhach2 = id12.value;
    let words = zhach2.split(" ");
    words = words.filter(function(word) {
        return word !== "";
    });
    let count = words.length;
    txt5.textContent = "Количество слов: " + count;
});


////////////364.8

let id13 = document.querySelector('id13');
id13.addEventListener("blur", function() {
    let date = id13.value;
    let part = date.split(".");
    let datta = part[2] + "-" + part[1] + "-" + part[0];
    id13.value = datta;
});

///////////////364.9

let id14 = document.querySelector('#id14');
let button2 = document.querySelector('#button2');
let result = document.querySelector('#result');
button2.addEventListener("click", function() {
    let word = id14.value.toLowerCase();
    if (word === word.split("").reverse().join("")) {
        result.textContent = "палиндром";
    } else {
        result.textContent = "не палиндром";
    }
});

/////////////////364.10

let id = document.querySelector('#id');
let itog = document.querySelector('#itog');
id15.addEventListener("blur", function() {
    let number = id.value;
    if (number.includes("3")) {
        itog.textContent = "Число содержит цифру 3";
    } else {
        itog.textContent = "Число не содержит цифру 3";
    }
});

////////////////364.11

let txt = document.getElementsByTagName("p");
let button3 = document.querySelector('#button3');
button3.addEventListener("click", function() {
    for (let i = 0; i < txt.length; i++) {
        txt6[i].textContent += " " + (i + 1);
    }
});

///////////364.12

let links = document.getElementsByTagName("a");
let button5 = document.querySelector('#button5');
button5.addEventListener("click", function() {
    for (let i = 0; i < links.length; i++) {
        links[i].textContent += " (" + links[i].href + ")";
    }
});

////////////////364.13

let links = document.getElementsByTagName("a");
let button6 = document.querySelector('#button6');
button6.addEventListener("click", function() {
    for (let i = 0; i < links.length; i++) {
        if (links1[i].href.startsWith("http://")) {
            links1[i].textContent += " →";
        }
    }
});

//////////////364.14

let id = document.querySelector("#id1");
let id= document.querySelector("#id2");
let id= document.querySelector("#id3");
let button7 = document.querySelector('#button7');
id1.addEventListener("click", function() {
    let square = parseInt(id1.textContent) ** 2;
    id16.textContent = square;
});
id2.addEventListener("click", function() {
    let square = parseInt(id2.textContent) ** 2;
    id17.textContent = square;
});
id3.addEventListener("click", function() {
    let square = parseInt(id3.textContent) ** 2;
    id18.textContent = square;
});

///////////////364.15

let id19 = document.querySelector('#id19');
let result12 = document.querySelector('#result12');
id19.addEventListener("blur", function() {
    let date = id19.value;
    let dayOfWeek = getDayOfWeek(date);
    result12.textContent = dayOfWeek;
});
function getDayOfWeek(dateString) {
    let dateParts = dateString.split(".");
    let day = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1;
    let year = parseInt(dateParts[2]);
    let date = new Date(year, month, day);
    let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return daysOfWeek[date.getDay()];
}

/////////////364.16

let id = document.querySelector('#id');
let butt = document.querySelector('#butt');
let but = document.querySelector('#but');
butt.addEventListener("click", function() {
    let currentValue = parseInt(id.value);
    id21.value = currentValue + 1;
});
but.addEventListener("click", function() {
    let currentValue = parseInt(id.value);
    if (currentValue > 0) {
        id21.value = currentValue - 1;
    }
});

////////////364.17

let id20 = document.querySelector('#id20');
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function() {
        let currentValue = parseInt(id20.value);
        id20.value = currentValue + 1;
    });
}

///////////364.18

let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    let text = div.innerHTML;
    if (text.length > 10) {
        text = text.substring(0, 10) + "...";
    }
    div.innerHTML = text;
}

////////////364.19

function generateRandomString1() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    document.querySelector('#id24').value = randomString;
}

///////////364.20

function RandomString() {
    let input = document.querySelector('#randomStringInput');
    let string = input.value;
    let shuffledString = shuffleString(string);
input.value = shuffledString;
}
function shuffleString(string) {
    let characters = string.split("");
    for (let i = characters.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = characters[i];
        characters[i] = characters[randomIndex];
        characters[randomIndex] = temp;
    }
    return characters.join("");
}

//////////////364.21

function convertToFahrenheit() {
    let id234 = document.querySelector('#id234');
    let celsiusResult = document.querySelector('#result13');
    let fahrenheit = parseFloat(id234.value);
    let celsius = (fahrenheit - 32) * 5/9;
    celsiusResult.textContent = "Temperature in Celsius: " + celsius.toFixed(2);
}

///////////////364.22

function calculateFactorial() {
    let numberInput = document.querySelector('#numberInput');
    let result16 = document.querySelector('#result16');
    let number = parseInt(numberInput.value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    result16.textContent = "Factorial: " + factorial;
}
/////////////364.23
function calculateRoots() {
    let inputA = document.querySelector('#inputA');
    let inputB = document.querySelector('#inputB');
    let inputC = document.querySelector('#inputC');
    let res18 = document.querySelector('#res18');
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    let c = parseInt(inputC.value);
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.textContent = "Roots: " + root1 + ", " + root2;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        res18.textContent = "Root: " + root;
    } else {
        res18.textContent = "No real roots";
    }
}
///////////365.1
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');

console.log(value);

///////////////365.2
let elem = document.querySelector('#elem');
let class = elem.getAttribute('class');

console.log(class);

/////////////////366.1
let elem = document.querySelector('#elem');
elem.setAttribute('class', 'valid');

//////////////367.1
let elem = document.querySelector('#elem');
elem.removeAttribute('value');

////////////////368.1
let elem = document.querySelector('#elem');
console.log(elem.hasAttribute('value'));

///////////////369.1
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
	elem.textContent += elem.dataset.text;
	});

////////////369.2
let elem = document.querySelectorAll('div');
for (let elems of elem){
	elems.addEventListener('click', function(){
		elems.textContent += elems.dataset.num;
	});
}

////////////////369.3
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let res = 0;
button1.addEventListener('click', function(){
		res ++;
	});
	button2.addEventListener('click', function(){
		button2.value = res;
	});

//////////369.4
let elem = document.querySelector('#elem');
elem.addEventListener('blur', function() {
	if (elem.value.length != elem.dataset.length) {
        alert ('no');
    }
});

//////////369.5
let elem = document.querySelector('#elem');
elem.addEventListener('blur', function() {
	if (elem.value.length < elem.dataset.min || elem.value.length > elem.dataset.max) {
        alert ('no');
    }
});

///////////////370.1
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
    let res = elem.dataset.productPrice * elem.dataset.productAmount;
	elem.textContent += res;
});

//////////////371.1
let elem = document.querySelectorAll('p');
elem.forEach (function(el,ind){
el.setAttribute('data-num', ind + 1);
})

//////////////////372.1
let elem = document.querySelector('#elem');
let length = elem.classList.length;
console.log(length);

////////////////372.2
let elem = document.querySelector('#elem');
let classNames = elem.classList;
for (let className of classNames) {
	console.log(className);
}

//////////////373.1
let elem = document.querySelector('#elem');
elem.classList.add('xxx');

/////////////////374.1
let elem = document.querySelector('#elem');
elem.classList.remove('www');
elem.classList.remove('zzz');

/////////////////375.1
let elem = document.querySelector('#elem');

let contains = elem.classList.contains('ggg');
console.log(contains);

///////////////376.1
let elem = document.querySelector('#elem');
elem.classList.toggle('www');

//////////////////377
let elem = document.querySelector('#elem');
let but = document.querySelector('#button');
but.addEventListener('click', function() {
    elem.style.width = '100px';
    elem.style.hight = '100px';
    elem.style.border = "2px solid black";
});

///////////378
let elem = document.querySelector('#elem');
let but = document.querySelector('#button');
but.addEventListener('click', function() {
    elem.style.fontSize = '20px';
    elem.style.background = 'red';
});

/////////////379
let elem = document.querySelector('ul');
let li = document.querySelectorAll('li');
let button = document.querySelector('#button');
button.addEventListener('click', function(){
li.forEach(function(li){
li.style.float = 'left'
});
});

/////////////380
let elems = document.querySelectorAll('ul');
let but1 = document.querySelector('#button1');
let but2 = document.querySelector('#button2');
let but3 = document.querySelector('#button3');
but1.addEventListener('click', function() {
    elem.classList.add('colored');
});
but2.addEventListener('click', function() {
    elem.classList.add('colored2');
});
but3.addEventListener('click', function() {
    elem.classList.add('colored3');
});

/////////////381
let elems = document.querySelectorAll('ul');
let but1 = document.querySelector('#button1');
let but2 = document.querySelector('#button2');
let but3 = document.querySelector('#button3');
but1.addEventListener('click', function() {
    elem.classList.toggle('colored');
});
but2.addEventListener('click', function() {
    elem.classList.toggle('colored2');
});
but3.addEventListener('click', function() {
    elem.classList.toggle('colored3');
});

//////////////383.1
let elem = document.querySelector('#elem');
let txt = elem.firstElementChild;
txt.style.color = 'red';

////////////383.2
let elem = document.querySelector('#elem');
let txt = elem.lastElementChild;
txt.style.color = 'red';

///////////////383.3
let parent = document.querySelector('#elem');
let elems = parent.children;
for (let elem of elems) {
elems.textContent += '!';
}

///////////384
let elem = document.querySelector('#elem');
let per = elem.parentElement.style.border = 'solid 3px red';

/////////////385.1
let elem = document.querySelector('#elem');
let parent = elem.closest('div');

////////////385.2
let elem = document.querySelector('#elem');
let parent = elem.closest('.www');

////////////386.1
let elem = document.querySelector('#elem');
let sosed = elem.previousElementSibling.textContent;
if (sosed){
    sosed.textContent +='!';
}

//////////////386.2
let elem = document.querySelector('#elem');
let sosed = elem.nextElementSibling.textContent;
if (sosed) {
sosed.textContent += "!";
}

////////////386.3
let elem = document.querySelector('#elem');
let sosed = elem.nextElementSibling;
let sosed1 = sos.nextElementSibling;
if (sosed1) {
sosed1.textContent += "!";
}

///////////386.4
let elem = document.querySelector('#elem');
let prev = elem.previousElementSibling;
let next = elem.nextElementSibling;
if (prev) {
let res = prev.textContent;
prev.textContent = next.textContent;
next.textContent = res;
}

//////////////387
let elem = document.getElementById('elem');
elem.textContent = 'dsfjjedf';

/////////////388
let text = document.getElementsByTagName('li');
for (let elem of text) {
elem.style.color = 'red';
}

/////////////389
let elem = document.getElementsByClassName('www');
for (let el of elem) {
el.style.color = 'red';
}

//////////////390
let parent = document.querySelector('#parent');
let elem1 = parent.querySelectorAll('.www');
let elem2 = parent.querySelectorAll('.ggg');

/////////////////391.1
let elem = document.querySelector('#elem');
console.log(elem.lastChild);
console.log(elem.lastElementChild);

////////////////391.2
let elem = document.querySelector('#elem');
console.log(elem.nextSibling);
console.log(elem.nextElementSibling);

///////////////391.3
let elem = document.querySelector('#elem');
console.log(elem.previousSibling);
console.log(elem.previousElementSibling);

/////////////392
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
console.log(node);
}

//////////////////393
let elem = document.querySelector('#elem');
let nodes = elem.childNodes;
for (let node of nodes) {
console.log(node.nodeName);
}

///////////////////394
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
if ( node.nodeType == 1 node.nodeType == 3){
console.log(node.nodeName);
}
}

////////////////395.1
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
console.log(node.textContent);
}

////////////////395.2
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
if ( node.nodeType == 8 node.nodeType == 3){
console.log(node.textContent);
}
}

//////////////395.3
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
    if ( node.nodeType == 1 node.nodeType == 3){
    console.log(node.textContent);
    }
}

///////////////395.4
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
    node.textContent += node.nodeType;
}

////////////////396.1
let elem = document.querySelector('#elem');
let par = document.querySelector('#par');
elem.addEventListener('blur', function() {
    par.textContent = elem.value;
});

////////////////397.1
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function() {
    elem.disabled = true;
});

////////////////397.2
let elem = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function() {
    elem.disabled = true;
});
button2.addEventListener('click', function() {
    elem.disabled = false;
});

////////////////397.3
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function() {
    console.log(elem.disabled);
});

//////////////398.1
let elem = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function() {
    elem.checked = true;
});
button2.addEventListener('click', function() {
    elem.checked = false;
});

//////////////398.2
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let par = document.querySelector('#par');
button.addEventListener('click', function() {
    if (elem.checked){
        par.textContent = 'привет';
    } else {
        par.textContent = 'пока';
    }
});

/////////////////399.2
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function() {
	if (elem.checked) {
		elem.checked = false;
	} else {
		elem.checked = true;
	}
});

///////////////400.1
let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
let par = document.querySelector('#par');
button.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			par.textContent = radio.value;
		}
	}
});

//////////////401.1
let elem = document.querySelector('#elem');
let par = document.querySelector('#par');
elem.addEventListener('change', function() {
	par.textContent = elem.value;
});

///////////////401.2
let elem = document.querySelector('#elem');
let par = document.querySelector('#par');
elem.addEventListener('change', function() {
	par.textContent = elem.checked;
});

////////////401.4
let elem = document.querySelector('#elem');
elem.addEventListener('change', function() {
	if (elem.value.length < 5){
        elem.style.border = "solid 2px red";
    } else {
        elem.style.border = "solid 2px green";
    }
});

///////////402.1
let elem = document.querySelector('#elem');
let p =document.querySelector('p');
elem.addEventListener('input', function(){
let length = elem.value.length;
if (length>5){
p.textContent = 'input > 5';
}
})

//////////////402.2
let elem = document.querySelector('#elem');
let p = document.querySelector('p');
elem.addEventListener('input', function(){
let length = 5 - elem.value.length;
p.textContent = 'осталось ' + length + ' символа';
if (length<0){
let sum = elem.value.length - 5;
p.textContent = 'привышение допустимых символов на ' + sum;
}
})

/////////////403.1
let elem = document.querySelector('#elem');
let elem2 = document.querySelector('#elem2');
elem.addEventListener('input', function(){
    if (elem.value.length == 2) {
    elem2.focus();
}
})
elem2.addEventListener('input', function(){
    if (elem2.value.length == 2) {
    elem2.blur();
    }
})

////////////////404.1
let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function() {
div.textContent = textarea.value;
});

///////////////404.2
let checkbox = document.querySelector('input');
let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', function() {
if (checkbox.checked) {
div.textContent = '111';
} else {
div.textContent = '222';
}
});

////////////////404.3
let checkbox = document.querySelector('input[type="checkbox"]');
let button = document.querySelector('button');

button.addEventListener('click', function() {
if (checkbox.checked) {
console.log('+++');
} else {
console.log('---');
}
});

///////////////////405.1
let select = document.querySelector('select');
let btn = document.querySelector('input');
let p = document.querySelector('p');
btn.addEventListener('click', function(){
p.textContent = select.value;
});

///////////////405.2
let select = document.querySelector('select');
let p = document.querySelector('p');
select.addEventListener('change', function(){
let op = +select.value;
if (op % 4 == 0 op % 400 == 0){
p.textContent = 'високосный';
} else {
p.textContent = 'не високосный';
}
});

////////////////406.1
let select = document.querySelector('select');
let p = document.querySelector('p');
select.addEventListener('change', function(){
    if (this.value <= 5){
        p.textContent = 'будни';
    } else {
        p.textContent = 'выходной';
    }
});

////////////////407.1
let select = document.querySelector('select');
let button = document.querySelector('#button');
let month = new Date().getMonth();
button.addEventListener('click', function(){
    select.value = month;
});

/////////////////408.1
let elem = document.querySelector('#select');
let inp = document.querySelector('#btn');
inp.addEventListener('blur', function(){
elem.selectedIndex = inp.value - 1;
})

//////////////////////408.2
let m = new Date().getDay();
let elem = document.querySelector('#select');
let btn = document.querySelector('#btn');
select.value = m;

////////////410
let select = document.querySelector('#select');
for (let option of select) {
option.textContent = option.textContent + ' ' + option.value;
}

////////////////411
let select = document.querySelector('#select');
select.addEventListener('change', function(){
for (let option of select) {
if (option.selected) {
option.textContent += '!';
} else {
option.textContent += '?';
}
}
})

/////////////412.1
let select = document.querySelector('#select');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
let options = select.options;
options[options.length - 1].selected = true;
})

////////////////413.1
let select = document.querySelector('#select');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
console.log(select[select.selectedIndex].innerHTML);
})

///////////413.2
let select = document.querySelector('#select');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
select[select.selectedIndex].innerHTML += '!';
})

///////////////414.1
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event) {
console.log(event);
});

///////////////////415.1
let elem = document.getElementById('elem');
document.addEventListener('mousemove', function(event) {
	elem.innerHTML = event.clientX + ' : ' + event.clientY;
});

/////////////416.1
let elem = document.querySelector('#elem');
elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);
function func(event) {
if (event.type == 'click'){
elem.style.color = 'green';
}
else {
elem.style.color = 'red';
}
}

//////////////////////////417
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event){
if (event.target.tagName == 'LI') {
event.target.textContent += '!';
} else {
console.log('tfrsy');
}
})

/////////////418.1
let elem = document.querySelector('input');
elem.addEventListener('keypress', function(event) {
console.log(event.key);
console.log(event.code);
});

/////////////418.5
let elem = document.querySelector('input');
let p = document.querySelector('p');
elem.addEventListener('keypress', function(event) {
if (event.code == 'Enter'){
p.textContent = this.value;
this.value = '';
}
});

/////////419.1
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event){
if (event.altKey){
this.style.color = 'red';
}
})

//////////////419.2
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event){
if(event.ctrlKey){
event.target.textContent += '1';
}
if(event.shiftKey){
event.target.textContent += '2';
}
})

//////////////420.1
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event) {
event.preventDefault();
event.target.textContent += elem.href;
});

////////////420.2
let elem = document.querySelector('#elem');
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let p = document.querySelector('p')
elem.addEventListener('click', function(event) {
event.preventDefault();
p.textContent = +a.value + +b.value;
});

///////////////421
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
elem1.addEventListener('click', function() {
alert('1');
});
elem2.addEventListener('click', function() {
alert('2');
});
elem3.addEventListener('click', function() {
alert('3');
});

////////////422
let div = document.querySelector('div');
div.addEventListener('click', function(event){
console.log(event.target);
})

/////////////////////422.2
let div = document.querySelector('div');
div.addEventListener('click', function(event){
if (event.target.tagName == 'LI'){
event.target.textContent += '!';
}
if (event.target.tagName == 'UL'){
console.log('клик по ul');
}
})

//////////////426
let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block = document.querySelector('#block');
button.addEventListener('click', function(event) {
block.classList.add('active');
event.stopPropagation();
});
parent.addEventListener('click', function(event) {
block.classList.remove('active');
event.stopPropagation();
});

////////////430.1
list.addEventListener('click', function(event) {
	let li = event.target.closest('li');
	
	if (li) {
		li.textContent = li.textContent + '!';
	}
});

////////////435.1
"use strict";
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);
function func() {
    let self = this;
	function square() {
		return self.value * self.value;
	}
    alert( square() );
}

////////////////436.1
"use strict";
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);
function func() {
	alert( square(this) );
	function square(param) {
		return param.value * param.value;
	} 
}

/////////////437.1
"use strict";
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);
function func() {
		let square = () => {
		return this.value * this.value;
	}
    alert( square() );
}

////////////438.1
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
function func() {
	console.log(this.value);
}
func.call(elem1);
func.call(elem2);
func.call(elem3);

////////////439.1
let elem = document.querySelector('#elem');
function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
func.call(elem, 'John', 'Smit');

////////////440
let elem = document.querySelector('#elem');
function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
func.apply(elem40, ['Smit', 'John']); 

/////////////442
setInterval(()=> {
	console.log('!');
}, 3000);

///////////443
let i = 100;
setInterval(()=> {
	console.log(--i);
}, 1000);

////////////444
let i = 10;
let timer = setInterval(function() {
	console.log(--i);
	if (i == 0) {
		clearInterval(timer);
	}
}, 1000);

////////////445
let i = 100;
let button = document.querySelector('#button');
button.addEventListener('click', ()=>{
    setInterval(()=> {
	console.log(--i);
}, 1000);
});

///////////447
let i = 100;
let timer;
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', ()=>{
    timer = setInterval(function() {
        console.log(--i);
        if (i == 0) {
            clearInterval(timer);
        }
    }, 1000);
});
button2.addEventListener('click', ()=>{
    clearInterval(timer);
});

///////////////448
let elem = document.querySelector('#elem');
let i = elem.value;
let timer = setInterval(function() {
	elem.value = --i;
	if (i == 0) {
		clearInterval(timer);
	}
}, 1000);

////////////450.1
let number = document.getElementById('number');
let button = document.getElementById('button');
let timer;
button.addEventListener('click', () => {
    timer = setInterval(() => {
        number.textContent = parseInt(number.textContent) + 1;
    }, 1000);
});

////////////450.2
let number = document.getElementById('number');
let button = document.getElementById('button');
let timer;
button.addEventListener('click', () => {
    timer = setInterval(() => {
        let currentNumber = parseInt(number.textContent);
        if (currentNumber > 0) {
            number.textContent = currentNumber - 1;
        } else {
            clearInterval(timer);
        }
    }, 1000);
});

//////////////450.3
let input = document.getElementById('input');
let square = document.getElementById('square');
setInterval(() => {
    square.textContent = Math.pow(parseInt(input.value), 2);
}, 1000);

//////////////450.4
let input= document.getElementById('input');
let count = document.getElementById('count');
input.addEventListener('blur', () => {
    let count2 = parseInt(input.value);
    let timer = setInterval(() => {
        count.textContent = count2;
        count2--;
        if (count2 < 0) {
            clearInterval(timer);
        }
    }, 1000);
});

///////////////450.5
let input = document.getElementById('input');
let start = document.getElementById('start');
let count = document.getElementById('count');
startCount.addEventListener('click', () => {
    count.textContent = input.value;
    let count2 = parseInt(input.value);
    let timer = setInterval(() => {
        count.textContent = count2;
        count2--;
        if (count2 < 0) {
            clearInterval(timer);
        }
    }, 1000);
});

/////////////450.6
let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let timer;
startBtn.addEventListener('click', () => {
    let count = 1;
    timer = setInterval(() => {
        timerText.textContent = count;
        count++;
    }, 1000);
});
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
});

//////////////450.7
let color = document.getElementById('color');
setInterval(() => {
    if (color.style.color === 'red') {
        color.style.color = 'green';
    } else {
        color.style.color = 'red';
    }
}, 1000);

//////////////451
let p = document.querySelector('#p');
setTimeout(function() {
    p51.textContent = 'hello';
}, 10000);

///////////////452
let i = 0;
function timer() {
	setTimeout(function() {
		console.log(++i);
		timer(); 
	}, 1000);
}
timer();

////////////////453
let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'первый пункт';
elem53.appendChild(li);

//////////////453.2
let elem = document.querySelector('#elem');
let but = document.querySelector('#button');
let li = document.createElement('li');
li.textContent = 'item';
but.addEventListener('click', ()=>{
    elem.appendChild(li);
});

//////////////454
let elem = document.querySelector('#elem');
let but = document.querySelector('#button');
let li = document.createElement('');
li.textContent = 'text';
but.addEventListener('click', ()=>{
    elem54.appendChild(li);
});
elem.addEventListener('click', ()=>{
    elem.textContent += '!';
});

/////////////455
let ul = document.querySelector('#ul');
for (let i = 1; i <= 9; i++) {
	let li = document.createElement('li');
	li.textContent += i;
	ul.appendChild(li);
}

////////////////456
let div = document.querySelector('#elem');
let p = document.querySelector('#p');
for (let i = 1; i <= 5; i++) {
	let input = document.createElement('input');
	div.appendChild(input);
    input.addEventListener('blur',()=>{
        p.textContent += input.value;
    });
}

//////////////457
let elems = document.querySelectorAll('#li');
for (let elem of elems) {
	elem.addEventListener('click', function() {
		elem.remove();
	});
}

///////////////458
let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'start';
let li = document.createElement('li');
li.textContent = 'finish';
elem.prepend(li);
elem.append(li);

////////////////459
let elem = document.querySelector('#elem');
let li = document.querySelector('#li');
let new = document.createElement('li');
new.textContent = 'new';
elem.insertBefore(new, li);

//////////////460.1
let p = document.createElement('p');
p.textContent = '!!!';
let elem = document.querySelector('#elem');
elem.insertAdjacentElement('beforeBegin', p);

//////////////460.2
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('afterEnd', p);

///////////////460.3
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('afterBegin', p);

/////////////460.4
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('beforeEnd', p);

/////////////461
let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

//////////////462
let input = document.getElementById('input');
let but = document.getElementById('but');
let div = document.getElementById('div');
but.addEventListener('click', () => {
    let clone = input.cloneNode(true);
    div.appendChild(clone);
});

///////////463.1
let elem = document.querySelector('#elem');
console.log(elem.matches('.www'));

/////////////463.2
console.log(elem.matches('p'));

/////////////465.1
let elem = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];
for (let elems of arr) {
	let li = document.createElement('li');
	li.textContent = elems;
	elem.appendChild(li);
    //465.2
    li.addEventListener('click',()=>{
        let p = document.createElement('p');
        p.textContent = li.textContent;
    })
}

/////////////466.1
let table = document.querySelector('#table');
for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');
  for (let i = 0; i < 5; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

/////////////466.2 - 3
let table = document.querySelector('#table');
for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  for (let i = 0; i < 5; i++) {
    let td = document.createElement('td');
        td.textContent = 'x';
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

////////////466.4
let table = document.querySelector('#table');
let width = document.querySelector('#width')
let height = document.querySelector('#height');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    let w = width.value;
    let h = height.value;
    for (let i = 0; i < h; i++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < w; i++) {
            let td = document.createElement('td');
            td.textContent = 'x';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
})


///////////////467
let table = document.querySelector('#table');
let k = 1; 
for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');
  for (let i = 0; i < 5; i++) {
    let td = document.createElement('td');
    td.textContent = k; 
    k++;  
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

//////////////467.2
let table = document.querySelector('#table');
let k = 2; 
for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');  
  for (let i = 0; i < 5; i++) {
    let td = document.createElement('td');
    td.textContent = k; 
    k += 2;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}


//////////468
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table = document.querySelector('#table');

for (let subArr of arr) {
  let tr = document.createElement('tr');
  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

////////////468.2
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table = document.querySelector('#table');
for (let subArr of arr) {
  let tr = document.createElement('tr');
  
  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem ** 2;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

/////////////469
let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];
let table = document.getElementById('table');
for (let elem of elems) {
  elem.addEventListener('click', function() {
    elem.remove();
  });
}

////////////////470.1
let table = document.querySelector('#table');
let btn = document.querySelector('#btn');
let tr = document.createElement('tr');

btn.addEventListener('click', function(){
    for (let i = 1; i <= 3; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }   
})
table.appendChild(tr);

/////////////470.2
let table = document.querySelector('#table');
let btn = document.querySelector('#btn');
let tr = document.createElement('tr');
let trs = document.querySelectorAll('#table tr');

btn.addEventListener('click', function(){
    for (let i = 1; i <= 3; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }   
})
table.appendChild(tr);

/////////////471
let table = document.querySelector('#table');
let tds = document.querySelectorAll('#table td');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    for (let td of tds) {
        td.textContent = +td.textContent * 2 ;
    }
})

/////////////472
let parent = document.querySelector('#parent');
let btn = document.querySelector('#button');
btn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent = 'bghjb';
    parent.appendChild(li);    
})
parent.addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
        event.target.remove();
    }
})

////////////////473
let elem   = document.querySelector('#elem');
let remove = document.querySelector('#remove');
remove.addEventListener('click', function(event) {
  elem.remove();
  event.preventDefault(); 
});

/////////////474.1
let elems = document.querySelectorAll('#parent li');
for (let elem of elems) {
  let remove = document.createElement('a');
  remove.href = '';
  remove.textContent = 'remove';
  elem.appendChild(remove); 
  remove.addEventListener('click', function(event) {
    elem.remove();
    event.preventDefault();
  });
}

//////////////474.2
let tr = document.createElement('tr');
let elems = document.querySelectorAll('#table tr');
for (let elem of elems) {
  let remove = document.createElement('a');
  remove.href = '';
  remove.textContent = 'remove';
  elem.appendChild(remove);
  remove.addEventListener('click', function(event) {
    elem.remove();
    event.preventDefault();
  });
}

////////////475
let elem = document.querySelector('#elem');
let input = document.querySelector('#input');
input.value = elem.textContent; 
input.addEventListener('input', function() {
  elem.textContent = this.value;
});

/////////////////475.2
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
  let input = document.createElement('input');
  input.value = elem.textContent;
  input.addEventListener('blur', function() {
    elem.textContent = this.value;
    this.remove(); 
  });
  elem.parentElement.appendChild(input);
});

///////////476
let elem = document.querySelector('#elem');
elem.addEventListener('click', function func() {
  let input = document.createElement('input');
  input.value = elem.textContent; 
  elem.textContent = '';
  elem.appendChild(input); 
  input.addEventListener('blur', function() {
    elem.textContent = this.value;
    elem.addEventListener('click', func); 
  });
  elem.removeEventListener('click', func);
});

/////////////477
let elems = document.querySelectorAll('#parent li');
for (let elem of elems) {
  elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem.textContent;  
    elem.textContent = '';
    elem.appendChild(input);  
    input.addEventListener('blur', function() {
      elem.textContent = this.value;
      elem.addEventListener('click', func);
    });   
    elem.removeEventListener('click', func);
  });
}

//////////////477.2
let elems = document.querySelectorAll('#table tr td');
for (let elem of elems) {
  elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem.textContent; 
    elem.textContent = '';
    elem.appendChild(input);
    input.addEventListener('blur', function() {
      elem.textContent = this.value;
      elem.addEventListener('click', func);
    });
    elem.removeEventListener('click', func);
  });
}

//////////478
let elems = document.querySelectorAll('#parent span');
for (let elem of elems) {
  elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem.textContent;
    elem.textContent = '';
    elem.appendChild(input);
    input.addEventListener('blur', function() {
      elem.textContent = this.value;
      elem.addEventListener('click', func);
    });
    elem.removeEventListener('click', func);
  });
  let remove = document.createElement('a');
  remove.href = '';
  remove.textContent = 'удалить';
  elem.appendChild(remove);
    remove.addEventListener('click', function(event) {
    elem.remove();
    event.preventDefault();
  });
}

//////////////478.2
let elems = document.querySelectorAll('#parent p');
for (let elem of elems) {
  elem.addEventListener('click', function func() {
        let span = document.createElement('span');
        span.textContent = elem.textContent;
        elem.textContent = '';
        elem.appendChild(span);
    let input = document.createElement('input');
    input.value = elem.textContent;
    elem.textContent = '';
    elem.appendChild(input);
    input.addEventListener('blur', function() {
      elem.textContent = this.value;
      elem.addEventListener('click', func);
    });
    elem.removeEventListener('click', func);
  });
  let remove = document.createElement('a');
  remove.href = '';
  remove.textContent = 'удалить';
  elem.appendChild(remove);
    remove.addEventListener('click', function(event) {
    elem.remove();
    event.preventDefault();
  });

}

///////////////////479.1 - 2
let elems = document.querySelectorAll('p');
for (let elem of elems) {
    let span = document.createElement('span');
    elem.appendChild(span);
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'зачеркнуть';
    remove.addEventListener('click', function(event) {
        elem.classList.toggle('an');
        remove.remove();
        event.preventDefault();
    });
    elem.appendChild(remove);
}

///////////////479.3 - 4
let tr = document.createElement('tr');
let elems = document.querySelectorAll('#table tr');
for (let elem of elems) {
  let remove = document.createElement('a');
  remove.href = '';
  remove.textContent = 'remove';
  elem.appendChild(remove);
  remove.addEventListener('click', function(event) {
    elem.classList.toggle('r');
    event.preventDefault();
  });
}

////////////480
let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
  elem.classList.toggle('hidden');
});

////////481
let buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', function() {
    let elem = document.querySelector('#' + this.dataset.elem);
    elem.classList.toggle('hidden');
  });
}

///////////481.2
let buttons = document.querySelectorAll('button');
let elems   = document.querySelectorAll('p');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    elems[i].classList.toggle('hidden');
  });
}

//////////481.3
let buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', function() {
    this.previousElementSibling.classList.toggle('hidden');
  });
}

/////////////482
let li = document.querySelectorAll('#parent li');
for (let l of li) {
  l.addEventListener('click', function() {
    this.classList.toggle('active');
  });
}

////////////483
let tds = document.querySelectorAll('#table td');
let color = 'color1';
for (let td of tds) {
  td.addEventListener('click', function() {
    if (color == 'color1') {
      color = 'color2'
    } else {
      color = 'color1'
    }
    this.classList.toggle(color);
  });
}

////////////484
let arr = [1, 2, 'rdd'];
let parent = document.querySelector('#parent');
for (let elem of arr){
    let li = document.createElement('li');
    li.textContent = elem;
    parent.appendChild(li);
    li.addEventListener('click', function func(){
        let input = document.createElement('input');
        input.value = elem;
        li.textContent = '';
        li.appendChild(input);
        input.addEventListener('blur', function() {
            li.textContent = this.value;
            li.addEventListener('click', func);
        });
        li.removeEventListener('click', func);   
    })

    let remove = document.createElement('a');
    remove.textContent = 'удалить';
    remove.href = '';
    remove.addEventListener('click', function(event){
        event.preventDefault();
        parent.removeChild(li);
    })
    li.appendChild(remove);
    let re = document.createElement('a');
    re.href = '';
    re.textContent = 'зачеркнуть';
    re.addEventListener('click', function(event) {
        li.classList.toggle('an');
        event.preventDefault();
    });
    li.appendChild(re);   
}

///////////484.6 - 9
let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];

let table = document.getElementById('table');

for (let em of employees) {
  let tr = document.createElement('tr');
  

  let td1 = document.createElement('td');
  td1.textContent = em.name;
  tr.appendChild(td1);
    td1.addEventListener('click', func);

  
  let td2 = document.createElement('td');
  td2.textContent = em.age;
  tr.appendChild(td2);
    td2.addEventListener('click', func);
  
  let td3 = document.createElement('td');
  td3.textContent = em.salary;
  tr.appendChild(td3);
    td3.addEventListener('click', func)
  table.appendChild(tr);

    function func(){
        let input = document.createElement('input');
        input.value = this;
        this.textContent = '';
        this.appendChild(input);
        let self = this;
        input.addEventListener('blur', function() {
            this.textContent = self.value;
            this.addEventListener('click', func);
        });
            this.removeEventListener('click', func);   
    }
     let remove = document.createElement('a');
          remove.href = '';
          remove.textContent = 'удалить';
          table.appendChild(remove);
            remove.addEventListener('click', function(event) {
            tr.remove();
                this.remove();
            event.preventDefault();
          });
        
    }
    
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let salary = document.getElementById('salary');
    let add = document.getElementById('add');
    
    add.addEventListener('click', function() {
        let obj = {
            name: name.value,
            age: age.value,
            salary: salary.value
        };
    
        employees.push(obj);
        let tr = document.createElement('tr');
        for (let key in obj) {
            let td = document.createElement('td');
            td.textContent = obj[key];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    
        name.value = '';
        age.value = '';
        salary.value = '';
    
        let remove = document.createElement('a');
          remove.href = '';
          remove.textContent = 'удалить';
          table.appendChild(remove);
            remove.addEventListener('click', function(event) {
            tr.remove();
                this.remove();
            event.preventDefault();
          });
    });
    
//////////484.10 - 13
    let employees = [
      {name: 'employee1', age: 30, salary: 400},
      {name: 'employee2', age: 31, salary: 500},
      {name: 'employee3', age: 32, salary: 600},
    ];
    let parent = document.querySelector('#parent');
    employees.forEach(function(employee) {
        let li = document.createElement('li');
        li.textContent = employee.name + ' ' + employee.age + ' ' + employee.salary;
        parent.appendChild(li);
        li.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = li.textContent; 
            li.textContent = '';
            li.appendChild(input);           
            input.addEventListener('blur', function() {
                li.textContent = this.value;
                li.addEventListener('click', func); 
            });           
            li.removeEventListener('click', func);
        });
    
        let remove = document.createElement('a');
              remove.href = '';
              remove.textContent = 'удалить';
              li.appendChild(remove);
                remove.addEventListener('click', function(event) {
                li.remove();
                event.preventDefault();
              });
        
    })
    
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let salary = document.getElementById('salary');
    let add = document.getElementById('add');
    add.addEventListener('click', function() {
        let obj = {
            name: name.value,
            age: age.value,
            salary: salary.value
        };
        employees.push(obj);
        let li = document.createElement('li');
        li.textContent = name.value + ' ' + age.value + ' ' + salary.value;
        parent.appendChild(li); 
        name.value = '';
        age.value = '';
        salary.value = '';
    })
