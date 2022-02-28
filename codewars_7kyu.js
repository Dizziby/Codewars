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

