console.log("script.js is loaded");
function changeLanguage(language, pagename) {
    
    // Redirect to the corresponding language version of the page
    if (language === "es") {
        const trimmedPageName = pagename.replace(".html", "");
        window.location.href = trimmedPageName + "-es.html"; // Spanish version
    } else {
        const trimmedPageName = pagename.replace("-es.html", "");
        window.location.href = trimmedPageName + ".html";; // Default to English
    }
}
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.main-nav').classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.nav-toggle');
  const year = document.getElementById('current-year');

  if (year) year.textContent = new Date().getFullYear();
  if (!nav || !toggle) return;

  // Detect whether it's a phone (touch) or desktop
  const clickEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

  // Close menu when clicking outside
  document.addEventListener(clickEvent, (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
      nav.classList.remove('active');
      toggle.classList.remove('active');
    }
  });
});
