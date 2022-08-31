const showEvents = document.querySelector('#showevents');
const events = document.querySelector('#events');
const showParticipants = document.querySelector('#showparticipants');
const participants = document.querySelector('#participants');


showEvents.addEventListener('click', () =>{ 
    participants.classList.toggle('hidden');
    events.classList.toggle('hidden');
    showParticipants.classList.toggle('bg-orangeresults');
    showEvents.classList.toggle('bg-orangeresults')
});

showParticipants.addEventListener('click',() =>{
    events.classList.toggle('hidden');
    participants.classList.toggle('hidden');
    showEvents.classList.toggle('bg-orangeresults');
    showParticipants.classList.toggle('bg-orangeresults')

});