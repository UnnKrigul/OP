// inimese kirjeldus OOP abil
// inimese konstruktor

function Isik(e, p, skp){
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);

}

Isik.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
}
Isik.prototype.arvutaVanus = function(){
    const vahe = Date.now() - this.synnikuupaev.getTime();
    const vanusDateKujul = new Date(vahe);
    const taisAasta = vanusDateKujul.getUTCFullYear();
    const vanus = taisAasta -1970;
    return vanus;
}

const unn = new Isik('Unn', 'Krigul', '06-15-1997');
const kadi = new Isik('Kadi', 'Tamm', '07-01-1922');
console.log(kadi.arvutaVanus());
console.log(kadi.taisNimi());
console.log(kadi);

