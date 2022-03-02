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
