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

  const aboutButton = document.getElementById("aboutButton");
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

  // Set product details title and message
  document.querySelector("#details-container h2").innerText = translations.productDetails.title;
  document.querySelector("#details-container p").innerText = translations.productDetails.message;


  // Set form text
  document.getElementById("formHeading").innerText = translations.form.heading;
  document.getElementById("nameLabel").innerText = translations.form.nameLabel;
  document.getElementById("emailLabel").innerText = translations.form.emailLabel;
  document.getElementById("personalMessage").innerText = translations.form.personalMessageLabel;
  document.getElementById("productLabel").innerText = translations.form.productLabel;

  document.getElementById("otherProductsLabel").innerText = translations.form.otherProducts;
  document.getElementById("preBookingLabel").innerText = translations.form.preBooking;
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

function showDetails(productName) {
  const lang = document.documentElement.lang; // get the current language
  const productData = translationData[lang].products[productName];
  if (!productData) return;

  // Remove any existing details section
  document.querySelectorAll(".product-details-temp").forEach(el => el.remove());

  if (window.innerWidth >= 768) {
    // For larger screens, populate details in the dedicated right column
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
      <h2 class="text-2xl font-semibold mb-2">${productData.name}</h2>
      <p class="text-gray-600">${productData.description}</p>
      <div class="space-y-4 mt-4">
        ${productData.items.map(item => `
          <div class="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm">
            <img src="./icons/${iconMap[item.iconKey] || 'default.png'}" alt="${item.name} Icon" class="w-10 h-10 mr-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
              <p class="text-gray-600">${item.desc}</p>
              
            </div>
          </div>
        `).join("")}
      </div>
    `;
    detailsContainer.classList.remove("hidden");
  } else {
    // For mobile screens, show details below the selected product item
    const productItem = document.querySelector(`.product-item[data-name="${productName}"]`);
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "product-details-temp p-6 bg-white rounded-lg shadow-md mt-6";
    detailsDiv.innerHTML = `
      <h2 class="text-xl font-semibold mb-2">${productData.name}</h2>
      <p class="text-gray-600">${productData.description}</p>
      <div class="space-y-4 mt-4">
        ${productData.items.map(item => `
          <div class="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm">
            <img src="./icons/${iconMap[item.iconKey] || 'default.png'}" alt="${item.name} Icon" class="w-10 h-10 mr-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
              <p class="text-gray-600">${item.desc}</p>
              
            </div>
          </div>
        `).join("")}
      </div>
    `;

    // Insert the details section right after the clicked product item
    productItem.after(detailsDiv);
  }
}


// Form functions
function openForm() {
  document.getElementById("formModal").classList.remove("hidden");
}

function closeForm() {
  document.getElementById("formModal").classList.add("hidden");
}

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("personalMessage").value;
  const selectedProducts = Array.from(document.getElementById("productSelect").selectedOptions).map(option => option.value);
  const otherProducts = document.getElementById("otherProducts").checked;
  const preBooking = document.getElementById("preBooking").checked;

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email) {
    alert("Email is required.");
    return;
  }
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Prepare the data for EmailJS
  const templateParams = {
    name: name,
    email: email,
    personalMessage: personalMessage,
    selected_products: selectedProducts.join(", "),
    other_products: otherProducts ? "Yes" : "No",
    pre_booking: preBooking ? "Yes" : "No",
  };

  // Send the email using EmailJS
  emailjs.send("service_4o2zrfj", "template_1a4wf69", templateParams)
    .then(() => {
      alert("Thank you! Your interest has been recorded.");
      closeForm();
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("There was an error submitting your interest. Please try again later.");
    });
}


