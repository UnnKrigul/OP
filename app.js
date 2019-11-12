// document

let sisu;
// dokumendi omadused
sisu = document; // sisu HTMLis
sisu = document.all; // sisu kasutamisjärjekorras
sisu = document.all[2]; // konkreetne HTML element
sisu = document.all.length; // palju on elemente kokku
sisu = document.head; // head sisu
sisu = document.body; // body sisu
sisu = document.doctype; // dokumendi tüüp
sisu = document.domain;
sisu = document.URL;
sisu = document.characterSet;
sisu = document.contentType;

// formi andmed
sisu = document.forms; // kõik formid
sisu = document.forms[0]; // esimene form
sisu = document.forms[0].id // esimese formi id
sisu = document.forms[0].method; //formi töötlus meetod
sisu = document.forms[0].action;

// lingid
sisu = document.links; // kõik lingid (a)
sisu = document.links[0]; // esimene link
sisu = document.links[0].className; // lingi classid
sisu = document.links[0].classList[0]; // esimene lingi class

// pildid
sisu = document.images;

// scriptid
sisu = document.scripts;
sisu = document.scripts[0].getAttribute('src'); // materjalize js
sisu = document.scripts[1].getAttribute('src'); // lokaalne js

console.log(sisu);