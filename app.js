// single element

// elemendid klassi järgi
let sisu;
sisu = document.getElementsByClassName('collection-item'); // HTML sisu


console.log(sisu);
console.log(sisu[0]);
sisu[0].style.color = 'orange';
sisu[2].textContent = 'Õpi arvuti võrke';

// elemendid query selectoriga
let nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(nimekirjaElemendid);

// elemendid elemendi tagi järgi
nimekirjaElemendid = document.getElementsByTagName('li');
console.log(nimekirjaElemendid);

// teisenda HTML collection arryiks (massiiviks)

nimekirjaElemendid = Array.from(nimekirjaElemendid);
console.log(nimekirjaElemendid);

nimekirjaElemendid.reverse();
console.log(nimekirjaElemendid);

// massiivi läbimine tsüklis
for(let i = 0; i < nimekirjaElemendid.length; i++){
    console.log(nimekirjaElemendid[i].className)
};

// forEach
nimekirjaElemendid.forEach(function(element){
    console.log(element);
    element.style.background = '#ddd';
})

let nimekiriPaaritu = document.querySelectorAll('li:nth-child(odd)');
console.log(nimekiriPaaritu);
let nimekiriPaaris = document.querySelectorAll('li:nth-child(even)');
console.log(nimekiriPaaris);