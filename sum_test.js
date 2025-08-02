//두 수를 입력후, 계산버튼을 클릭하면 두수의 합을 출력한다.//

function calcSum(a, b) {
  return Number(a) + Number(b);
}

function renderResult(value) {
  return `<li>${value} is the result</li>`;
}

// function getNumbers() {
//   return [input1.value, input2.value];
// }

function getNumbers() {
  const input1 = 7;
  const input2 = 3;
  return [input1, input2];
}

function handleCalc() {
  const [num1, num2] = getNumbers();
  const result = calcSum(num1, num2);
  renderResult(result);
}

handleCalc();
