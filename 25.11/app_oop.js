// Raamat

class Raamat {
    constructor(a, p, i){
        this.autor = a;
        this.pealkiri = p;
        this.isbn = i;
    };
};
const raamat = new Raamat('Tammsaare', 'Tõde ja õigus', 12345);
console.log(raamat);

// Kasutaja liides

class KL {
    // Sisendi puhastamine
    puhastaSisend(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };
    lisaRaamatTabelisse(r) {
        const rida = document.createElement('tr');
        // täidame rida tabeli andmetega
        rida.innerHTML = `
        <td>${r.pealkiri}</td>
        <td>${r.autor}</td>
        <td>${r.isbn}</td>
        <td><a href="#" class="kustuta"><i class="fas fa-times"></i></a></td>
        `;
        // lisame rida tabelisse
        const tabel = document.getElementById('book-list');
        tabel.appendChild(rida);
    };
    teade(s, stiil) {
        // loome div, kuhu lisada teade sõnum
        const div = document.createElement('div');
        div.className = `alert ${stiil}`;
        // lisame sõnumi tekst divi sisse
        const tekst = document.createTextNode(s);
        div.appendChild(tekst);
        // leiame elemendid, mille suhtes tuleb lisada uus element
        const konteiner = document.querySelector('.container');
        const vorm = document.getElementById('book-form');
        // lisame teade dokumendi
        konteiner.insertBefore(div, vorm);
        // kustutame teade 5 sekundi möödumisel
        setTimeout(function(){ 
            document.querySelector('.alert').remove();
        }, 5000);
    };
    kustutaRaamatTabelist(kustutaElement) {
        if(kustutaElement.className === 'fas fa-times'){
            const tabeliRida = kustutaElement.parentElement.parentElement.parentElement;
            tabeliRida.remove();
            return true;
          };
    };
};

// kirjeldame raamatu lisamise sündmust
document.getElementById('book-form').addEventListener('submit', lisaRaamat);
// raamatu lisamise funktsioon
function lisaRaamat(e){
    // võtame andmed vormist
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    // loome raamat andmete põhjal
    const raamat = new Raamat(autor, pealkiri, isbn);
    // loome kasutaja liidese objekt temaga opereerimiseks
    const kl = new KL();
    const ls = new LS();
    // kui mingid andmed on puudu, 
    // siis anname märku
    if(pealkiri == '' | autor == '' | isbn == ''){
        kl.teade('Tuleb täita kõik väljad!', 'invalid');
    } else {
        // muidu
        // lisame sisestatud raamat tabelisse
        kl.lisaRaamatTabelisse(raamat);
        // salvestame raamatu andmed LS-sse
        ls.salvestaRaamat(raamat);
        // kl.salvestaRaamat(raamat);
        kl.teade('Raamat on lisatud!', 'valid');
        // puhastame väljad sisestatud andmetest
        kl.puhastaSisend();
    }
    e.preventDefault();
};

// raamatu kustutamise sündmus
document.getElementById('book-list').addEventListener('click', kustutaRaamat);

function kustutaRaamat(e){
    // loome kasutaja liidese objekt temaga opereerimiseks
    const kl = new KL();
    const ls = new LS();

    // kutsume tabelis oleva raamatu kustutamise
    // funktsioon
    // loome X link, millel clickime kustutamiseks
    const X = e.target;
    // saame kustutava raamatu isbn kätte
    isbn = X.parentElement.parentElement.previousElementSibling.textContent;
    // kustutame andmed tabeli väljundist
    kl.kustutaRaamatTabelist(X);
    // kustutame andmed LS-st
    const onKustutatud = ls.kustutaRaamatLS(isbn);
  
    // väljastame vastava teate
    if(onKustutatud){
    kl.teade('Raamat on kustutatud', 'valid');
    }
    e.preventDefault();
}