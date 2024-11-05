document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang") || "en";

    console.log(`Initial language on page load: ${lang}`); // Debug line

    try {
        setLanguage(lang);
        setAboutButtonLink(lang); // Pass the language to setAboutButtonLink
    } catch (error) {
        console.error("Error in setting initial language:", error);
    }
    
    if (document.getElementById("about-introduction")) {
        try {
            setAboutContent(lang);
        } catch (error) {
            console.error("Error in setting About page content:", error);
        }
    }
});
document.getElementById("aboutButton").addEventListener("click", function(event) {
    const lang = document.documentElement.lang || "en";
    this.href = `about.html?lang=${lang}`;
    console.log(`Navigating to: ${this.href}`); // Log the link when clicked
});

function switchLanguage(lang) {
    console.log(`Switching language to: ${lang}`);
    setLanguage(lang);
    setAboutButtonLink(lang); // Ensure About Us link updates
    history.replaceState(null, null, `${window.location.pathname}?lang=${lang}`);
    
    // Update About page content if on the About page
    if (document.getElementById("about-introduction")) {
        setAboutContent(lang);
    }
}

function setAboutButtonLink(lang) {
    const aboutButton = document.getElementById("aboutButton");
    if (aboutButton) {
        const aboutUrl = `about.html?lang=${lang}`;
        aboutButton.href = aboutUrl; // Update href as a fallback
        aboutButton.onclick = function() {
            console.log(`Navigating to: ${aboutUrl}`);
            window.location.href = aboutUrl; // Explicitly trigger navigation
        };
        console.log(`Updated About Us link to: ${aboutUrl}`);
    }
}


function setLanguage(lang) {

    // Ensure translation data exists and the specified language is available
    if (typeof translationData === 'undefined' || !translationData[lang]) {
        console.error("Translation data is missing or invalid language code.");
        return;
    }

    const translations = translationData[lang];
    document.documentElement.lang = lang;

    // Apply translations to main page elements with added checks for null elements
    if (translations.intro) {

        const introTitleElement = document.getElementById("introTitle");
        if (introTitleElement) introTitleElement.innerText = translations.intro.title || '';

        const introSubtitleElement = document.getElementById("introSubtitle");
        if (introSubtitleElement) introSubtitleElement.innerText = translations.intro.subtitle || '';

        const introLine1Element = document.getElementById("introLine1");
        if (introLine1Element) introLine1Element.innerText = translations.intro.line1 || '';

        const introLine2Element = document.getElementById("introLine2");
        if (introLine2Element) introLine2Element.innerText = translations.intro.line2 || '';
    } else {
        console.warn(`Missing intro translations for language: ${lang}`);
    }

    // Apply translations to buttons
    if (translations.buttons) {
        const contactButton = document.getElementById("contactButton");
        if (contactButton) contactButton.innerText = translations.buttons.contact || '';

        const aboutButton = document.getElementById("aboutButton");
        if (aboutButton) aboutButton.innerText = translations.buttons.about || '';
    } else {
        console.warn(`Missing button translations for language: ${lang}`);
    }

    // Apply translations to footer
    if (translations.footer) {
        const footerText = document.getElementById("footerText");
        if (footerText) footerText.innerText = translations.footer.text || '';
    } else {
        console.warn(`Missing footer translations for language: ${lang}`);
    }

    // Apply translations to form elements
    if (translations.form) {
        const formHeading = document.getElementById("formHeading");
        if (formHeading) formHeading.innerText = translations.form.heading || '';

        const nameLabel = document.getElementById("nameLabel");
        if (nameLabel) nameLabel.innerText = translations.form.nameLabel || '';

        const emailLabel = document.getElementById("emailLabel");
        if (emailLabel) emailLabel.innerText = translations.form.emailLabel || '';

        const messageLabel = document.getElementById("messageLabel");
        if (messageLabel) messageLabel.innerText = translations.form.personalMessageLabel || '';

        const productLabel = document.getElementById("productLabel");
        if (productLabel) productLabel.innerText = translations.form.productLabel || '';

        const otherProductsLabel = document.getElementById("otherProductsLabel");
        if (otherProductsLabel) otherProductsLabel.innerText = translations.form.otherProducts || '';

        const preBookingLabel = document.getElementById("preBookingLabel");
        if (preBookingLabel) preBookingLabel.innerText = translations.form.preBooking || '';

        const submitButton = document.getElementById("submitButton");
        if (submitButton) submitButton.innerText = translations.form.submitButton || '';

        const cancelButton = document.getElementById("cancelButton");
        if (cancelButton) cancelButton.innerText = translations.form.cancelButton || '';
    } else {
        console.warn(`Missing form translations for language: ${lang}`);
    }

    // Apply translations to product list items
    const productItems = document.querySelectorAll(".product-item");
    productItems.forEach((item) => {
        const productNameKey = item.getAttribute("data-name");
        const productTranslations = translations.products[productNameKey];

        if (productTranslations) {
            // Set product name
            const productNameElement = item.querySelector(".product-name");
            if (productNameElement) {
                productNameElement.innerText = productTranslations.name || '';
            }

            // Set product description
            const productDescriptionElement = item.querySelector(".product-description");
            if (productDescriptionElement) {
                productDescriptionElement.innerText = productTranslations.description || '';
            }
        } else {
            console.warn(`Missing translations for product: ${productNameKey}`);
        }
    });

    // Apply translations to Product Details section
    if (translations.productDetails) {
        const productDetailsTitle = document.getElementById("productDetailsTitle");
        if (productDetailsTitle) productDetailsTitle.innerText = translations.productDetails.title || '';

        const productDetailsMessage = document.getElementById("productDetailsMessage");
        if (productDetailsMessage) productDetailsMessage.innerText = translations.productDetails.message || '';
    } else {
        console.warn(`Missing product details translations for language: ${lang}`);
    }

    // Update the URL without reloading the page
    history.replaceState(null, null, `${window.location.pathname}?lang=${lang}`);
    console.log("end of setLanguage: " + lang);
}

// Function to set About page content based on the current language
function setAboutContent(lang) {
    console.log("setAboutContent in: " + lang);
    const aboutTranslations = translationData[lang]?.about;

    if (!aboutTranslations) {
        console.warn(`No 'about' section translations found for language: ${lang}`);
        return;
    }

    // Set About page elements
    document.title = aboutTranslations.heading || "About Us";

    const aboutIntro = document.getElementById("about-introduction");
    if (aboutIntro) aboutIntro.innerText = aboutTranslations.introduction || '';

    const aboutVisit = document.getElementById("about-visit");
    if (aboutVisit) aboutVisit.innerText = aboutTranslations.visit || '';

    const backToHome = document.getElementById("backToHome");
    if (backToHome) backToHome.innerText = aboutTranslations.backToHome || '';

    const footerText = document.getElementById("footerText");
    if (footerText) footerText.innerText = aboutTranslations.footer || '';

    // Populate About page cards
    const aboutCardsContainer = document.getElementById("about-cards");
    if (aboutCardsContainer) {
        aboutCardsContainer.innerHTML = aboutTranslations.cards
            .map(card => `
                <div class="card">
                    <img src="./images/${card.image}" alt="${card.text}" class="about-image">
                    <p class="card-text text-gray-600">${card.text}</p>
                </div>
            `)
            .join("");
    }
}
