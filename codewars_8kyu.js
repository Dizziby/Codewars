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


// -----56-----
function fakeBin(x){
    let newString = "";
    for (let el of x) {
        if(el < 5) {
            newString += "0";
        } else {
            newString += "1";
        }
    }
    return newString;
}


// -----57-----
function hero(bullets, dragons){
    if(bullets >= 2 * dragons) {
        return true
    } else {
        return false
    }
}


// -----58-----
function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    switch (true) {
        case bmi <= 18.5:
            return "Underweight";
            break;
        case bmi <= 25:
            return "Normal";
            break;
        case bmi <= 30:
            return "Overweight";
            break;
        default:
            return "Obese";
            break;
    }
}


// -----59-----
function DNAtoRNA(dna) {
    let rna = "";
    for(el of dna) {
        if(el === "T") {
            rna += "U"
        } else {
            rna += el
        }
    }
    return rna
}


// -----60-----
function sum (numbers) {
    "use strict";
    if(numbers.length === 0) {
        return 0;
    } else {
        return numbers.reduce((acc, el) => acc + el, 0);
    }
};


// -----61-----
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for(let i = 0; i < geese.length; i++) {
        birds = birds.filter(el => {
            if(el === geese[i]) {
                return false
            } else {
                return true
            }
        })
    }
    return birds;
}


// -----62-----
function squareArea(A){
    return (Math.floor(Math.pow((A*2/Math.PI), 2)*100))/100;
}


// -----63-----
function oddCount(n){
    return Math.floor(n/2);
}


// -----64-----
function arrayPlusArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    return newArr.reduce((acc, el) => acc + el, 0);
}


// -----65-----
function monkeyCount(n) {
    const arr = [];
    for(let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}


// -----66-----
function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true
    } else {
        return false
    }
}


// -----67-----
function grow(x){
    return x.reduce((acc, el) => acc * el, 1)
}


// -----68-----
function simpleMultiplication(number) {
    if(number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}


// -----69-----
function rentalCarCost(d) {
    if(d >= 7) {
        return d * 40 - 50
    } else if (d >= 3 && d < 7) {
        return d * 40 - 20
    } else {
        return d * 40
    }
}


// -----70-----
function betterThanAverage(classPoints, yourPoints) {
    let middle = classPoints.reduce((acc, el) => acc + el, yourPoints);
    if(yourPoints >= (middle / (classPoints.length + 1))) {
        return true;
    } else {
        return false;
    }
}


// -----71-----
function pillars(num_pill, dist, width) {
    if (num_pill === 1) {
        return 0;
    } else {
        return (num_pill - 1) * dist * 100 + width * (num_pill - 2);
    }
}


// -----72-----
function bonusTime(salary, bonus) {
    if(bonus) {
        return `\u00A3${salary * 10}`
    } else {
        return `\u00A3${salary}`
    }
}


// -----73-----
function isDivideBy(number, a, b) {
    if(number % a === 0 && number % b === 0) {
        return true
    } else {
        return false
    }
}


// -----74-----
function sumMix(x){
    return x.reduce((acc, el) => acc + +el, 0)
}


// -----75-----
var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) {
        str += `${i} sheep...`
    }
    return str
}


// -----76-----
function doubleChar(str) {
    const arr = str.split("");
    const newArr =  arr.map(el => el.repeat(2));
    return newArr.join("");
}


// -----77-----
function enough(cap, on, wait) {
    if (cap - on - wait >= 0) {
        return 0
    } else {
        return (cap - on - wait) * (-1)
    }
}


// -----78-----
function feast(beast, dish) {
    if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
        return true
    } else {
        return false
    }
}


// -----79-----
function divisibleBy(numbers, divisor){
    return numbers.filter(el => el % divisor === 0)
}


