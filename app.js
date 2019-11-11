// välimõõdud ja sisemõõdud

let väliKõrgus = window.outerHeight;
let väliLaius = window.outerWidth;

let siseKõrgus = window.innerHeight;
let siseLaius = window.innerWidth;

console.log(väliKõrgus);
console.log(väliLaius);

console.log(siseKõrgus);
console.log(siseLaius);

// scroll 

console.log(window.scrollY);

// location object

let objekt = window.location;
let hname = window.location.hostname;
let prt = window.location.port;
let search = window.location.search;
console.log(objekt);
console.log(prt);
console.log(search);

//redirect

// window.location.reload();