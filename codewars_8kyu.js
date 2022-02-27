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
