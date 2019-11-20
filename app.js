// sündmused

const clearTasks = document.querySelector('.clear-tasks');
const header = document.querySelector('h5');
const card = document.querySelector('.card');
function syndmus(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`
};

// card.addEventListener('mouseout', syndmus);
// card.addEventListener('dblclick', syndmus);
// card.addEventListener('mousedown', syndmus);
// card.addEventListener('mouseup', syndmus);
// card.addEventListener('mouseenter', syndmus);
// card.addEventListener('mouseleave', syndmus);
// card.addEventListener('mouseover', syndmus);
// card.addEventListener('mouseout', syndmus);
card.addEventListener('mousemove', syndmus);

clearTasks.addEventListener('click', syndmus);