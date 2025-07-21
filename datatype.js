let num = 123.45;

// num = 123 + "";

// num = String(num);
num = num.toString();
console.log(typeof num, num);

let str = "123.45";
let result = Number(str);
result = parseInt(str);
result = parseFloat(str);
result = +result;
console.log(typeof result, result);

let input = "FF";
input = parseInt(input, 16);
console.log(input);

let number = "123.45abc";
console.log(Number(number)); //NaN
console.log(parseInt(number));
console.log(parseFloat(number));

console.log(isNaN("hello"));
