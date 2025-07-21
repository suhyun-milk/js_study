const user = {
  userName: "wooyoo",
  address: {
    city: "seoul",
    zipcode: "1234",
  },
};

console.log(user.address.phone);

const user2 = null;
console.log(user2?.name);

// null -> error
// ?. -> null -> undefined
