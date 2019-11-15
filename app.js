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

// node omadused ja meetodid

let nimekiri = document.querySelectorAll('ul.collection');
let nimekirjaElement = document.querySelectorAll('li.collection-item')
console.log(nimekiri);
console.log(nimekirjaElement);

nimekiri = document.querySelector('ul.collection');
console.log(nimekiri);

sisu = nimekiri.childNodes;
sisu = nimekiri.childNodes[0];
/*
1 - element
2 - atripuut
3 - tekst
8 - kommentaar
9 - dokument
10 - doctype
*/ 

sisu = nimekiri.children;
console.log(sisu);

nimekiri.children[1].textContent = 'Õpi rohkem JS';
sisu = nimekiri.children[2].children[0];


sisu = nimekiri.firstChild; // node type
sisu = nimekiri.firstElementChild; // value
console.log(sisu);

sisu = nimekiri.lastElementChild; // value
console.log(sisu);

sisu = nimekiri.childElementCount;
console.log(sisu);

nimekirjaElement = document.querySelector('li.collection-item');
sisu = nimekirjaElement.parentElement;
sisu = nimekirjaElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

sisu = nimekirjaElement.nextSibling; // node type
sisu = nimekirjaElement.nextElementSibling; //value
sisu = nimekirjaElement.previousElementSibling;
console.log(sisu);
