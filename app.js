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

console.log(sisu);