// -----80-----
function getGrade (s1, s2, s3) {
    let sum = (s1 + s2 + s3) / 3
    if(sum >= 90 && sum <= 100) {
        return "A"
    }
    if(sum >= 80 && sum < 90) {
        return "B"
    }
    if(sum >= 70 && sum < 80) {
        return "C"
    }
    if(sum >= 60 && sum < 70) {
        return "D"
    }
    if(sum >= 0 && sum < 60) {
        return "F"
    }
}


// -----81-----
function countBy(x, n) {
    let z = [];
    for(let i = 1; z.length < n; i++) {
        if(i % x === 0) {
            z.push(i);
        }
    }
    return z;
}


// -----82-----
function index(array, n){
    if(n > array.length - 1) {
        return -1
    } else {
        return Math.pow(array[n], n)
    }
}


// -----83-----
function checkAlive (health) {
    if (health <= 0) {
        return false
    } else  {
        return true
    }
}


// -----84-----
function generateRange(min, max, step){
    const arr = [];
    for(let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}


// -----85-----
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}


// -----86-----
function stringToArray(string){
    return string.split(" ");
}


// -----87-----
function removeExclamationMarks(s) {
    return s.replace(/!/g, "");
}


// -----88-----
function areYouPlayingBanjo(name) {
    const regExp = /^r/gi;
    if(regExp.test(name)) {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}


// -----89-----
function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name = 'Mercury'
            break
        case 2:
            name = 'Venus'
            break
        case 3:
            name = 'Earth'
            break
        case 4:
            name = 'Mars'
            break
        case 5:
            name = 'Jupiter'
            break
        case 6:
            name = 'Saturn'
            break
        case 7:
            name = 'Uranus'
            break
        case 8:
            name = 'Neptune'
            break
    }
    return name;
}


// -----90-----
function problem(x){
    if(typeof x === "string") {
        return "Error"
    } else {
        return x * 50 + 6
    }
}


// -----91-----
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}


// -----92-----
function testEven(n) {
    if(n % 2 === 0) {
        return true
    } else {
        return false
    }
}


// -----93-----
function defineSuit(card) {
    switch(card[card.length - 1]) {
        case "♣":
            return 'clubs';
            break;
        case "♦":
            return 'diamonds';
            break;
        case "♥":
            return 'hearts';
            break;
        case "♠":
            return 'spades';
            break;
    }
}


// -----94-----
function remove(string) {
    return string.replace(/\!+$/g, "");
}


// -----95-----
function shortcut (string) {
    return string.replace(/[aeiou]/gi, "");
}


// -----96-----
function solution(a, b){
    if(a.length > b.length) {
        return b + a + b
    } else {
        return a + b + a
    }
}


// -----97-----
function greet (name, owner) {
    if(name === owner) {
        return "Hello boss"
    } else {
        return "Hello guest"
    }
}


// -----98-----
function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600)
}


// -----99-----
function setAlarm(employed, vacation){
    if(vacation === true) {
        return false
    } else if(vacation === false && employed === false) {
        return false
    }
    return true
}


// -----100-----
function otherAngle(a, b) {
    return 180 - a - b;
}


// -----101-----
String.prototype.toAlternatingCase = function () {
    let newStr = ""
    for(let i = 0; i < this.length; i++) {
        if(this[i].toUpperCase() ===  this[i]) {
            newStr += this[i].toLowerCase()
        } else {
            newStr += this[i].toUpperCase()
        }
    }
    return newStr
}


// -----102-----
const quarterOf = (month) => {
    if(month <= 3) {
        return 1
    } else if(month <= 6) {
        return 2
    } else if(month <= 9) {
        return 3
    }
    return 4
}


// -----103-----
function hoopCount (n) {
    if(n >= 10) {
        return "Great, now move on to tricks"
    }
    return "Keep at it until you get it"
}


// -----104-----
function greet(language) {
    const obj = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    for(let key in obj) {
        if(language === key) {
            return obj[key]
        }
    }
    return 'Welcome'
}


// -----105-----
function strCount(str, letter){
    let regExp = new RegExp (letter, "g")
    const arr = str.match(regExp) || []
    return arr.length
}