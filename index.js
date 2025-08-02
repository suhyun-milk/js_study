const fruits = ["apple", "watermelon", "banana"];

function getSize(item) {
  return item.length;
}

function create(items) {
  return items.map((a) => getSize(a));
}

function renderResult() {
  return create;
}
