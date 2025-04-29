let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Auto slideshow
let autoSlide = true;
let slideInterval;

if (autoSlide) {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 20000); // Change image every 5 seconds
}

// Pause slideshow when mouse is over it
document.querySelector('.slideshow-container').addEventListener('mouseenter', function() {
  if (autoSlide) {
    clearInterval(slideInterval);
  }
});

// Resume slideshow when mouse leaves
document.querySelector('.slideshow-container').addEventListener('mouseleave', function() {
  if (autoSlide) {
    slideInterval = setInterval(function() {
      plusSlides(1);
    }, 20000);
  }
});