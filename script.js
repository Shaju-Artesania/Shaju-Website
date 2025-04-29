console.log("script.js is loaded");
// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            navToggle.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
    
    // Close dropdown when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a:not(.dropdown a)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
    
    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
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
