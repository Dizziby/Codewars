// -----1-----
function getCount(str) {
    var vowelsCount = 0;
    let regExp = /[aeiou]/gi;
    let arr = str.match(regExp);
    if (arr === null) {
        arr = [];
    }
    vowelsCount = arr.length;
    return vowelsCount;
}


// -----2-----
function reverseWords(str) {
    const arr = str.split(" ");
    console.log(arr);
    const newArr = []
    arr.forEach(elem => newArr.push(elem.split("").reverse().join("")));
    console.log(newArr);
    return newArr.join(" ");

}


// -----3-----
function highAndLow(numbers) {
    const arr = numbers.split(" ");
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return `${max} ${min}`;
}


// -----4-----
function matrix(array) {
    array.forEach((elem, index) => {
        for (let i = 0; i < elem.length; i++) {
            if (index === i && elem[i] < 0) {
                elem[i] = 0;
            } else if (index === i) {
                elem[i] = 1;
            }
        }
    });
    return array;
}


// -----5-----
function vaporcode(string) {
    const arr = string.toUpperCase().split(" ").join("").split("");
    console.log(arr);
    let newString = arr.join("  ");
    return newString;
}


// -----6-----
function vowelIndices(word) {
    let regExp = /[aeiouy]/i;
    const arr = word.split("");
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        if (regExp.test(arr[i])) {
            results.push(i + 1);
        }
    }
    return results;
}


// -----7-----
function validatePIN(pin) {
    let regExp = /^\d{4}$|^\d{6}$/;
    return regExp.test(pin);
}


// -----8-----
function modifiedSum(a, n) {
    return a.reduce((acc, cur) => acc + Math.pow(cur, n) - cur, 0);
}


// -----9-----
function squareDigits(num) {
    const arr = String(num).split("");
    const newArr = [];
    arr.forEach(elem => newArr.push(Math.pow(Number(elem), 2)));
    return +newArr.join("");
}


// -----10-----
var isSquare = function (n) {
    let s = Math.sqrt(n);
    if (n % s === 0 || n === 0) {
        return true;
    } else {
        return false;
    }
}


// -----11-----
function getSum(a, b) {
    let sum = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        sum = a;
    }
    return sum;
}


// -----12-----
function filter_list(l) {
    const arr = l.filter(elem => typeof (elem) === 'number');
    return arr;
}


// -----13-----
function sumTwoSmallestNumbers(numbers) {
    const arr = numbers.sort((a, b) => a - b);
    return arr[0] + arr[1];
}


// -----14-----
function getLargerNumbers(a, b) {
    const newArr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= b[i]) {
            newArr.push(a[i]);
        } else if (a[i] < b[i]) {
            newArr.push(b[i]);
        }
    }
    return newArr;
}


// -----15-----
function openOrSenior(data) {
    const result = [];
    data.forEach(elem => {
        if (elem[0] >= 55 && elem[1] > 7) {
            result.push("Senior")
        } else {
            result.push("Open")
        }
    })
    return result;
}


// -----16-----
function maskify(cc) {
    const arr = cc.split("");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < (arr.length - 4)) {
            newArr.push("#");
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join("");
}


// -----17-----
function getMiddle(s) {
    let newAtr = "";
    if (s.length % 2 === 0) {
        newStr = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
        newStr = s[Math.floor(s.length / 2)];
    }
    return newStr;
}


// -----18-----
function descendingOrder(n) {
    const arr = String(n).split("");
    const newArr = arr.sort((a, b) => b - a);
    return Number(newArr.join(""));
}


// -----19-----
function XO(str) {
    let regExp1 = /x/gi;
    let regExp2 = /o/gi;
    const arr1 = str.match(regExp1);
    const arr2 = str.match(regExp2);
    if (arr1 === null && arr2 === null) {
        return true
    } else if (arr1 !== null && arr2 !== null && arr1.length === arr2.length) {
        return true;
    } else {
        return false;
    }
}


// -----20-----
function friend(friends) {
    return friends.filter(elem => elem.length === 4)
}


// -----21-----
function findNextSquare(sq) {
    if (Math.sqrt(sq) === Math.floor(Math.sqrt(sq))) {
        return Math.pow((Math.sqrt(sq) + 1), 2)
    } else {
        return -1;
    }
}


// -----22-----
var number = function (busStops) {
    let people = 0;
    for (let i = 0; i < busStops.length; i++) {
        people = people + busStops[i][0] - busStops[i][1];
    }
    return people;
}


