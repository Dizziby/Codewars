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