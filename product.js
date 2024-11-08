// Icon map for products
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
  amla: "amla.png",
  tulsi: "tulsi.png",
  turmetic: "termeric.png",
  Shatavari: "shatavari.png",
  Sandalwood: "Sandalwood.png",
  KasturiManjal: "KasturiManjal.png"
};

// Function to show product details
function showDetails(productName) {
  const lang = document.documentElement.lang; // Get the current language
  const productData = translationData[lang]?.products[productName]; // Fetch product data in the current language

  if (!productData) {
    console.warn(`No translation found for product: ${productName} in language: ${lang}`);
    return;
  }

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

  