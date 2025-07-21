const str = "Hello World";

console.log(str.indexOf("W"));

console.log(str.includes("el"));
console.log(str.charAt(6));

console.log(str.slice(3, 8));

let result = str.split("").filter((a) => a !== " ");

const str2 = "2";
result = str2.padStart(3, "0");
result = "34".padStart(3, "0");

// 4자리로 표시. -
const str3 = [1, 20, 5, 11];

result = str3.map((a) => String(a).padStart(3, "-"));
console.log(result);

const num = 123;
console.log(String(num));
console.log(num.toString());
console.log(num + "");
