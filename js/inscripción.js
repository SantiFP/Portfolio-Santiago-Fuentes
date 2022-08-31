const changeBorder = document.querySelectorAll('.borderform');

for (let [i, lol] of changeBorder.entries()) {
    lol.addEventListener('click',  border = () => {
        resetBorder();
        lol.classList.toggle("borderblue");
        
    })
  }
  resetBorder = () => {
  changeBorder.forEach(el => el.classList.remove("borderblue"));
  };
  