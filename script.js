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
