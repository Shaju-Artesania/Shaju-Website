console.log("script.js is loaded");
function changeLanguage(language, pagename) {
    let baseName = pagename;

    // Strip extensions just in case
    if (baseName.endsWith("-es.html")) {
        baseName = baseName.replace("-es.html", "");
    } else if (baseName.endsWith(".html")) {
        baseName = baseName.replace(".html", "");
    }

    // Redirect to correct language page
    if (language === "es") {
        window.location.href = baseName + "-es.html";
    } else {
        window.location.href = baseName + ".html";
    }
}
// Navigation toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.main-nav').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = document.querySelector('.main-nav').contains(event.target);
    const isClickOnToggle = document.querySelector('.nav-toggle').contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && document.querySelector('.main-nav').classList.contains('active')) {
        document.querySelector('.nav-toggle').classList.remove('active');
        document.querySelector('.main-nav').classList.remove('active');
    }
});