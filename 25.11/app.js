// inimese kirjeldus OOP abil
// klasside kasutus

class Isik {
    // konstruktor
    constructor(e, p, skp){
        this.eesnimi = e;
        this.perenimi = p;
        this.synnikuupaev = new Date(skp);
    }

    // Tervitus meetod
    tervitus(){
        return `Tere ${this.eesnimi} ${this.perenimi}`
    };


    // Vanuse meetod
    vanus(){
        const vahe = Date.now() - this.synnikuupaev.getTime();
        const vanusDate = new Date(vahe);
        const aasta = vanusDate.getUTCFullYear();
        const vanus = aasta - 1970;
        return vanus;
    };

    // Abiellumine
    abiellumine(uus){
        this.perenimi = uus;
    }

    // Staatiline meetod
    static kuutasu(){
        return 5;
    }
};

// Kliendi klass

class Klient extends Isik{
    constructor(e, p, skp, t, s){
        super(e, p, skp);
        this.telefon = t;
        this.staatus = s;
    };
}

const kadi = new Klient('Kadi', 'Tamm', '1997-06-15', '55555555', 'hõbe');
kadi.abiellumine('Adamson');
console.log(kadi);
console.log(kadi.synnikuupaev);
console.log(kadi.tervitus());
console.log(kadi.vanus());