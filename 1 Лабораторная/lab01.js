//1 задача
let a=5; //int
let name="Name"; //string
let i=0; //int
let double=0.23; //float
let result=1/0; //Infinity
let answer=true; //bool
let no=null; //не тип данный,пустое значение
typeof no;
console.log(result);

//2 задача
var k=5,l1=45,l2=21; //стороны квад и четыр
var Sl; //площадь прямоугольника
Sl=l1*l2;
var Sk; //площадь квадрата
Sk=Math.pow(5,2);
var an=Sl/Sk; //ответ
console.log('результат 2 задачи:\t' + an);

//3 задача
let i3=2;
let a3=++i;
let b3=i++;   
if(a3 > b3){
    console.log('a3 больше чем b3');
}
else if(a3 < b3){
    console.log('b3 больше чем a3');
}
else if(a3 == b3){
    console.log('a3 равно b3');
}
else{
    console.log('некорректный ввод');
}

//4 задача
const result1 = "Котик" === "котик" ? "равны" : "не равны"; //не равны изза регистра
const result2 = "Котик" === "китик" ? "равны" : "не равны"; //не равны изза различия в символе
const result3 = "Кот" === "Котик" ? "равны" : "не равны"; //не равны изза длины
const result4 = "Привет" === "Пока" ? "равны" : "не равны"; //не равны изза различия строк
const result5 = 73 == "53" ? "равны" : "не равны"; //не равны
const result6 = false == 0 ? "равны" : "не равны"; //равны true это 1
const result7 = 54 == true ? "равны" : "не равны"; //не равны true это 1
const result8 = 123 == false ? "равны" : "не равны"; //не равны false это 0
const result9 = true == "3" ? "равны" : "не равны"; //не равны true это 1
const result10 = 3 == "5мм" ? "равны" : "не равны"; //не равны, 5мм это строка не переведенная в число
const result11 = 8 == "-2" ? "равны" : "не равны"; //не равны числа
const result12 = 34 == "34" ? "равны" : "не равны"; //равны строка переведена в число
const result13 = null == undefined ? "равны" : "не равны"; //равны при ==

console.log(result1);  // "не равны"
console.log(result2);  // "не равны"
console.log(result3);  // "не равны"
console.log(result4);  // "не равны"
console.log(result5);  // "не равны"
console.log(result6);  // "равны"
console.log(result7);  // "не равны"
console.log(result8);  // "не равны"
console.log(result9);  // "не равны"
console.log(result10); // "не равны"
console.log(result11); // "не равны"
console.log(result12); // "равны"
console.log(result13); // "равны"

//5 задача
const teacherName = "Дубаневич Ксения Алексеевна".toLowerCase(); //приводит к нижнему регистру

const userInput = prompt("Введите ваше имя").toLowerCase(); //через окно просим имя у пользователя и приводим к нижнему регистру

// Проверка имени пользователя с именем преподавателя
if (userInput.includes(teacherName)) {
    alert("Введенные пользователем данные верные.");
} else {
    alert("Введенные данные не совпадают.");
}

//6 задача
// Результаты экзаменов: true означает, что экзамен сдан, false не сдан
const examRussian = true;  
const examMath = true;     
const examEnglish = false; 

// Проверка всех экзаменов
if (examRussian && examMath && examEnglish) {
    console.log("Студента переведут на следующий курс.");
} else if (!examRussian && !examMath && !examEnglish) {
    console.log("Студента отчислят.");
} else {
    console.log("Студента ожидает пересдача.");
}

//7 задача
const res1 = true + true; //true=1
const res2 = 0 + "5"; //число превр в строку
const res3 = 5 + "мм"; //число превр в строку
const res4 = 8 / Infinity; //Inf это бесконечность
const res5 = 9 * "\n9"; // строка превр в число
const res6 = null - 1; //null=0
const res7 = "5" - 2; //строка превр в число
const res8 = "5px" - 3; //строка не стала числом
const res9 = true - 3; //true=1
const res10 = 7 || 0; // или возвращает первое истинное значение 

console.log(res1); // 2
console.log(res2); // "05"
console.log(res3); // "5мм"
console.log(res4); // 0
console.log(res5); // 81
console.log(res6); // -1
console.log(res7); // 3
console.log(res8); // NaN
console.log(res9); // -2
console.log(res10); // 7

//8 задача
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        // Четное число - прибавляем 2
        console.log('число\t' + (i + 2) + '\tчетное');
    } else {
        // Нечетное число - преобразуем к строке вида "Xмм"
        console.log('число\t' + '${i}мм'+'\tнечетное');
    }
}

//9 задача
//через объект
const daysOfWeek = { //ключи
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
};
// Ввод пользователя
const dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));
// Получение и вывод дня недели
console.log(daysOfWeek[dayNumber]||"Некорректный номер дня недели");

// через массив 
const daysOfWeekArray = [
    "Понедельник",  
    "Вторник",      
    "Среда",        
    "Четверг",      
    "Пятница",      
    "Суббота",      
    "Воскресенье"   
];
// Ввод пользователя
const dayIndex = parseInt(prompt("Введите номер дня недели (1-7):"));
// Получение и вывод дня недели
console.log(daysOfWeekArray[dayIndex - 1] || "Некорректный номер дня недели");

//10 задача
function createString(param1 = "привет", param2, param3) {
    return '${param1} ${param2} ${param3}';
}
// Второй параметр и значение третьего параметра вводится пользователем
const param2 = "мир"; 
const param3 = prompt("Введите третий параметр:");
// Вызов функции
const res = createString(undefined, param2, param3);
// Вывод результата
console.log(res);

//11 задача
// Function Declaration
function params(a, b) {
    if (a === b) {
        // Если стороны равны, это квадрат
        return 4 * a; // Периметр квадрата
    } else {
        // Если стороны не равны, это прямоугольник
        return a * b; // Площадь прямоугольника
    }
}
console.log(params(5, 5)); 
console.log(params(5, 10)); 

// Function Expression
const params2 = function(a, b) {
    if (a === b) {
        // Если стороны равны, это квадрат
        return 4 * a; // Периметр квадрата
    } else {
        // Если стороны не равны, это прямоугольник
        return a * b; // Площадь прямоугольника
    }
};
console.log(params(5, 5)); 
console.log(params(5, 10)); 

// Стрелочная функция
const params3 = (a, b) => {
    if (a === b) {
        // Если стороны равны, это квадрат
        return 4 * a; // Периметр квадрата
    } else {
        // Если стороны не равны, это прямоугольник
        return a * b; // Площадь прямоугольника
    }
};
console.log(params(5, 5)); 
console.log(params(5, 10));