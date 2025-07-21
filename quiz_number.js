function isNumber(N) {
  if (Number.isNaN(N)) {
    return "숫자가 아닙니다";
  } else {
    return "숫자 입니다.";
  }
}

console.log(isNumber("hello"));
console.log(isNumber("3"));
console.log(isNumber(30));

function overFifty() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  return randomNum >= 50
    ? `${randomNum} 50 이상입니다`
    : `${randomNum} 50미만 입니다`;
}

console.log(overFifty());
console.log(overFifty());
console.log(overFifty());

const numbers = [30, 25, 12, 50];

function isBigNumber(number) {
  return Math.max(...number);
}
function isSmallNumber(number) {
  return Math.min(...number);
}
console.log(isBigNumber(numbers)); // 50
console.log(isSmallNumber(numbers)); // 12
