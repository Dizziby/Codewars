// -----1-----
function rot13(message){
    let abc = "abcdefghijklmnopqrstuvwxyz";
    const arrAbc = abc.split("");
    const arrStr = message.toLowerCase().split("");
    const newArr = [];
    for(let i = 0; i < arrStr.length; i++) {
        let j = arrAbc.indexOf(arrStr[i]);
        if(j === -1 && typeof(arrStr[i]) === 'string') {
            newArr.push(arrStr[i]);
        } else if(j === -1) {
            newArr.push(" ");
        } else {
            if(j < 13) {
                if(message[i] === message[i].toUpperCase()) {
                    newArr.push(arrAbc[j+13].toUpperCase());
                } else {
                    newArr.push(arrAbc[j+13]);
                }
            } else {
                if(message[i] === message[i].toUpperCase()) {
                    newArr.push(arrAbc[j-13].toUpperCase());
                } else {
                    newArr.push(arrAbc[j-13]);
                }
            }
        }
    }
    let newStr = newArr.join("");
    return newStr;
}


// -----2-----
function moveZeros(arr) {
    const newArr = [];
    let count = 0;
    arr.forEach(el => {
        if(el === 0) {
            count++
            console.log(count)
        } else {
            newArr.push(el)
        }
    })
    for(let i = 0; i < count; i++) {
        newArr.push(0)
    }
    return newArr
}