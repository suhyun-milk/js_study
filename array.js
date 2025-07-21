//배열//
const fruites = ["banana", "apple", "orange"];
const getFruites = ["strawberry", "lemon"];
fruites.forEach((element) => {
  console.log(element);
});

for (const element of fruites) {
  console.log(element);
}

for (const i in fruites) {
  console.log(fruites[i]);
}

const newFruites = fruites.concat(getFruites);
console.log(newFruites);
//spread 문법( 전개연산자)//
const a = [...fruites, ...getFruites];
console.log(a);

// rest operator
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(5, 4, 2, 1, 5));
console.log(sum(5, 40));
