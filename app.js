// elementide asendamine

// leiame vana elemendi

const vanaPealkiri = document.querySelector('h5');
const div = document.querySelector('.card-action');

// loo uus element

const uusPealkiri = document.createElement('h3');
// uusPealkiri.appendChild(document.createTextNode('Lisatud ülesanded')); on sama mis
uusPealkiri.textContent = 'Lisatud ülesanded';
uusPealkiri.id = 'newTitle';

// asenda vana pealkiri uuega
div.replaceChild(uusPealkiri, vanaPealkiri);
console.log(uusPealkiri);