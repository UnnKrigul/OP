// Mällu salvestamine
const form = document.querySelector('form');
let list;
form.addEventListener('submit', salvesta)
function salvesta(e){
    const input = document.querySelector('#task').value;
    ;
    if(localStorage.getItem('tasks') === null){
        list = [];
        localStorage.setItem('tasks', JSON.stringify(list));
    }
    else{
        list = JSON.parse(localStorage.getItem('tasks'));
    }
    list.push(input)
    console.log(list);
    localStorage.setItem('tasks', JSON.stringify(list));
}

// Mälust li loomine ja dokumenti paigutamine
let listItems = JSON.parse(localStorage.getItem('tasks'));

listItems.forEach(function (e, i){
    // loon li elemendi
    const li = document.createElement('li');
    li.innerText = e;
    li.className = 'collection-item';
    document.querySelector('.collection').appendChild(li);
    // lisan kustutamise nupu
    const del = document.createElement('a');
    del.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    del.className = 'secondary-content';
    del.href = '#';
    li.appendChild(del);
    // kustutamise nupu funktsionaalsus
    del.addEventListener('click', rm);
    function rm(){
        console.log(i);
        listItems.splice(i, 1);
        li.remove();
        localStorage.setItem('tasks', JSON.stringify(listItems))
    };
});

// Kustuta kõik nupp
const clear = document.querySelector('.clear-tasks');
clear.addEventListener('click', clearMem);
function clearMem(e){
    localStorage.clear();
}