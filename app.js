// elementide loomine

// loo element
const liElem = document.createElement('li');

// lisa klass, id, attribute
liElem.className = 'collection-item';
liElem.id = 'new-item';
liElem.setAttribute('title', 'Uus element');

// li teksti väljund
    // liElem.textContent = 'Helloworld!!';
    // liElem.innerHTML = 'Hello World';
liElem.textContent = 'Uus element';
// loome lingi

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.href = '#';
link.textContent = 'X';
liElem.appendChild(link);
console.log(liElem);
const nimekiri = document.querySelector('.collection');
nimekiri.appendChild(liElem);