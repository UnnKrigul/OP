// sündmused

const clearTasks = document.querySelector('.clear-tasks');

function delAll(e){
    let sisu = e;
    sisu = e.target.className;
    // tüüp
    sisu = e.type;
    // sündmuse kordinaadid
    sisu = e.clientY;
    sisu = e.offsetY
    console.log(sisu);
};

clearTasks.addEventListener('click', delAll);