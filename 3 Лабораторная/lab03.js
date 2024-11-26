// task 1
let array1 = [1, [1, 2, [3, 4]], [2, 4]];
let array2 = [4, [4, 5, [1, 2]], 6, 7];
let mergedArray;
mergedArray = array1.reduce((sum, current) => sum.concat(current), []);
mergedArray = mergedArray.concat(array2.reduce((sum, current) => sum.concat(current), []));
alert(mergedArray);
console.log('Merged Array:', mergedArray);

// task 2
function calcSum(arr) {
    return arr.reduce((sum, cur) => {
        if (Array.isArray(cur)) {
            return sum = sum + calcSum(cur);
        } else {
            return sum = sum + cur;
        }
    }, 0);
}
alert(calcSum(array1));
console.log('Сумма всех элементов массива array1:', calcSum(array1));

// task 3
let students = [
    { name: "John", age: 19, groupId: 1 },
    { name: "Alice", age: 20, groupId: 2 },
    { name: "Bob", age: 16, groupId: 1 },
    { name: "Eva", age: 18, groupId: 2 },
    { name: "Mike", age: 21, groupId: 1 },
];

function task3(students) {
    return students.reduce((result, cur) => {
        if (cur.age > 17) {
            if (result[cur.groupId]) {
                result[cur.groupId].push(cur);
            } else {
                result[cur.groupId] = [cur];
            }
        }
        return result;
    }, {});
}
let result = task3(students);
console.log('Students older than 17 grouped by groupId:', result);

// task 4
total1 = 'ABC';
total2 = 'ABC';
total1 = Array.from(total1, (char) => char.charCodeAt(0));
total2 = Array.from(total2, (char) => char.charCodeAt(0));
total1 = total1.join("");
total2 = total2.join("");
total2 = total1.replace('7', '1');
console.log('Total1 (ASCII):', total1);
console.log('Total2 (modified ASCII):', total2);
console.log('Difference between Total1 and Total2:', total1 - total2);

// task 5
function extend(obj1, obj2) { //объкдиняет свойства двух объектов 
    let mergedObj = Object.assign({}, obj1);//копируем свойства
    for (let key in obj2) {
        if (!(key in mergedObj)) {
            mergedObj[key] = obj2[key];
        }
    }
    return mergedObj;
}
console.log('Extend objects:', extend({ a: 1, b: 2 }, { c: 3 }));
console.log('Extend objects:', extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 }));
console.log('Extend objects:', extend({ a: 1, b: 2 }, { a: 3, c: 3 }));

// task 6
function buildTower(floorCount) {
    let spaces;
    let stars;
    let floorStr;
    for (let floor = 1; floor <= floorCount; floor++) {
        spaces = ' '.repeat(floorCount - floor);
        stars = '*'.repeat(floor * 2 - 1);
        floorStr = spaces + stars + spaces;
        console.log(floorStr);
    }
}
buildTower(10);