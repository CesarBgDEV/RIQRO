'use strict'
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// Grab DOM elements
const images = document.querySelector(".imagesCarrousel")
const imagesCollection = document.querySelectorAll(".imageCarrousel")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

// Utility vars
let index = 0

// Set interval
let interval = setInterval(startInterval, 2000)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(startInterval, 500)
}

function moveCarousel() {
    // Last image
    if (index > imagesCollection.length -1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length -1
    }

    images.style.transform = `translateX(-${index * 700}px)`
}

// Nav buttons
function prevSlide() {
    index--
    //resetInterval()
    clearInterval(interval) 
    moveCarousel()
}

function nextSlide() {
    index++
    //resetInterval()
    clearInterval(interval) 
    moveCarousel()
}


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_78riadh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'reservar';
      alert('Correo enviado exitosamente!');
    }, (err) => {
      btn.value = 'reservar';
      alert(JSON.stringify(err));
    });
});