// -----23-----
var number = function (array) {
    const newArr = [];
    if (array.length === 0) {
        return newArr;
    }
    array.forEach((elem, index) => newArr.push(`${index + 1}: ${elem}`))
    return newArr;
}


// -----24-----
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
};


// -----25-----
function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}


// -----26-----
function reverseLetter(str) {
    let regExp = /[a-z]/g;
    const arr = str.match(regExp);
    return arr.reverse().join("");
}


// -----27-----
function sumDigits(number) {
    if (number < 0) {
        number = number * (-1);
    }
    const arr = String(number).split("")
    console.log(arr);
    return arr.reduce((acc, elem) => acc + +elem, 0);
}


// -----28-----
function checkExam(array1, array2) {
    let points = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            points += 4;
        } else if (array1[i] !== array2[i] && array2[i] !== "") {
            points--;
        }
    }
    if (points < 0) {
        points = 0;
    }
    return points;
}


// -----29-----
var capitals = function (word) {
    const arr = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === word[i]) {
            arr.push(i);
        }
    }
    return arr;
};


// -----30-----
function smallEnough(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false;
        }
    }
    return true;
}


// -----31-----
function sum(...args) {
    return args.reduce((acc, el) => acc + el, 0)
}


// -----32-----
function findShort(s) {
    const arr = s.split(" ");
    const arrSort = arr.sort((a, b) => a.length - b.length);
    return arrSort[0].length;
}


// -----33-----
function remove(string) {
    let regExp = /!*$/;
    const arr = string.split(" ");
    const arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(arr[i].replace(regExp, ""));
    }
    return arrNew.join(" ");
}


// -----34-----
function disemvowel(str) {
    return str.replace(/[aeuoi]/gi, "");
}


// -----35-----
String.prototype.toJadenCase = function () {
    const arr = this.split(" ");
    const newArr = arr.map(el => el[0].toUpperCase() + el.slice(1));
    return newArr.join(" ");
};


// -----36-----
function getDivisorsCnt(n) {
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            counter++;
        }
    }
    return counter;
}


// -----37-----
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(el => el % 2 === 0)
}


// -----38-----
"use strict";

function flattenAndSort(array) {
    const newArr = [].concat(...array);
    return newArr.sort((a, b) => a - b);
}


// -----39-----
function shorter_reverse_longer(a, b) {
    let newString = "";
    if (a.length >= b.length) {
        const arr = a.split("");
        let newA = arr.reverse().join("");
        newString = b + newA + b;
    } else {
        const arr = b.split("");
        let newB = arr.reverse().join("");
        newString = a + newB + a;
    }
    return newString;
}


// -----40-----
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    } else if (n === 1) {
        return true;
    } else {
        if (n / 2 === 2) {
            return true;
        } else {
            return isPowerOfTwo(n / 2);
        }
    }
}


// -----41-----
function solution(nums) {
    if (nums === null || nums.length === 0) {
        return [];
    } else {
        return nums.sort((a, b) => a - b);
    }
}


// -----42-----
function isIsogram(str) {
    if (str.length === 0) {
        return true;
    }
    const arr = [];
    for (let el of str) {
        let elLowerCase = el.toLowerCase();
        if (arr.indexOf(elLowerCase) === -1) {
            arr.push(elLowerCase);
        } else {
            return false;
        }
    }
    return true;
}


// -----43-----
function DNAStrand(dna) {
    let newStr = "";
    for (let el of dna) {
        switch (el) {
            case "A":
                newStr += "T";
                break;
            case "T":
                newStr += "A";
                break;
            case "G":
                newStr += "C";
                break;
            case "C":
                newStr += "G";
                break;
        }
    }
    return newStr;
}


// -----44-----
function oddOrEven(array) {
    let sum = array.reduce((acc, el) => acc + el, 0)
    if (sum % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}


// -----45-----
function noOdds(values) {
    const arr = [];
    for (let value of values) {
        if (value % 2 === 0) {
            arr.push(value)
        }
    }
    return arr;
}


// -----46-----
function orderFood(list) {
    const results = {};
    list.forEach(el => {
        if (results[el.meal] === undefined) {
            results[el.meal] = 1;
        } else {
            results[el.meal]++;
        }
    });
    return results;
}


// -----47-----
function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}


// -----48-----
function rowWeights(array) {
    let sum1 = 0;
    let sum2 = 0;
    array.forEach((el, index) => {
        if (index % 2 == 0) {
            sum1 += el;
        } else {
            sum2 += el;
        }
    })
    return [sum1, sum2];
}


