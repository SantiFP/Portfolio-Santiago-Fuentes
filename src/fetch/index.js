let arr = [
  {
    name: "leche",
    price: 50,
    id: 1,
    quantity: 3,
  },
];

const name = (param) => {
  let existing = arr.find((el, i) => el.quantity === param.quantity);
  existing.quantity++;
};

name({
  name: "leche",
  price: 50,
  id: 1,
  quantity: 3,
});

console.log(arr);
