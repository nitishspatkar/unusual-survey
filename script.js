const iconMap = {
  roots: "vetiver_roots.png",
  powder: "powder.png",
  oil: "oil.png",
  scrub: "scrub.png",
  soap: "soap.png",
  incense_sticks: "sticks.png",
  whole_berries: "reetha.png",
  butter: "butter.png",
  syrup: "syrup.png",
  rose_water: "rose_water.png",
  marmalade: "gulkand.png",
  dry: "dry.png",
  leaves: "leaves.png",
  amla: "amla.png"
};


document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang") || "en";
  setLanguage(lang);
});



function setLanguage(lang) {
  if (!translationData[lang]) {
    console.error(`Language data for '${lang}' is missing.`);
    return;
  }
  const translations = translationData[lang];
  document.documentElement.lang = lang;

  // Set introductory text and button text dynamically
  document.getElementById("introTitle").innerText = translations.intro.title;
  document.getElementById("introSubtitle").innerText = translations.intro.subtitle;
  document.getElementById("introLine1").innerText = translations.intro.line1;
  document.getElementById("introLine2").innerText = translations.intro.line2;
  
  const contactButton = document.getElementById("contactButton");
  if (contactButton) contactButton.innerText = translations.buttons.contact;

  const aboutButton = document.querySelector(".about-button");
  if (aboutButton) aboutButton.innerText = translations.buttons.about;

  // Populate product descriptions
  document.querySelectorAll(".product-item").forEach((item) => {
    const productName = item.getAttribute("data-name");
    const productTranslation = translations.products[productName];
    if (productTranslation) {
      item.querySelector(".product-name").innerText = productTranslation.name;
      item.querySelector(".product-description").innerText = productTranslation.description;
    } else {
      console.warn(`Missing translation for product: ${productName}`);
    }
  });

  // Set form text
  document.getElementById("formHeading").innerText = translations.form.heading;
  document.getElementById("nameLabel").innerText = translations.form.nameLabel;
  document.getElementById("emailLabel").innerText = translations.form.emailLabel;
  document.getElementById("mobileLabel").innerText = translations.form.mobileLabel;
  document.getElementById("productLabel").innerText = translations.form.productLabel;

  document.getElementById("otherProductsLabel").innerText = translations.form.otherProducts;
  document.getElementById("preBookingLabel").innerText = translations.form.preBooking;
  document.getElementById("freeSamplesLabel").innerText = translations.form.freeSamples;
  document.getElementById("submitButton").innerText = translations.form.submitButton;
  document.getElementById("cancelButton").innerText = translations.form.cancelButton;

  // Set footer text
  document.getElementById("footerText").innerText = translations.footer.text;

  // Update the URL without reloading the page
  const newURL = `${window.location.pathname}?lang=${lang}`;
  history.replaceState(null, null, newURL);
}

function switchLanguage(lang) {
  const pageName = window.location.pathname;

  if (pageName.includes("about")) {
    window.location.href = lang === "de" ? "about_de.html" : lang === "fr" ? "about_fr.html" : "about.html";
  } else {
    setLanguage(lang);
  }
}

// product details
function showDetails(productId) {
  const lang = document.documentElement.lang;
  const productData = translationData[lang]?.products[productId];

  if (!productData) {
    console.warn(`Translation for product '${productId}' not found.`);
    return;
  }

  document.querySelectorAll(".product-details-temp").forEach(el => el.remove());

  const productItem = document.querySelector(`.product-item[data-name="${productId}"]`);
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "product-details-temp p-6 bg-white rounded-lg shadow-md mt-6";

  detailsDiv.innerHTML = `
  ${productData.items.map(item => `
    <div class="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm">
      <img src="./icons/${iconMap[item.iconKey] || 'default.png'}" alt="${item.name} Icon" class="w-10 h-10 mr-4">
      <div>
        <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
        <p class="text-gray-600">${item.desc}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" onclick="openForm('${item.name}')">I am interested</button>
      </div>
    </div>
  `).join("")}
`;

  productItem.parentNode.insertBefore(detailsDiv, productItem.nextSibling);
  setTimeout(() => detailsDiv.classList.add("show"), 10);
}


function openForm() {
  document.getElementById("formModal").classList.remove("hidden");
}

function closeForm() {
  document.getElementById("formModal").classList.add("hidden");
}

function submitForm() {
  alert("Form submitted!");
  closeForm();
}
