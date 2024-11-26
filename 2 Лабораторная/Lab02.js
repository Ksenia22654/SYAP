//задание 1
function basicOperation(operation, value1, value2) {
    
    let result;

    if(operation==='+'){
        result = value1 + value2;
    } else if (operation === '-') {
        result = value1 - value2;
    } else if (operation === '*') {
        result = value1 * value2;
    } else if (operation === '/') {
        // Чтобы избежать деления на ноль
        if (value2 !== 0) {
            result = value1 / value2;
        } else{
            result = 'Ошибка: деление на ноль';
        }
    } else {
        result = 'Ошибка: не поддерживаемая операция';  
        }
    return result;
}

let result = basicOperation('*', 5, 10); // result = 15
console.log(result);

//задание 2
function SummaN(n){
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i ** 3; // Используем оператор возведения в степень
    }

    return sum;
}

let n=SummaN(3);
console.log(n);

//задание 3
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0; // Проверка на пустой массив
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    return sum / numbers.length; 
}

let numbers = calculateAverage([1,75,20,4,6]);
console.log(numbers); 

//задание 4
function String(str){

// Фильтруем строку, оставляя только английские буквы
const filteredStr = str.replace(/[^a-zA-Z]/g, '');
// Переворачиваем отфильтрованную строку
return filteredStr.split('').reverse().join('');
}
console.log(String("JavaScript"));
console.log(String("JavaScr53э? ipt")); 

//задание 5
function operationN(n,s){
    if (n <= 0) {
        return ''; 
    }
    return s.repeat(n); 
}
console.log(operationN(3, "abc")); 
console.log(operationN(0, "hello")); 
console.log(operationN(-2, "test"));

//задание 6
function Array2(arr1,arr2){
    return arr1.filter(item => !arr2.includes(item));
}
const array1 = ["apple", "banana", "orange"];
const array2 = ["banana", "kiwi"];
const result3 = Array2(array1, array2); 
console.log(result3);