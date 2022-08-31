const changeBorder = document.querySelectorAll('.borderform');
const showFilters = document.querySelector('#showfilters');
const filters = document.querySelector('#filters');
const hideFilters = document.querySelector('#hidefilters');
const showFiltersLg = document.querySelector('#showfilterslg');
const filtersLg = document.querySelector('#filterslg');
const hideFiltersLg = document.querySelector('#hidefilterslg');
const filterButton = document.querySelector('#filterbutton');
const showOfficialTime = document.querySelector('#officialtime');
const showTime = document.querySelector('#time');




showOfficialTime.addEventListener('click',() =>{
    showOfficialTime.classList.toggle('bg-orangeresults');
    showTime.classList.toggle('bg-orangeresults')
});

showTime.addEventListener('click',() =>{
    showOfficialTime.classList.toggle('bg-orangeresults');
    showTime.classList.toggle('bg-orangeresults')
})





for (let [i, lol] of changeBorder.entries()) {
  lol.addEventListener('click',  border = () => {
      resetBorder();
      lol.classList.toggle("borderblue");
      
      
  })
}
resetBorder = () => {
changeBorder.forEach(el => el.classList.remove("borderblue"));
};


showFilters.addEventListener('click',()=>{

    filters.classList.remove('hidden');
    showFilters.classList.toggle('hidden')

});

hideFilters.addEventListener('click', ()=>{
    filters.classList.add('hidden');
    showFilters.classList.toggle('hidden')
});


showFiltersLg.addEventListener('click',()=>{

    filtersLg.classList.remove('hidden');
    showFiltersLg.classList.toggle('hidden');
    filterButton.classList.add('hidden')

});

hideFiltersLg.addEventListener('click', ()=>{
    filtersLg.classList.add('hidden');
    showFiltersLg.classList.toggle('hidden');
    filterButton.classList.remove('hidden')
});









