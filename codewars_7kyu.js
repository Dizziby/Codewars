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