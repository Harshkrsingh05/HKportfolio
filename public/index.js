document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbr"); // Use the correct ID for your navbar

  window.onscroll = function() {
    const currentScrollPos = document.documentElement.scrollTop;

    if (currentScrollPos >= 0 && currentScrollPos <= 5) {
      navbar.style.top = "0"; // Show navbar from 0px to 5px
    } else if (currentScrollPos > 5 && currentScrollPos <= 500) {
      navbar.style.top = "-50px"; // Hide navbar from 5px to 500px
    } else {
      navbar.style.top = "0"; // Show navbar after 500px
    }
  };
});
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});



// Function to apply styles based on screen width
function applyStyles() {
  const dynamic = document.querySelector('.dynamic');
  if (window.innerWidth <= 768) { // Mobile screen width
    dynamic.style.float = 'left';
    dynamic.style.flexWrap = 'none';
    dynamic.style.color= '#000';
    dynamic.style.fontSize= '260%';
    dynamic.style.fontWeight= '200';
  } else {
    dynamic.style.float = 'none';
    dynamic.style.flexWrap = 'nowrap';
    dynamic.style.color= '#000';
    dynamic.style.fontSize= '260%';
    dynamic.style.fontWeight= '200';
  }
}
function onDOMContentLoaded() {
  applyStyles();
window.addEventListener('resize', applyStyles);
}
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

