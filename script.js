let mon = document.querySelector('.monday');
let tue = document.querySelector('.tuesday');
let wed = document.querySelector('.wednesday');
let thur = document.querySelector('.thursday');
let friday = document.querySelector('.friday');
let saturday = document.querySelector('.saturday');
let sunday = document.querySelector('.sunday');

let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let box7 = document.querySelector('.box7');

let dt = new Date();
let today = dt.getDay();

if (today == 0) {
    sunday.classList.add('today');
}

if (today == 1) {
    mon.classList.add('today');
}

if (today == 2) {
    tue.classList.add('today');
}

if (today == 3) {
    wed.classList.add('today');
}

if (today == 4) {
    thur.classList.add('today');
}

if (today == 5) {
    friday.classList.add('today');
}

if (today == 6) {
    saturday.classList.add('today');
}

document.addEventListener('mouseover', () => {
    box1.classList.add('hover');
    box2.classList.add('hover');
    box3.classList.add('hover');
    box4.classList.add('hover');
    box5.classList.add('hover');
    box6.classList.add('hover');
    box7.classList.add('hover');
})

mon.addEventListener('mouseover', event => {
    box1.classList.remove('hover');
    event.stopPropagation();
})

tue.addEventListener('mouseover', event => {
    box2.classList.remove('hover');
    event.stopPropagation();
})

wed.addEventListener('mouseover', event => {
    box3.classList.remove('hover');
    event.stopPropagation();
})

thur.addEventListener('mouseover', event => {
    box4.classList.remove('hover');
    event.stopPropagation();
})

friday.addEventListener('mouseover', event => {
    box5.classList.remove('hover');
    event.stopPropagation();
})

saturday.addEventListener('mouseover', event => {
    box6.classList.remove('hover');
    event.stopPropagation();
})

sunday.addEventListener('mouseover', event => {
    box7.classList.remove('hover');
    event.stopPropagation();
})
