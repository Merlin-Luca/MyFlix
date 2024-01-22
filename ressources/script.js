let onTop = document.querySelector('.onTop');
onTop.addEventListener('click', ()=>{
    window.scrollTo(0, document.body.offsetTop);
})

let films = document.querySelector('.films');
let films_cible = document.getElementById('films')
console.log(films_cible);
films.addEventListener('click', ()=>{
    window.scrollTo(0, films_cible.offsetTop - 100);
})

let series = document.querySelector('.series');
let series_cible = document.getElementById('series')
series.addEventListener('click', ()=>{
    window.scrollTo(0, series_cible.offsetTop - 100);
})

let documentaires = document.querySelector('.documentaires');
let documentaires_cible = document.getElementById('documentaires')
documentaires.addEventListener('click', ()=>{
    window.scrollTo(0, documentaires_cible.offsetTop - 100);
})

let suggestions = document.querySelector('.suggestions');
let suggestions_cible = document.getElementById('suggestions')
suggestions.addEventListener('click', ()=>{
    window.scrollTo(0, suggestions_cible.offsetTop - 100);
})