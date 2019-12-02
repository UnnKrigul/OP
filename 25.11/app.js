// Raamatu konstruktor
function Raamat(a, p, i){
    this.autor = a;
    this.pealkiri = p;
    this.isbn = i;
  }
  
  // Kasutaja liides - KL
  // konstruktor
  function KL() {
  
  }
  
  // KL funktsionaal
  // sisendväljade puhastamine
  KL.prototype.puhastaSisend = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
  
  // raamatu lisamine tabelisse
  KL.prototype.lisaRaamatTabelisse = function(r){
    // loome tabeli rida
    const rida = document.createElement('tr');
    // täidame rida tabeli andmetega
    rida.innerHTML = `
      <td>${r.pealkiri}</td>
      <td>${r.autor}</td>
      <td>${r.isbn}</td>
      <td><a href="#" class="delete"><i class="fas fa-times"></i></a></td>
    `;
    // lisame rida tabelisse
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
  }

  // Raamatu kustutamine tabelist
  KL.prototype.kustutaRaamatTabelist = function(kustutaElement){
    const tabeliRida = kustutaElement.parentElement.parentElement.parentElement;
    tabeliRida.remove();
  }

  // teate väljastamine
  KL.prototype.teade = function(s, stiil){
    // loome div, kuhu lisame teate
    const div = document.createElement('div');
    div.className = `alert ${stiil}`;
    const tekst = document.createTextNode(s);
    div.appendChild(tekst);
    const kont = document.querySelector('.container')
    const vorm = document.getElementById('book-form');
    kont.insertBefore(div, vorm);
    setTimeout(function(){
      document.querySelector('.alert').remove()
    }, 5000);
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
  
    // kui andmeid on puudu
    if(pealkiri == '' | author == '' | isbn == ''){
        kl.teade('Tuleb täita kõik väljad', 'invalid');
    }
    else{
        kl.lisaRaamatTabelisse(raamat);
        kl.teade('Raamat on lisatud', 'valid');
    }
  
    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();
  
    e.preventDefault();
  }

  // Raamatu kustutamise sündmus

  document.getElementById('book-list').addEventListener('click', kustutaRaamat);
  function kustutaRaamat(e){
    const kl = new KL();

    kl.kustutaRaamatTabelist(e.target);
    kl.teade('Raamat on kustutatud', 'valid')
  }