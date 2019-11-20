// storage

// salvestamine
// localStorage.setItem('nimi', 'Unn');
// localStorage.setItem('perenimi', 'Krigul');

// väärtuse eemaldamine
// localStorage.removeItem('nimi');

// väärtuste lugemine
// const perenimi = localStorage.getItem('perenimi');
// const nimi = localStorage.getItem('nimi');

// console.log(nimi+perenimi);

// puhasta kõik andmed

// localStorage.clear()

document.querySelector('form').addEventListener('submit', salvesta);

function salvesta(e){
    const value = document.getElementById('task').value;
    let ylesanded;
    if(localStorage.getItem('tasks') === null){
        ylesanded = [];
        localStorage.setItem('tasks', JSON.stringify(ylesanded));
        console.log('ylesanded');
    }
    else {
        console.log('tuleb lugeda');
        ylesanded = JSON.parse(localStorage.getItem('tasks'));
    }
    ylesanded.push(value);
    console.log(ylesanded);
    localStorage.setItem('tasks', JSON.stringify(ylesanded))
};