// -----49-----
function cookingTime(eggs) {
    let saucepan = Math.floor(eggs / 8)
    if (eggs === 0) {
        return 0;
    } else if (eggs % 8 === 0) {
        return saucepan * 5;
    } else {
        return saucepan * 5 + 5;
    }
}


// -----50-----
function bump(x) {
    const arr = x.match(/n/gi);
    if (arr === null || arr.length <= 15) {
        return "Woohoo!"
    } else {
        return "Car Dead"
    }
}


// -----51-----
function nbYear(p0, percent, aug, p) {
    let i = 0;
    while (p0 < p) {
        p0 = p0 + Math.floor(percent * p0 * 0.01) + aug;
        i++;
    }
    return i;
}


// -----52-----
function minMax(arr) {
    const newArr = arr.sort((a, b) => a - b);
    return [newArr[0], newArr[newArr.length - 1]]; // fix me!
}


// -----53-----
function removeDuplicateWords(s) {
    const arr = s.split(" ");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(" ");
}


// -----54-----
function reverseNumber(n) {
    if (n >= 0) {
        return Number(String(n).split("").reverse().join(""));
    } else {
        return (-1) * Number(String((-1) * n).split("").reverse().join(""));
    }
}


// -----55-----
function evenNumbers(array, number) {
    const newArr = array.filter(el => el % 2 === 0);
    return newArr.splice(newArr.length - number, number)
}


// -----56-----
function gimme(triplet) {
    const arr = [...triplet];
    arr.sort((a, b) => a - b);
    return triplet.indexOf(arr[1]);
}


// -----57-----
function solve(s) {
    let upper = 0;
    let lower = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() === s[i]) {
            lower++
        } else {
            upper++
        }
    }
    if (upper > lower) {
        return s.toUpperCase()
    } else {
        return s.toLowerCase()
    }
}


// -----58-----
function minValue(values) {
    const arr = [];
    values.forEach(el => {
        if (arr.indexOf(el) === -1) {
            arr.push(el)
        }
    })
    const arrSort = arr.sort((a, b) => a - b)
    return +arrSort.join("")
}


// -----59-----
function sortGiftCode(code) {
    return code.split("").sort().join("")
}


// -----60-----
function digitize(n) {
    const arr = String(n).split("")
    return arr.map(el => +el)
}


// -----61-----
function hydrate(s) {
    const arr = s.match(/\d+/g);
    let num = arr.reduce((acc, el) => acc + +el, 0)
    if (num === 1) {
        return num + " glass of water"
    } else {
        return num + " glasses of water"
    }
}


// -----62-----
function longest(s1, s2) {
    let str = s1 + s2;
    const arr = str.split("").sort();
    const newArr = [];
    arr.forEach(el => {
        if (newArr.indexOf(el) === -1) {
            newArr.push(el)
        }
    })
    return newArr.join("")
}


// -----63-----
function stray(numbers) {
    if (numbers[0] === numbers[1]) {
        return numbers.filter(el => el !== numbers[0])[0]
    } else if (numbers[0] === numbers[2]) {
        return numbers[1]
    } else {
        return numbers[0]
    }
}


// -----64-----
function printerError(s) {
    const err = s.match(/[n-z]/g) || [];
    return `${err.length}/${s.length}`
}


// -----65-----
const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0
    } else if (begin === end) {
        return begin
    }
    let sum = 0;
    for (let i = begin; i <= end; i += step) {
        sum += i;
    }
    return sum;
};


// -----66-----
function divisors(integer) {
    const arr = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            arr.push(i)
        }
    }
    if (arr.length === 0) {
        return `${integer} is prime`
    } else {
        return arr
    }
}


// -----67-----
SequenceSum.showSequence = function (count) {
    let sum = 0;
    let str = ""
    if (count < 0) {
        return count + "<0"
    } else if (count === 0) {
        return "0=0"
    }
    for (let i = 0; i <= count; i++) {
        sum += i
        if (i != count) {
            str = str + i + "+"
        } else {
            str = str + i + " = " + sum
        }
    }
    return str
};


// -----68-----

function adjacentElementsProduct(array) {
    let max = array[0];
    let pred = array[0];
    for (let i = 1; i < array.length; i++) {
        if (pred * array[i] > max) {
            max = pred * array[i]
        }
        pred = array[i]
    }
    return max
}


