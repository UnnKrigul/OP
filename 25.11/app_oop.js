// Raamat

class Raamat {
    constructor(a, p, i){
        this.autor = a;
        this.pealkiri = p;
        this.isbn = i;
    }
}
const raamat = new Raamat('Tammsaare', 'Tõde ja õigus', 12345);
console.log(raamat);

