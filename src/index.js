let signsArray = ["+", "-", "x", "÷"];


// const n = (str) => {
//   let f = str.split("").reverse();

//   let expo = "";

//   if (!f.includes(" ")) {
//     if (!f.includes("(")) {
//       f.push("(");
//       f.unshift("/100)");
//       return f.reverse().join("");
//     }

//     if (f[0] === ")") {
//       f.unshift("^2");
//       return f.reverse().join("");
//     }

//     if (f.indexOf('^') !== -1) {
//       f.splice(0, 1, (Number(f[0]) + 1).toString());
//       return f.reverse().join("");
//     }
//   }

//   console.log(f);
//   console.log(f[f.indexOf('^') +1]);

//   for (let i = 0; i < f.length; i++) {
//     if (f[i] === '^') {
//         expo = f[i];
//         break
//     }else if(signsArray.includes(f[i])){
//         break;
//     }
    
//   }

//   if (f.includes(" ") && f[0].match(/[0-9]+/) && !expo) {
//       for (let i = 0; i < f.length; i++) {
//         if (f[i] === " ") {
//           f.splice(i, 0, "(");
//           break;
//         }
//       }
//       f.unshift("/100");
//       f.unshift(")");
//       return f.reverse().join("");
//   }


//     if (f[0] === ")") {
//       f.unshift("^2");
//       return f.reverse().join("");
//     }
    
//     if (expo ) {
//         f.splice(0, 1, (Number(f[0]) + 1).toString());
//         return f.reverse().join("");
//       }
// };

const n = (str) => {
  let arr = str.split('').reverse('');
  if (!str.includes(' ')) {
    console.log(arr);
    arr.unshift('/100)');
    arr.push('(');
    return arr.reverse().join('');
  }

  if(str.includes(' ')){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
          arr.splice(i,0,'(');
          break;
        }
    };
    arr.unshift('/100)')
    return arr.reverse().join('');

  }
 
};

console.log(n('((3/100) + (3/100)'));