console.log("script.js is loaded");
function changeLanguage(language, pagename) {
    // Fallback to index.html if pagename is empty (homepage)
    if (!pagename || pagename === "") {
        pagename = "index.html";
    }

    if (language === "es") {
        const trimmedPageName = pagename.replace(".html", "");
        window.location.href = trimmedPageName + "-es.html"; // Spanish version
    } else {
        const trimmedPageName = pagename.replace("-es.html", "");
        window.location.href = trimmedPageName + ".html"; // Default to English
    }
}


document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.nav-toggle');

  if (!nav || !toggle) {
    console.error('Nav or toggle not found');
    return;
  }

  // ✅ THIS IS WHERE YOU ADD THE LOG
  toggle.addEventListener('click', () => {
    console.log('TOGGLE WORKS');  // this confirms if the button is working
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });
});
