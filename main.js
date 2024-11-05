
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang") || "en";
    setLanguage(lang);
});