// -----69-----
function cubeOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return undefined;
        }
    }
    return arr.filter(el => el % 2 !== 0).reduce((acc, el) => acc + el * el * el, 0)
}


// -----70-----
var isAnagram = function (test, original) {
    let test2 = test.toLowerCase().split("").sort().join("");
    console.log(test2)
    let original2 = original.toLowerCase().split("").sort().join("");
    console.log(original2)
    if (test2 === original2) {
        return true
    } else {
        return false
    }
};


// -----71-----
function insertDash(num) {
    const arr = String(num).split("");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
            newArr.push(arr[i]);
            if (i < arr.length - 1) {
                newArr.push("-");
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join("")
}


// -----72-----
function removeUrlAnchor(url) {
    let i = url.indexOf("#") || url.length;
    if (i === -1) {
        return url
    } else {
        return url.slice(0, i)
    }
}


// -----73-----
function factorial(n) {
    if (n === 0) {
        return 1
    } else if (n === 1) {
        return n
    } else {
        return factorial(n - 1) * n
    }
}


// -----74-----
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 4 === 0)) {
        return true
    }
    return false
}


// -----75-----
var FilterString = function (value) {
    const arr = value.match(/\d/g)
    return +arr.join("")
}


// -----76-----
function unusedDigits() {
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    let integers = "0123456789";
    let stringNumbers = args.join("")
    let result = "";
    for (let i = 0; i < integers.length; i++) {
        let regExp = new RegExp(integers[i], "g")
        if (!regExp.test(stringNumbers)) {
            result += integers[i]
        }
    }
    return result
}


// -----77-----
function getMissingElement(superImportantArray) {
    let integers = "0123456789";
    let stringNumbers = superImportantArray.join("")
    for (let i = 0; i < integers.length; i++) {
        let regExp = new RegExp(integers[i], "g")
        if (!regExp.test(stringNumbers)) {
            return +integers[i]
        }
    }
}


// -----78-----
var splitInParts = function (s, partLength) {
    let array = s.split("");
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if ((i + 1) % partLength === 0) {
            newArray.push(array[i])
            if ((i + 1) !== array.length) {
                newArray.push(" ")
            }
        } else {
            newArray.push(array[i])
        }
    }
    return newArray.join("")
}


// -----79-----
const closestMultiple10 = num => {
    let result = Math.round(num / 10) * 10
    return result;
};


// -----80-----
function isNarcissistic(n) {
    const nArr = String(n).split("");
    let result = 0;
    for (let i = 0; i < nArr.length; i++) {
        result += Math.pow(+nArr[i], nArr.length)
    }
    return n === result
}


// -----81-----
function solve(s) {
    let uppercase, lowercase, numbers, special;
    uppercase = s.match(/[A-Z]/g).length
    lowercase = s.match(/[a-z]/g).length
    numbers = s.match(/\d/g).length
    special = s.match(/\W/g).length
    return [uppercase, lowercase, numbers, special]
}


// -----82-----
function squareAreaToCircle(size) {
    return Math.PI * Math.pow(Math.sqrt(size) / 2, 2)
}


// -----83-----
function accum(s) {
    const arr = s.toLowerCase().split("");
    const newArr = [];
    arr.forEach((el, index) => newArr.push(el.toUpperCase() + el.repeat(index)))
    return newArr.join("-")
}


// -----84-----
var greet = function (name) {
    let newName = name.replace("!", "").replace("Hello", "");
    return `Hello ${newName[0].toUpperCase() + newName.toLowerCase().slice(1)}!`
};


// -----85-----
function solve(s) {
    let regExp = /[aeiou]+/g;
    let arr = s.match(regExp);
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (result < arr[i].length) {
            result = arr[i].length
        }
    }
    return result
}


// -----86-----
function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)]
}


// -----87-----
String.prototype.repeat = function (count) {
    let strRepeat = ""
    for (let i = 0; i < count; i++) {
        strRepeat += this
    }
    return strRepeat
};


// -----88-----
function sum(array) {
    return array.reduce((acc, el) => acc + el)
}


// -----89-----
function tea42(input) {
    return String(input).replace(/2/g, "t")
};


// -----90-----
function createDict(keys, values) {
    const obj = {}
    for (let i = 0; i < keys.length; i++) {
        if (values[i] === undefined) {
            obj[keys[i]] = null
        } else {
            obj[keys[i]] = values[i]
        }
    }
    return obj
}


// -----91-----
function consecutive(arr, a, b) {
    return (arr.indexOf(b) - arr.indexOf(a)) === 1 || (arr.indexOf(b) - arr.indexOf(a)) === -1
}


