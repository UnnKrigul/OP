let eesNimi;
let pereNimi;
let synnikuupaev;
function taisNimi(eesNimi, pereNimi){
    return `${eesNimi} ${pereNimi}`
};
function arvutaVanus(synnikuupaev){
    synnikuupaev = new Date(synnikuupaev);
    vaheSekundites = Date.now();
    synnikuupaev.getTime();
    vanusDate = new Date(vaheSekundites);
    aastaDate = vanusDate.getUTCFullYear();
    vanus = aastaDate - 1970;
    return `vanus on ${vanus} aastat`;
}

console.log(taisNimi('Unn', 'Krigul'));
console.log(arvutaVanus('1997-06-15'));