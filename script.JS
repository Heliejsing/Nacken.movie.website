// Countdown
const countdown = () => {
    const countDate = new Date("June 23, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);

    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;

    if (remainingTime <= 0) {
        clearInterval(intervalId);
    }
};

const intervalId = setInterval(countdown, 500);

// Form
function showTider() {
    const selectedDatum = document.getElementById("datum").value;
    const tidSelect = document.getElementById("tid");
    tidSelect.innerHTML = "";

    if (selectedDatum === "18-juni") {
        addTider(["15.00", "17.30", "20.00", "21.30"]);
    } else if (selectedDatum === "19-juni") {
        addTider(["13.00", "15.30", "18.00", "20.30"]);
    } else if (selectedDatum === "20-juni") {
        addTider(["13.00", "17.30", "19.30", "21.30"]);
    } else if (selectedDatum === "21-juni") {
        addTider(["15.00", "17.30", "19.30"]);
    }
}

function addTider(tider) {
    const tidSelect = document.getElementById("tid");
    tider.forEach(tid => {
        const option = document.createElement("option");
        option.value = tid;
        option.textContent = tid;
        tidSelect.appendChild(option);
    });
}

// JavaScript to open/close the form
const openButton = document.getElementById('open-form');
const closeButton = document.getElementById('close-button');
const popupForm = document.getElementById('popup-form');

openButton.addEventListener('click', () => {
    popupForm.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

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