// -----92-----
function solution(str, ending) {
    if (str.slice(str.length - ending.length, str.length) === ending) {
        return true
    } else {
        return false
    }
}


// -----93-----
function last(x) {
    const array = x.split(" ")
    const sortArray = array.sort((a, b) => {
        if (a[a.length - 1] < b[b.length - 1]) {
            return -1
        } else if (a[a.length - 1] > b[b.length - 1]) {
            return 1
        } else {

        }
        return 0
    })
    return sortArray
}


// -----94-----
function ghostBusters(building) {
    if (/ /.test(building)) {
        return building.replace(/ /g, "")
    } else {
        return "You just wanted my autograph didn't you?"
    }
}


// -----95-----
function sumTwoSmallestNumbers(numbers) {
    const newArray = numbers.filter(el => el > 0).sort((a, b) => a - b)
    return newArray[0] + newArray[1]
}


// -----96-----
function capitalize(s) {
    let one = "";
    let two = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            one += s[i].toUpperCase()
            two += s[i].toLowerCase()
        } else {
            two += s[i].toUpperCase()
            one += s[i].toLowerCase()
        }
    }
    return [one, two];
};


// -----97-----
function alternate(n, firstValue, secondValue) {
    const array = []
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            array.push(firstValue)
        } else {
            array.push(secondValue)
        }
    }
    return array
}


// -----98-----
function rowSumOddNumbers(n) {
    let sum = 0;
    for (let i = n * (n - 1) + 1; i <= n * (n - 1) + 1 + 2 * (n - 1); i += 2) {
        sum += i
    }
    return sum;
}


// -----99-----
function remove(string) {
    const arr = string.split(" ")
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/[!+]/gi) === null || arr[i].match(/[!+]/gi).length !== 1) {
            newArr.push(arr[i])
        }
    }
    return newArr.join(" ");
}


// -----100-----
function uncensor(infected, discovered) {
    if (discovered.length === 0) {
        return infected
    }
    let result = "";
    let j = 0;
    for (let i = 0; i < infected.length; i++) {
        if (infected[i] === "*") {
            result += discovered[j]
            j++;
        } else {
            result += infected[i]
        }
    }
    return result;
}


// -----101-----
var sortArray = function (value) {
    return value.split('').sort((c, p) => c - p).join('');
}


// -----102-----
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    const currentDateArray = currentDate.split(" ")
    const expirationDateArray = expirationDate.split(" ")
    const month = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12
    }

    if (enteredCode === correctCode) {
        if (Number(currentDateArray[2]) > Number(expirationDateArray[2])) {
            return false
        } else if (Number(currentDateArray[2]) < Number(expirationDateArray[2])) {
            return true
        } else if (month[currentDateArray[0]] < month[expirationDateArray[0]]) {
            return true
        } else if (month[currentDateArray[0]] > month[expirationDateArray[0]]) {
            return false
        } else if (Number(currentDateArray[1].slice(0, currentDateArray[1].length - 1)) <= Number(expirationDateArray[1].slice(0, expirationDateArray[1].length - 1))) {
            return true
        }
        return false
    }
    return false
}


// -----103-----
const factorial = n => {
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
};


// -----104-----
const options = {
    modifier: 2,
};

function solution(arr, options) {
    return arr.map(el => el + 2 * options.modifier)
}


// -----105-----
function outed(meet, boss){
    let sum = Object.values(meet).reduce((acc, el) => acc + el, 0)
    let people = Object.keys(meet).length
    let result = (sum + meet[boss])/people
    if(result <= 5) {
        return 'Get Out Now!'
    } else {
        return 'Nice Work Champ!'
    }
}


// -----106-----
function heron(a, b, c) {
    let s = (a + b + c)/2
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}


// -----107-----
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const arr = Array.from(arguments)
    return Math.floor(Math.sqrt(arr.map(el => el * el).reduce((acc, el) => acc + el)) / 2)
}


// -----108-----
function reverseList(arr) {
    return arr.reverse()
}


// -----109-----
function divCon(x){
    return x.reduce((acc, el) => (typeof el === "number" && Number(el) % 1 === 0) ? acc + el : acc - Number(el), 0)
}


// -----110-----
function arrowArea(a,b) {
    return (a * b) / 4
}


// -----111-----
function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  String(integer).split("");
    for(var i = 0; i < digits.length; i++) {
        sum = sum + Number(digits[i]);
    }
    return sum;
}