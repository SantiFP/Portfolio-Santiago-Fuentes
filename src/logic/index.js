const adding = (str) => {
  let f = str.split("").reverse();
  let noSpace = true;

  for (let i = 0; i < f.length; i++) {
    if (f[i] === " ") {
      if (f[i - 1] === "-") {
        f.splice(i -1, 1);
        noSpace = false;
      } else {
        f.splice(i, 0, "-");
        noSpace = false;
      }
      break;
    }
}

if (noSpace && !f.includes('-')) {
    f.push('-')
}else if(noSpace && f.includes('-')){
    f.splice(f.length-1,1)
}
 return f.reverse().join("") ;
};

console.log(adding("30 + 30"));
