let name = "June";
let displayName = name ?? "Guest";
console.log(displayName);

let score = 0;
let results = score ?? 100;
console.log(result);

//널리시연산자 (Nullish operator)//
const a = null;
const b = 3;
console.log(a || b); // a -> null, undefined, 0, '', true, false
console.log(a ?? b); // a -> null, undefined

// 사용자와 주문 데이터
const user = { name: "홍길동" }; // id 없음
const order = null; // 주문 정보 없음

function createOrderSummary(user, order) {
  return {
    userId: user.id ?? "GUEST", // id가 없으면 "GUEST"
    userName: user.name ?? "이름없음", // name이 없으면 "이름없음"
    orderId: order.id ?? "주문없음", // order가 null이면 "주문없음"
    product: order.product ?? "상품없음", // product가 없으면 "상품없음"
    quantity: order.quantity ?? 0, // quantity가 없으면 0
  };
}
let result = createOrderSummary(user, order);
console.log(result);

// 콘솔결과
// {
//   userId: 'GUEST',
//   userName: '홍길동',
//   orderId: '주문없음',
//   product: '상품없음',
//   quantity: 0
// }
