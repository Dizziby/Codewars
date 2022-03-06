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
function highAndLow(numbers){
    const arr = numbers.split(" ");
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return `${max} ${min}`;
}


// -----4-----
function matrix(array) {
    array.forEach((elem, index) => {
        for (let i = 0; i < elem.length; i++) {
            if(index === i && elem[i] < 0) {
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
function vowelIndices(word){
    let regExp = /[aeiouy]/i;
    const arr = word.split("");
    const results = [];
    for(let i = 0; i < arr.length; i++) {
        if(regExp.test(arr[i])) {
            results.push(i+1);
        }
    }
    return results;
}


// -----7-----
function validatePIN (pin) {
    let regExp = /^\d{4}$|^\d{6}$/;
    return regExp.test(pin);
}


// -----8-----
function modifiedSum(a, n) {
    return a.reduce((acc, cur) =>  acc + Math.pow(cur, n) - cur, 0);
}


// -----9-----
function squareDigits(num){
    const arr = String(num).split("");
    const newArr = [];
    arr.forEach(elem => newArr.push(Math.pow(Number(elem), 2)));
    return +newArr.join("");
}


// -----10-----
var isSquare = function(n){
    let s = Math.sqrt(n);
    if (n % s === 0 || n === 0) {
        return true;
    } else {
        return false;
    }
}


// -----11-----
function getSum(a,b) {
    let sum = 0;
    if(a < b) {
        for(let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for(let i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        sum = a;
    }
    return sum;
}


// -----12-----
function filter_list(l) {
    const arr = l.filter(elem => typeof(elem) === 'number');
    return arr;
}


// -----13-----
function sumTwoSmallestNumbers(numbers) {
    const arr = numbers.sort((a,b) => a - b);
    return arr[0] + arr[1];
}


// -----14-----
function getLargerNumbers(a, b) {
    const newArr = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] >= b[i]) {
            newArr.push(a[i]);
        } else if (a[i] < b[i]) {
            newArr.push(b[i]);
        }
    }
    return newArr;
}


// -----15-----
function openOrSenior(data){
    const result = [];
    data.forEach(elem => {
        if(elem[0] >= 55 && elem[1] > 7) {
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
    for(let i = 0; i < arr.length; i++) {
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
    if(s.length % 2 === 0) {
        newStr = s[s.length/2 - 1] + s[s.length/2];
    } else {
        newStr = s[Math.floor(s.length/2)];
    }
    return newStr;
}


// -----18-----
function descendingOrder(n){
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
    if(arr1 === null && arr2 === null) {
        return true
    } else if(arr1 !== null && arr2 !== null && arr1.length === arr2.length) {
        return true;
    } else {
        return false;
    }
}


// -----20-----
function friend(friends){
    return friends.filter(elem => elem.length === 4)
}


// -----21-----
function findNextSquare(sq) {
    if(Math.sqrt(sq) === Math.floor(Math.sqrt(sq))) {
        return Math.pow((Math.sqrt(sq) + 1), 2)
    } else {
        return -1;
    }
}


// -----22-----
var number = function(busStops){
    let people = 0;
    for(let i = 0; i < busStops.length; i++) {
        people = people + busStops[i][0] - busStops[i][1];
    }
    return people;
}


// -----23-----
var number=function(array){
    const newArr = [];
    if(array.length === 0) {
        return newArr;
    }
    array.forEach((elem, index) => newArr.push(`${index + 1}: ${elem}`))
    return newArr;
}


// -----24-----
function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
};


// -----25-----
function roundToNext5(n){
    return Math.ceil(n/5) * 5;
}


// -----26-----
function reverseLetter(str) {
    let regExp = /[a-z]/g;
    const arr = str.match(regExp);
    return arr.reverse().join("");
}


// -----27-----
function sumDigits(number) {
    if(number < 0) {
        number = number * (-1);
    }
    const arr = String(number).split("")
    console.log(arr);
    return arr.reduce((acc, elem) => acc + +elem, 0);
}


// -----28-----
function checkExam(array1, array2) {
    let points = 0;
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] === array2[i]) {
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
    for(let i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() === word[i]) {
            arr.push(i);
        }
    }
    return arr;
};


// -----30-----
function smallEnough(a, limit){
    for(let i = 0; i < a.length; i++) {
        if(a[i] > limit) {
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
function findShort(s){
    const arr = s.split(" ");
    const arrSort = arr.sort((a, b) => a.length - b.length);
    return arrSort[0].length;
}


// -----33-----
function remove (string) {
    let regExp = /!*$/;
    const arr = string.split(" ");
    const arrNew = [];
    for(let i = 0; i < arr.length; i++) {
        arrNew.push(arr[i].replace(regExp,""));
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
function getDivisorsCnt(n){
    let counter = 0;
    for(let i = 0; i <= n; i++) {
        if(n % i === 0) {
            counter++;
        }
    }
    return counter;
}


// -----37-----
function getEvenNumbers(numbersArray){
    return numbersArray.filter(el => el % 2 === 0)
}


// -----38-----
"use strict";
function flattenAndSort(array) {
    const newArr = [].concat(...array);
    return newArr.sort((a,b) => a - b);
}


// -----39-----
function shorter_reverse_longer(a,b){
    let newString = "";
    if(a.length >= b.length) {
        const arr = a.split("");
        let newA = arr.reverse().join("");
        newString = b+newA+b;
    } else {
        const arr = b.split("");
        let newB = arr.reverse().join("");
        newString = a+newB+a;
    }
    return newString;
}


// -----40-----
function isPowerOfTwo(n){
    if (n < 1) {
        return false;
    } else if (n === 1) {
        return true;
    } else {
        if(n / 2 === 2) {
            return true;
        } else {
            return isPowerOfTwo(n/2);
        }
    }
}


// -----41-----
function solution(nums){
    if(nums === null || nums.length === 0) {
        return [];
    } else {
        return nums.sort((a, b) => a - b);
    }
}


// -----42-----
function isIsogram(str){
    if (str.length === 0) {
        return true;
    }
    const arr = [];
    for (let el of str) {
        let elLowerCase = el.toLowerCase();
        if(arr.indexOf(elLowerCase) === -1) {
            arr.push(elLowerCase);
        } else {
            return false;
        }
    }
    return true;
}


// -----43-----
function DNAStrand(dna){
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
    if(sum % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}


// -----45-----
function noOdds( values ){
    const arr = [];
    for (let value of values) {
        if(value % 2 === 0) {
            arr.push(value)
        }
    }
    return arr;
}


// -----46-----
function orderFood(list) {
    const results = {};
    list.forEach(el => {
        if(results[el.meal] === undefined) {
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
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}


// -----48-----
function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;
    array.forEach((el, index) => {
        if(index % 2 == 0) {
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
function bump(x){
    const arr = x.match(/n/gi);
    if(arr === null || arr.length <= 15) {
        return "Woohoo!"
    } else {
        return "Car Dead"
    }
}