let cs = '356';
console.log(cs.includes(' '));
let arr = cs.split('');
console.log(arr);
let reversed = arr.reverse();
console.log(reversed);

let space = reversed.indexOf(' ');
reversed.splice(space, 0, '-');
console.log(reversed.reverse());

