// elementide kustutamine

let listElem = document.querySelectorAll('li');
console.log(listElem);

//kustuta konkreetne element

listElem[2].remove();

const nimekiri = document.querySelector('.collection');
nimekiri.removeChild(listElem[1]);

// klassi/atribuudi kustutamine

// class

listElem = listElem[0];
const link = listElem.children[0];

let sisu = link.className;
sisu = link.classList[1];
link.classList.remove('secondary-content');
link.classList.add('secondary-content');

// atribuut
sisu = link.getAttribute('href');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
console.log(sisu);