// -----1-----
function spinWords(string){
    const arr = string.split(" ");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length >= 5) {
            newArr.push(arr[i].split("").reverse().join(""));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(" ");
}

// -----2-----
function order(words){
    if (words === "") {
        return "";
    }
    const arr = words.split(" ");
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let regExp = /[0-9]/;
        let j = arr[i].match(regExp);
        newArr[j[0]-1] = arr[i];
    }
    return newArr.join(" ");
}


// -----3-----
function digital_root(n) {
    if(n < 10) {
        return n;
    } else {
        const arr = String(n).split("");
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }
        return digital_root(sum);
    }
}


// -----4-----
function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}


// -----5-----
function narcissistic(value) {
    const arr = String(value).split("");
    let newValue = arr.reduce((acc, el) => acc + Math.pow(Number(el), String(value).length), 0);
    console.log(String(value).length);
    if(value === newValue) {
        return true;
    } else {
        return false;
    }
}


// -----6-----
function likes(names) {
    switch (names.length) {
        case 0:
            return "no one likes this";
            break;
        case 1:
            return `${names[0]} likes this`;
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
            break;
    }
}


// -----7-----
function solution(number){
    let counter = 0;
    if(number <= 0) {
        return 0
    } else {
        for (let i = 1; i < number; i++) {
            if(i % 3 === 0 || i % 5 === 0) {
                counter += i;
            }
        }
    }
    return counter;
}


// -----8-----
function solution(str){
    if(str.length % 2 !== 0) {
        str += "_";
    }
    let newArr = [];
    for(let i = 0; i < str.length; i += 2) {
        newArr.push(str.slice(i, i + 2));
    }
    return newArr;
}


// -----9-----
function findOdd(A) {
    const count = {};
    for(let el of A) {
        if(count[el] === undefined) {
            count[el] = 1
        } else {
            count[el]++
        }
    }
    for(let key  in count) {
        if(count[key] % 2 !== 0) {
            return +key
        }
    }
}


// -----10-----
var uniqueInOrder=function(iterable){
    if(iterable.length === 0) {
        return []
    }
    const arr = [];
    arr.push(iterable[0])
    for(let i = 1; i < iterable.length; i++) {
        if(iterable[i] !== iterable[i-1]) {
            arr.push(iterable[i])
        }
    }
    return arr
}


// -----11-----
function findUniq(arr) {
    const arrSort = arr.sort((a,b) => a - b)
    if (arrSort[0] === arrSort[1]) {
        return arrSort[arrSort.length - 1]
    } else if (arrSort[0] !== arrSort[1] && arrSort[1] === arrSort[2]) {
        return arrSort[0]
    } else if (arrSort[0] !== arrSort[1] && arrSort[0] === arrSort[2]) {
        return arrSort[1]
    }
}


// -----12-----
function sortArray(array) {
    const newArray = []
    array.forEach(el => {
        if(el % 2 !== 0) {
            newArray.push(el)
        }
    })
    const newArraySort = newArray.sort((a,b) => a - b)
    console.log(newArraySort)
    const resultArr = [];
    let i = 0;
    array.forEach(el => {
        if(el % 2 !== 0) {
            resultArr.push(newArraySort[i]);
            i++
            console.log(i)
        } else {
            resultArr.push(el)
        }
    })
    return resultArr
}


// -----13-----
function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split("")
    let result = []
    for(let i = 0; i < text.length; i++) {
        if(alphabetArray.indexOf(text[i].toLowerCase()) >= 0) {
            result.push(alphabetArray.indexOf(text[i].toLowerCase()) + 1)
        }
    }
    return result.join(" ");
}


// -----14-----
function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split("")
    let stringArray = string.toLowerCase().match(/[a-z]/gi)
    for(let i = 0; i < alphabetArray.length; i++) {
        if(stringArray.indexOf(alphabetArray[i]) === -1) {
            return false
        }
    }
    return true;
}


// -----15-----
function count (string) {
    const arr = string.split("")
    const obj = {}
    arr.forEach(el => {
        if(!obj.hasOwnProperty(el)) {
            obj[el] = 1
        } else {
            obj[el]++
        }
    })
    return obj;
}