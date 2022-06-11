// let graphs = document.querySelectorAll('.day-container div');

let wed = document.querySelector('.wednesday');
let thur = document.querySelector('.thursday');
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')

document.addEventListener('mouseover', () => {
    box1.classList.add('hover');
    box2.classList.add('hover');
})

wed.addEventListener('mouseover', event => {
    box1.classList.remove('hover');
    event.stopPropagation();
})

thur.addEventListener('mouseover', event => {
    box2.classList.remove('hover');
    event.stopPropagation();
})
// graphs.forEach(graph => {
//     graph.addEventListener('mouseover', () => {
//         if (graph.isEqualNode(wed)) {
//             wed.classList.add('hover-box2');
//             console.log(wed)
//         }
//     })
// })