"use strict";

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("slide-dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slide-dot-active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " slide-dot-active";
    setTimeout(showSlides, 2000);
}