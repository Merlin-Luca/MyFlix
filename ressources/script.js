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

let loaderScreen = document.querySelector(".loader")
let page = document.querySelector(".page")

function load(){
    setTimeout(()=>{
    loaderScreen.style.display = "none";
    }, 1450)
}
load()

// 

const slides = document.querySelectorAll(".slide"); 
let currentSlide = 0; 
let totalSlides = slides.length;

function showSlide_right(index) {
    slides.forEach((slide) => { 
        slide.classList.remove("active"); 
        slide.classList.remove("right"); 
        slide.classList.remove("left"); 
    }); 
    slides[index].classList.add("active");
    slides[index].classList.add("right");
    slides[index].style.transform = "translateX(0%)"
    if(currentSlide == slides.length - 1)
    {
        slides
    }
}
function showSlide_left(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active"); 
        slide.classList.remove("right"); 
        slide.classList.remove("left"); 
    }); 
    slides[index].classList.add("active");
    slides[index].classList.add("left");
    slides[index].style.transform = "translateX(0%)"
}
function nextSlide() {
    slides[currentSlide].style.transform = "translateX(-35%)"
    currentSlide = (currentSlide + 1) % totalSlides; 
    showSlide_right(currentSlide); }
    
    function previousSlide() { 
        slides[currentSlide].style.transform = "translateX(35%)"
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide_left(currentSlide);
}

document.querySelector(".prev").addEventListener("click", function(){ previousSlide(); });

document.querySelector(".next").addEventListener("click", function(){ nextSlide(); });

showSlide_left(currentSlide);


//-------------------------------------------------
// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// function showSlide(index) {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
//   slides[index].classList.add("active");
// }

// document.querySelector(".prev").addEventListener("click", function() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// });

// document.querySelector(".next").addEventListener("click", function() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// });

// showSlide(currentSlide);
//-------------------------------------------------