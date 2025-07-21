/* isNaN(value) */

// function safeNumber(value) {
//   if (isNaN(value)) {
//     return 0;
//   }
//   return value;
// }

function safeNumber(value) {
  const num = Number(value);
  if (isNaN(num)) {
    return 0;
  }
  return num;
}

console.log(safeNumber("hello")); // 0
console.log(safeNumber(123)); // 123
console.log(safeNumber("3500")); // 3500 -> number
console.log(isNaN("3500"));

// typeof value === 'number'
// isNaN(value)

function changeString(value) {
  if (typeof value === "string") {
    return `this is aleady string type.`;
  }
  return String(value);
}

console.log(changeString(123)); // '123', String(), toString(), ''
console.log(changeString("hello")); // 'this is string type '
function sayHello(name) {
  // console.log(`Hello ${name}.`);
  return `Hello ${name}`;
}
console.log(sayHello("Milk")); // hello Milk;
sayHello("Ghost"); // hello Ghost;

let value = "hello";
value = Boolean(value);
value = !!value;
console.log(typeof value, value);

// Operator AND(&&)
const opr1 = "3" && null && "hello" && undefined;
console.log(opr1);

const opr2 = "3" && undefined && "hello" && null;
console.log(opr2);

const opr3 = 3 && "hello";
console.log(opr3);

const opr4 = "hello" && 3;
console.log(opr4);

// Operator OR(||)

const opr5 = null || undefined || "world" || "3" || "hello";
console.log(opr5);

const opr6 = null || undefined;
console.log(opr6);

// Operator Not(!)

const opr7 = !(3 && undefined);
console.log(opr7);

const opr8 = !!(3 && undefined);
console.log(opr8);

console.log(2 ** 3);

let a = 1;
let b = ++a;
console.log(a, b);

//비교연산자//
let d = 5;
let e = 3;

console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a !== b);
console.log(a >= b);
console.log(a <= b);

let c = "5";
console.log(a === c);
console.log(a == c);

//비교연산자//
a += 5;
