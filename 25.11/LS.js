class LS {
    loeRaamatud(){
        // loome raamatute hoidla LS-s
        let raamatud;
        // kui raamatud veel LS-s ei eksisteeri
        if(localStorage.getItem('raamatud') === null){
            raamatud = [];
        } else {
            // kui aga raamatud juba olemas, saame need kätte
            raamatud = JSON.parse(localStorage.getItem('raamatud'));
        }
        return raamatud;
    };
    salvestaRaamat(r){
        // tekitame raamatute massiiv
        const raamatud = this.loeRaamatud();
        // lükame uue raamatud andmed massiivi
        raamatud.push(r);
        // lisame andmed LS-sse
        localStorage.setItem('raamatud', JSON.stringify(raamatud));
    };
    naitaRaamat(){
        // vaatame, millised raamatud on olemas
        const raamatud = this.loeRaamatud();
        raamatud.forEach(function(raamat){
            // loeme andmed LS-st ühekaupa
            // ja teisendame Raamat objektiks
            const r = new Raamat(raamat['autor'], raamat['pealkiri'], raamat['isbn']);
            // Loome kl objekt väljastamiseks
            const kl = new KL();
            // väljastame tabeli rida
            kl.lisaRaamatTabelisse(r);
        });
    };
    kustutaRaamatLS(isbn){
        // vaatame, millised raamatud on olemas
        const raamatud = this.loeRaamatud();
        raamatud.forEach(function(raamat, index){
            // loeme andmed LS-st ühekaupa
            // ja võrdleme
            if(raamat.isbn === isbn){
            raamatud.splice(index, 1); // kustutame valitud element
            }
        });
        // lisame andmed LS-sse
        localStorage.setItem('raamatud', JSON.stringify(raamatud));
        // kinnitame kustutamist teade väljastamiseks
        return true;
    }
};

// kirjeldame andmete lugemise sündmust LS-st
document.addEventListener('DOMContentLoaded', raamatuteTabel);

// raamatute tabeli funktsioon
function raamatuteTabel(e){
  // loome kasutaja liidese objekt temaga opereerimiseks
  const ls = new LS();
  // kutsume raamatute näitamist funktsiooni
  ls.naitaRaamat();
}