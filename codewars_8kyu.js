// -----1-----
function multiply(a, b){
    return a * b
}

// -----2-----
function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0) {
        return true
    } else {
        return false
    }
}

// -----3-----
function numberToString(num) {
    return String(num);
}

// -----4-----
const areaOrPerimeter = function(l , w) {
    return l ===w ? l * w : (l + w) * 2
};

// -----5-----
function sumStr(a,b) {
    return String(+a + +b);
}

// -----6-----
function removeChar(str){
    return str.slice(1, str.length - 1)
};

// -----7-----
function points(games) {
    let count = 0;
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {
            count += 3;
        } else if (games[i][0] < games[i][2]) {
            count;
        } else if (games[i][0] = games[i][2]) {
            count++;
        }
    }
    return count;
}

// -----8-----
function abbrevName(name){
    const arr = name.split(" ");
    return `${arr[0][0]}.${arr[1][0]}`.toUpperCase();
    // code away
}

// -----9-----
function sumMul(n,m){
    let sum = 0;
    if (m <= 0 || n <= 0) {
        return "INVALID"
    }

    for (let i = 0; i < m; i++) {
        if (i % n === 0) {
            sum += i;
        }
    }
    return sum;
}

// -----10-----
function reverseWords(str){
    const arr = str.split(" ");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr.join(" ");
}

// -----11-----
function remove (string) {
    const arr = string.slice(" ");
    const newArr = [];
    if (arr[arr.length - 1] === "!") {
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(arr[i]);
        }
    } else {
        for (let j = 0; j < arr.length; j++) {
            newArr.push(arr[j]);
        }
    }
    return newArr.join("");
}

// -----12-----
function remove (string) {
    let regExp = /!/g;
    let newStr = string.replace(regExp,"");
    newStr += "!";
    return newStr;
}

// -----13-----
function findNeedle(haystack) {
    let i = haystack.indexOf("needle");
    let string = `found the needle at position ${i}`;
    return string;
}

// -----14-----
function solution(str){
    return str.split("").reverse().join("");
}

// -----15-----
function powersOfTwo(n){
    const arr = [];
    for(let i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i));
    }
    return arr;
}

// -----16-----
function remainder(n, m){
    let x, y;
    if( n > m) {
        x = n;
        y = m;
    } else {
        y = n;
        x = m;
    }
    let rem = x % y;
    return rem;
}

// -----16-----
function isPalindrome(x) {
    const arr = x.split("");
    console.log(arr);
    const newArr = arr.reverse();
    console.log(newArr);
    let newX = newArr.join("");
    console.log(newX);
    return x.toLowerCase() === newX.toLowerCase() ? true : false;
    // your code here
}


// -----17-----
const reverseSeq = n => {
    const arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};


// -----18-----
function repeatStr (n, s) {
    return s.repeat(n);
}


// -----19-----
function hello(name) {
    console.log(name);
    if(name !== "" && name !== undefined) {
        let str = name[0].toUpperCase() + name.slice(1).toLowerCase();
        return `Hello, ${str}\!`;
    } else {
        return "Hello, World!";
    }
}


// -----20-----
function even_or_odd(number) {
    if(number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}


// -----21-----
function positiveSum(arr) {
    return arr.filter(elem => elem > 0).reduce((acc, elem) => acc + elem, 0);
}


// -----22-----
function makeNegative(num) {
    if(num <= 0) {
        return num;
    } else {
        return num * (-1);
    }
}


// -----23-----
function opposite(number) {
    return number * (-1);
}


// -----24-----
function boolToWord( bool ){
    return bool ? "Yes" : "No"
}


// -----25-----
var summation = function (num) {
    let result = 0;
    for(let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}


// -----26-----
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}


// -----27-----
function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0) {
        return [];
    }
    let isPositiv = 0;
    let sumNegative = 0;
    input.forEach(elem => {
        if(elem > 0) {
            isPositiv++;
        } else {
            sumNegative += elem;
        }
    })
    return [isPositiv, sumNegative];
}


// -----28-----
function noSpace(x){
    return x.split(" ").join("");
}


// -----29-----
function squareSum(numbers){
    return numbers.reduce((acc, elem) => Math.pow(elem, 2) + acc, 0)
}


// -----30-----
function countSheeps(arrayOfSheep) {
    let counter = 0;
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i] === true) {
            counter++;
        }
    }
    return counter;
}


// -----31-----
function take(arr, n) {
    if(arr.length === 0) {
        return arr;
    }
    if(n > arr.length) {
        n = arr.length;
    }
    const newArr = [];
    for(let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}


// -----32-----
function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}


// -----33-----
function greet() {
    return "hello world!"
}


// -----34-----
function litres(time) {
    return Math.floor(time * 0.5);
}


// -----35-----
function century(year) {
    // Finish this :)
    return Math.ceil(year/100);
}


// -----36-----
var stringToNumber = function(str){
    return Number(str);
}


// -----37-----
function basicOp(operation, value1, value2)
{
    return eval(`${value1} ${operation} ${value2}`);
}


// -----38-----
function digitize(n) {
    const arr = String(n).split("");
    const newArr = [];
    arr.forEach(elem => newArr.unshift(+elem))
    return newArr;
}


// -----39-----
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}


// -----40-----
function maps(x){
    return x.map(elem => elem * 2);
}


// -----41-----
function findDifference(a, b) {
    let sum1 = a.reduce((acc, elem) => acc * elem, 1);
    let sum2 = b.reduce((acc, elem) => acc * elem, 1);
    if(sum1 > sum2) {
        return (sum1-sum2)
    } else {
        return (sum1-sum2) * (-1);
    }
}


// -----42-----
var min = function(list){
    list.sort((a,b) => a - b)
    return list[0];
}

var max = function(list){
    list.sort((a,b) => a - b)
    return list[list.length - 1];
}


// -----43-----
function between(a, b) {
    const arr = [];
    for(let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}


// -----44-----
function reverseList(list) {
    return list.reverse();
}


// -----45-----
function invert(array) {
    const newArr = [];
    array.forEach((elem) => newArr.push(elem * (-1)));
    return newArr;
}


// -----46-----
function past(h, m, s){
    return (h * 3600 + m * 60 + s) * 1000
}


// -----47-----
function find_average(array) {
    if(array.length === 0) {
        return 0
    }
    const sum = array.reduce((acc, elem) => acc + elem, 0);
    return sum/array.length;
}


// -----48-----
function getAverage(marks){
    if(marks.length === 0) {
        return 0
    }
    const sum = marks.reduce((acc, elem) => acc + elem, 0);
    return Math.floor(sum/marks.length);
}


// -----49-----
function check(a, x) {
    if(a.indexOf(x) === -1) {
        return false;
    } else {
        return true
    }
}


// -----50-----
function paperwork(n, m) {
    if(n < 0 || m < 0) {
        return 0;
    } else {
        return n * m;
    }
}


// -----51-----
function smash (words) {
    return words.join(" ")
};


// -----52-----
function doubleInteger(i) {
    return i * 2;
}


// -----53-----
function booleanToString(b){
    return String(b);
}


// -----54-----
function greet(name){
    if(name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}


// -----55-----
function makeUpperCase(str) {
    return str.toUpperCase();
}