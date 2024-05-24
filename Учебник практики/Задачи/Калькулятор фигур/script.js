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

function calculateCircleProperties(radius) {
    let area = Math.PI * radius * radius;
    let circumference = 2 * Math.PI * radius;
  
    return { area, circumference };
  }
  
  let radius = 5;
  let properties = calculateCircleProperties(4);
  console.log("Площадь круга: " + properties.area);
  console.log("Длина окружности: " + properties.circumference);

Debug console:
Площадь круга: 50.26548245743669
Длина окружности: 25.132741228718345

/////////////////////////1.4

function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  const sideA = 3;
  const sideB = 4;
  const sideC = 5;
  const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  console.log(triangleArea);
  Debug console: 6
