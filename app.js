// sündmused

// lehe kaardi pealkiri
// const sisu = document.querySelector('.card-title');
// console.log(sisu);

// sündmus
// function logi(){
//     console.log('tere')
// }
// sisu.addEventListener('click', logi)


// bubbling
// lehe kaardi sisu
// document.querySelector('.card-content').addEventListener('click', function(e){
//     console.log('card-content')
// });


// delegeerimine

const kustuta = document.querySelector('.delete-item');

kustuta.addEventListener('click', del);

function del(e){
    console.log('kustuta');
    e.target.parentElement.remove();
}