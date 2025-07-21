const arr = [1, 2, 3, 4];
result = arr.map((num) => Math.pow(num, 2));

result = arr.reduce((a, c) => a + c, 0);

result = arr.find((a) => a > 2);

const score = [100, 90, 32, 80];
result = score.some((a) => a < 60);
result = result ? "fail" : "success";

console.log(result);
result = score.every((a) => a >= 60);
result = result ? "sucess" : "fail";
console.log(result);

const animals = ["milk", "bobby", "bombi"];
const target = "milk";
result = animals.includes(target);
console.log(result);

const arr2 = [2, 5, 8, 1, 10];
result = arr2.filter((a) => a >= 5).map((a) => a * 2);
console.log(result);
