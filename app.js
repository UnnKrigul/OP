// sündmused

const form = document.querySelector('form');
const lisaUus = document.getElementById('task');
const header = document.querySelector('h5');
lisaUus.value = '';
// formi saatmine
form.addEventListener('submit', syndmus)

// lisaUus.addEventListener('keydown', syndmus);
// lisaUus.addEventListener('keyup', syndmus);
// lisaUus.addEventListener('keypress', syndmus);

// lisaUus.addEventListener('focus', syndmus);
// lisaUus.addEventListener('blur', syndmus);

// lisaUus.addEventListener('paste', syndmus);
// lisaUus.addEventListener('cut', syndmus);

lisaUus.addEventListener('input', syndmus);

function syndmus(e){
    // katsetame väärtust
    console.log(lisaUus.value);
    header.innerText = lisaUus.value;
};