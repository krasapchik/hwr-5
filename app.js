function reverseString(str) {
    let page = "";
    for (var i = str.length - 1; i >= 0; i--){
        page += str[i];
    }
    return page;
}

console.log(reverseString('Привет')); 



const numbers = [2, 10, 8, 5, 9]

num = 0;
for (let i = 0; i < numbers.length; i++){
    num = numbers[i]
    sum = num + num
    result = sum / numbers.length
}
console.log(result);
