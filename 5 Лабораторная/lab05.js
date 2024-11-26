// Функция, которая возвращает функцию для расчета объема параллелепипеда
const calcVolume = length => width => height => length * width * height;

// Пример использования для неоднократного расчета
const volumeWithLength5 = calcVolume(5);
console.log(volumeWithLength5(2)(3)); // Вывод: 30
console.log(volumeWithLength5(4)(6)); // Вывод: 120
function* moveGenerator(x, y) {
  while (true) {
      let direction = prompt("Введите команду (left, right, up, down):").toLowerCase();
      for (let i = 0; i < 10; i++) {
          switch (direction) {
              case "left":
                  x--;
                  break;
              case "right":
                  x++;
                  break;
              case "up":
                  y++;
                  break;
              case "down":
                  y--;
                  break;
              default:
                  console.log("Неизвестная команда");
                  return;
          }
          yield { x, y };
      }
  }
}

const generator = moveGenerator(0, 0);
while (true) {
  const { value } = generator.next();
  console.log(`Новые координаты: x = ${value.x}, y = ${value.y}`);
}
// Объявляем глобальные переменные и функции
var globalVar = "Я глобальная переменная";
function globalFunction() {
    return "Я глобальная функция";
}

// Получаем значения глобальных переменных и функций
console.log(window.globalVar); // Вывод: "Я глобальная переменная"
console.log(window.globalFunction()); // Вывод: "Я глобальная функция"

// Переопределяем переменные и функции через глобальный объект window
window.globalVar = "Новое значение глобальной переменной";
window.globalFunction = function() {
    return "Новое значение глобальной функции";
};

// Проверяем переопределение
console.log(globalVar); // Вывод: "Новое значение глобальной переменной"
console.log(globalFunction()); // Вывод: "Новое значение глобальной функции"
