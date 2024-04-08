/////////////////////1.1

// Функция для нахождения площади квадрата
function squareArea(side) {
    return side * side;
}

// Функция для нахождения периметра квадрата
function squarePerimeter(side) {
    return 4 * side;
}

// Пример использования функций
const sideLength = 5;
const area = squareArea(sideLength);
const perimeter = squarePerimeter(sideLength);

console.log(`Площадь квадрата: ${area}`);
console.log(`Периметр квадрата: ${perimeter}`);
////////////////////////1.2

// Функция для вычисления площади прямоугольника
function calculateArea(length, width) {
    return length * width;
}

// Функция для вычисления периметра прямоугольника
function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

// Пример использования функций
const length = 5; // Длина
const width = 3; // Ширина

const area = calculateArea(length, width);
const perimeter = calculatePerimeter(length, width);

console.log(`Площадь прямоугольника: ${area}`);
console.log(`Периметр прямоугольника: ${perimeter}`);
///////////////////////1.3

/////////////////////////1.4
