//slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Nästa/föregående kontroller
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Kontroller för miniatyrbilder
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // Automatiskt bildspel
function autoSlides() {
    plusSlides(1);
    setTimeout(autoSlides, 4000); // Ändra tiden (i millisekunder) mellan bildbyten
  }
  
  // Starta automatiskt bildspel
  autoSlides();
