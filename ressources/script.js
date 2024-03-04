let onTop = document.querySelector('.onTop');
onTop.addEventListener('click', ()=>{
    window.scrollTo(0, document.body.offsetTop);
})

let films = document.querySelector('.films');
let films_cible = document.getElementById('films')
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

let loaderScreen = document.querySelector(".loader")
let page = document.querySelector(".page")

function load(){
    setTimeout(()=>{
    loaderScreen.style.display = "none";
    }, 1450)
}
load()

// FILM
const slides_film = document.querySelectorAll(".slides_film"); 
let currentSlide_film = 0; 
let totalSlides_film = slides_film.length;

function who_slides_film(index){
    if(index == "0")
    {
        slides_film[1].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
        slides_film[2].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
    }
    if(index == "1")
    {
        slides_film[0].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
        slides_film[2].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
    }
    if(index == "2")
    {
        slides_film[0].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
        slides_film[1].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
    }
}
function showSlide_right_film(index) {
    slides_film.forEach((slide) => { 
        slide.classList.remove("active"); 
    }); 
    slides_film[index].classList.add("active");
    slides_film[index].style.transform = "translateX(0%)"
    who_slides_film(index)
}
function showSlide_left_film(index) {
    slides_film.forEach((slide) => {
        slide.classList.remove("active"); 
    }); 
    slides_film[index].classList.add("active");
    slides_film[index].style.transform = "translateX(0%)"
    who_slides_film(index)
}
function nextSlide_film() {
    slides_film[currentSlide_film].style.transform = "translateX(-35%)"
    currentSlide_film = (currentSlide_film + 1) % totalSlides_film; 
    showSlide_right_film(currentSlide_film); 
}
function previousSlide_film() { 
    slides_film[currentSlide_film].style.transform = "translateX(35%)"
    currentSlide_film = (currentSlide_film - 1 + totalSlides_film) % totalSlides_film;
    showSlide_left_film(currentSlide_film);
}
document.querySelector(".prev_film").addEventListener("click", function(){ previousSlide_film(); });
document.querySelector(".next_film").addEventListener("click", function(){ nextSlide_film(); });
showSlide_left_film(currentSlide_film);

// SERIES
const slides_series = document.querySelectorAll(".slides_series"); 
let currentSlide_series = 0; 
let totalSlides_series = slides_series.length;

function who_slides_series(index){
    if(index == "0")
    {
        slides_series[1].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
        slides_series[2].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
    }
    if(index == "1")
    {
        slides_series[0].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
        slides_series[2].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
    }
    if(index == "2")
    {
        slides_series[0].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
        slides_series[1].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
    }
}
function showSlide_right_series(index) {
    slides_series.forEach((slide) => { 
        slide.classList.remove("active"); 
    }); 
    slides_series[index].classList.add("active");
    slides_series[index].style.transform = "translateX(0%)"
    who_slides_series(index)
}
function showSlide_left_series(index) {
    slides_series.forEach((slide) => {
        slide.classList.remove("active"); 
    }); 
    slides_series[index].classList.add("active");
    slides_series[index].style.transform = "translateX(0%)"
    who_slides_series(index)
}
function nextSlide_series() {
    slides_series[currentSlide_series].style.transform = "translateX(-35%)"
    currentSlide_series = (currentSlide_series + 1) % totalSlides_series; 
    showSlide_right_series(currentSlide_series); 
}
function previousSlide_series() { 
    slides_series[currentSlide_series].style.transform = "translateX(35%)"
    currentSlide_series = (currentSlide_series - 1 + totalSlides_series) % totalSlides_series;
    showSlide_left_series(currentSlide_series);
}
document.querySelector(".prev_series").addEventListener("click", function(){ previousSlide_series(); });
document.querySelector(".next_series").addEventListener("click", function(){ nextSlide_series(); });
showSlide_left_series(currentSlide_series);

// DOCUMENTAIRES
const slides_doc = document.querySelectorAll(".slides_doc"); 
let currentSlide_doc = 0; 
let totalSlides_doc = slides_doc.length;

function who_slides_doc(index){
    if(index == "0")
    {
        slides_doc[1].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
        slides_doc[2].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
    }
    if(index == "1")
    {
        slides_doc[0].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
        slides_doc[2].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
    }
    if(index == "2")
    {
        slides_doc[0].style.transform = "scale(0.5) perspective(500px) translateX(175%) rotateY(-45deg)"
        slides_doc[1].style.transform = "scale(0.5) perspective(500px) translateX(-175%) rotateY(45deg)"
    }
}
function showSlide_right_doc(index) {
    slides_doc.forEach((slide) => { 
        slide.classList.remove("active"); 
    }); 
    slides_doc[index].classList.add("active");
    slides_doc[index].style.transform = "translateX(0%)"
    who_slides_doc(index)
}
function showSlide_left_doc(index) {
    slides_doc.forEach((slide) => {
        slide.classList.remove("active"); 
    }); 
    slides_doc[index].classList.add("active");
    slides_doc[index].style.transform = "translateX(0%)"
    who_slides_doc(index)
}
function nextSlide_doc() {
    slides_doc[currentSlide_doc].style.transform = "translateX(-35%)"
    currentSlide_doc = (currentSlide_doc + 1) % totalSlides_doc; 
    showSlide_right_doc(currentSlide_doc); 
}
function previousSlide_doc() { 
    slides_doc[currentSlide_doc].style.transform = "translateX(35%)"
    currentSlide_doc = (currentSlide_doc - 1 + totalSlides_doc) % totalSlides_doc;
    showSlide_left_doc(currentSlide_doc);
}
document.querySelector(".prev_doc").addEventListener("click", function(){ previousSlide_doc(); });
document.querySelector(".next_doc").addEventListener("click", function(){ nextSlide_doc(); });
showSlide_left_doc(currentSlide_doc);

// Pop Up
let span = document.querySelector('.cross');
let hey_listen = document.querySelector('.hey_listen');
span.addEventListener('click', ()=>{
    hey_listen.style.opacity = "0"
    setTimeout(()=>{
        hey_listen.style.display = "none";
    }, 1000)
})

// link a
let link_a = document.querySelectorAll('.disabled_link'); 
link_a.forEach(link => { 
    link.addEventListener('click', function(event){ 
        event.preventDefault(); 
        hey_listen.style.opacity = "1"
        hey_listen.style.display = "block"
        setTimeout(()=>{
            hey_listen.style.opacity = "0"
            setTimeout(()=>{
                hey_listen.style.display = "none";
            }, 1000)
        }, 2000)
    }); 
});

// drag carouesl

// let isDragging = false;
//     let startX, scrollLeft;

//     const carousel = document.getElementById('carousel');

//     carousel.addEventListener('mousedown', (e) => {
//         e.preventDefault();
//         isDragging = true;
//         startX = e.pageX - carousel.offsetLeft;
//         scrollLeft = carousel.scrollLeft;
//     });

//     carousel.addEventListener('mouseleave', () => {
//         isDragging = false;
//     });

//     carousel.addEventListener('mouseup', () => {
//         isDragging = false;
//     });

//     carousel.addEventListener('mousemove', (e) => {
//         if (!isDragging) return;
//         e.preventDefault();
//         const x = e.pageX - carousel.offsetLeft;
//         const distance = (x - startX) * 2;
//         carousel.scrollLeft = scrollLeft - distance;
//     });