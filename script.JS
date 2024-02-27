// Slideshow
let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Ändra 2000 till önskad tid i millisekunder mellan bildspelen
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Countdown //
const countdown = () => { 

    // Specificerar när tidräkningen ska räkna ner till och hur 
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
    }; 
        
    // should use 500 as setInterval won't always run on time. 
    setInterval(countdown, 500); 

// Starta bildspelet när sidan laddas
showSlides();

function showTider() {
    const selectedDatum = document.getElementById("datum").value;
    const tidSelect = document.getElementById("tid");
    tidSelect.innerHTML = ""; // Rensa befintliga tider
  
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
  
   // JavaScript för att öppna/stänga formuläret
   const openButton = document.getElementById('open-form');
   const closeButton = document.getElementById('close-button');
   const popupForm = document.getElementById('popup-form');

   openButton.addEventListener('click', () => {
       popupForm.style.display = 'block';
   });

function closeForm() {
    popupForm.style.display = 'none';
    }

// Countdown //
const countdown = () => { 

    // Specify the date and time we are counting down to. 
    
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
    
    }; 
    
    // should use 500 as setInterval won't always run on time. 
    
    setInterval(countdown, 500); 

