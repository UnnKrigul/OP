// elementide kustutamine

const listElem = document.querySelectorAll('li');
console.log(listElem);

//kustuta konkreetne element

listElem[2].remove();

const nimekiri = document.querySelector('.collection');
nimekiri.removeChild(listElem[1]);