const items = document.querySelectorAll('.slider .job');
const nbSlide = items.length;
const previous = document.querySelector('.slider .previous');
const next = document.querySelector('.slider .next');
let count = 0;

function slideSuivante() {
    items[count].classList.remove("active");
    if (count < nbSlide - 1) count++;
    else count = 0;

    items[count].classList.add("active");
}

function slidePrecedente() {
    
    items[count].classList.remove("active");
    if (count > 0) count--;
    else count = nbSlide - 1;

    items[count].classList.add("active");
}

next.addEventListener('click', slideSuivante)
previous.addEventListener('click', slidePrecedente)