const obj = { a: 1, b: 2, c: 3 };
const name = () => {
  for (let prop in obj) {
    const value = obj[prop];
    console.log(value);
    console.log(typeof prop);
    if (value === 2) return true;
  }
};

console.log(name());
