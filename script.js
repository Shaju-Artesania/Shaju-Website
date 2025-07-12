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

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = document.querySelector('.main-nav').contains(event.target);
    const isClickOnToggle = document.querySelector('.nav-toggle').contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && document.querySelector('.main-nav').classList.contains('active')) {
        document.querySelector('.nav-toggle').classList.remove('active');
        document.querySelector('.main-nav').classList.remove('active');
    }
});

document.getElementById('current-year').textContent = new Date().getFullYear();