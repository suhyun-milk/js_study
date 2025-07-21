var strVar = "var keyword"; // added window property
let strLet = "hello world";
function scope() {
  let a = "hello";
  if (true) {
    let a = "world";
  }
  console.log(a);
}

scope();

const b = 3;

const arr = [1, 2, 3];
arr.push(4);
arr[1] = "hello";
console.log(arr);

const obj = {
  name: "ghost",
  age: 1000,
  sayHello: function () {
    console.log(`Good morning, ${this.name}`);
  },
};

console.log(obj.name);
console.log(obj.age);
console.log(obj["age"]);
obj.name = "milk";
obj.mbti = "ISTJ";
obj["bloodType"] = "B";
delete obj.mbti;
console.log(obj);
obj.sayHello();
