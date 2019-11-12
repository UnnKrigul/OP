// single element

sisu = document.getElementById('title'); // HTML sisu
id = document.getElementById('title').id; // id
klass = document.getElementById('title').className; // klass

// stiili muutmine
sisu.style.background = '#333';
sisu.style.color = '#fff';
sisu.style.padding = '15px';

document.querySelector('li').style.color = 'red'; // leiab ESIMESE sellise elemendi
document.querySelector('ul li'). style.color = 'blue';
document.querySelector('li:last-child'). style.color = 'green' ;
document.querySelector('li:nth-child(2)'). style.color = 'red' ;

// sisu muutmine
sisu.textContent = 'Minu ülesanded'; // textContent
sisu.innerText = 'Just minu ülesanded';
sisu.innerHTML = '<span style="color: green;">Ülesanded</span>';

// query selector
sisu = document.querySelector('h5');
sisu = document.querySelector('#title');
sisu = document.querySelector('.card-title');

console.log(sisu);