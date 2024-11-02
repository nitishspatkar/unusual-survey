// Product Information
const productInfo = {
  "Vetiver": {
    description: "Vetiver, also known as 'khus' in India, is a tall, fragrant grass known for its deep-rooted system. Primarily found in South India, it has been used for centuries in Ayurveda due to its cooling and grounding properties. Its roots are valued for their earthy scent and calming effects.",
    items: [
      { name: "Roots", desc: "Vetiver roots are aromatic and naturally cooling.", usage: "Use in sachets or cooling mats for natural fragrance." },
      { name: "Powder", desc: "Popular in skincare and natural perfumery.", usage: "Add to face masks for a soothing, fragrant effect." },
      { name: "Oil", desc: "Vetiver essential oil with a calming aroma.", usage: "Diffuse a few drops to create a relaxing atmosphere." },
      { name: "Scrub", desc: "Exfoliating scrub with refreshing properties.", usage: "Apply to damp skin and gently exfoliate." },
      { name: "Soap", desc: "Natural, moisturizing soap with a vetiver scent.", usage: "Use daily for body cleansing and aromatherapy benefits." },
      { name: "Incense Sticks", desc: "Vetiver-infused incense for relaxation.", usage: "Light to create a soothing, aromatic ambiance." }
    ]
  },
  "SoapBerries": {
    description: "Soap berries, or 'reetha,' are fruits from the soap nut tree, used as a natural cleanser for centuries. Their natural saponin content makes them an eco-friendly alternative to synthetic detergents and shampoos.",
    items: [
      { name: "Whole", desc: "Used for natural laundry detergent.", usage: "Place in a cloth bag for eco-friendly laundry." },
      { name: "Powder", desc: "Acts as a natural shampoo and cleanser.", usage: "Mix with water for hair wash." }
    ]
  },
  "Kokum": {
    description: "Kokum is a tropical fruit native to the Western Ghats of India, recognized for its deep purple color and tangy taste. It’s a popular ingredient in cooking and is also used for its digestive benefits in Ayurveda.",
    items: [
      { name: "Butter", desc: "Rich, natural moisturizer from kokum seeds.", usage: "Apply on dry skin for deep hydration." },
      { name: "Syrup", desc: "Refreshing summer drink with cooling properties.", usage: "Mix with water or soda for a tangy, refreshing beverage." }
    ]
  },
  "Rose": {
    description: "Roses, or 'gulab,' are highly valued in India for their fragrance and beauty. Rose water is commonly used in cuisine, skincare, and religious rituals. In Ayurveda, roses are believed to balance all three doshas, promoting emotional well-being.",
    items: [
      { name: "Rose Water", desc: "Hydrating and soothing for the skin.", usage: "Spray on face as a refreshing toner." },
      { name: "Powder", desc: "Fragrant ingredient for skincare and haircare.", usage: "Mix into face masks or hair packs for fragrance and benefits." },
      { name: "Gulkand", desc: "Sweet and tangy rose marmalade.", usage: "Spread on toast or add to desserts for a floral touch." }
    ]
  },
  "Neem": {
    description: "Neem, a tree native to India, is highly valued in Ayurveda for its antibacterial and antifungal properties. Often used in skincare, haircare, and oral hygiene, neem is a powerful natural remedy.",
    items: [
      { name: "Leaves", desc: "Known for their antibacterial properties.", usage: "Use in face masks for clear skin." },
      { name: "Powder", desc: "Effective in skincare and dental hygiene.", usage: "Mix with water for a natural face or hair mask." },
      { name: "Oil", desc: "Neem oil with antibacterial benefits.", usage: "Apply to skin or scalp to soothe irritation." },
      { name: "Soap", desc: "Natural soap for acne-prone skin.", usage: "Use daily for clearer skin." }
    ]
  },
  "Amla": {
    description: "Amla, or Indian gooseberry, is a nutrient-rich fruit known for its high vitamin C content. Widely used in Ayurvedic medicine to boost immunity and improve hair health.",
    items: [
      { name: "Raw", desc: "Tart, nutrient-dense fruit for snacking.", usage: "Consume fresh or add to smoothies." },
      { name: "Dry", desc: "Dried amla pieces for natural remedies.", usage: "Chew daily for a vitamin C boost." },
      { name: "Powder", desc: "Used in hair and skin treatments.", usage: "Mix with water and apply as a hair mask." },
      { name: "Oil", desc: "Amla-infused oil for hair nourishment.", usage: "Massage into scalp to promote hair growth." }
    ]
  },
  "Jaswand": {
    description: "Hibiscus, known as 'jaswand' in India, is valued for its vibrant flowers and benefits for hair health. In Ayurveda, hibiscus is often used to improve hair growth and prevent premature graying.",
    items: [
      { name: "Dry", desc: "Dried hibiscus petals for tea or skincare.", usage: "Brew as tea or use in face masks." },
      { name: "Powder", desc: "Rich in antioxidants for skin and hair.", usage: "Mix with water as a natural hair conditioner." },
      { name: "Oil", desc: "Infused oil for nourishing hair treatment.", usage: "Massage into scalp to enhance hair health." }
    ]
  }
};

// Show product details function
function showDetails(productName) {
  const product = productInfo[productName];
  if (!product) return;

  // Remove any existing details section
  document.querySelectorAll(".product-details-temp").forEach(el => el.remove());

  // Locate the clicked product item
  const productItem = document.querySelector(`.product-item[data-name="${productName}"]`);

  // Create a new details section
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "product-details-temp p-6 bg-white rounded-lg shadow-md mt-6";
  detailsDiv.innerHTML = `
    <h2 class="text-2xl font-bold text-gray-800 mb-4">${productName}</h2>
    <p class="text-gray-700 mb-6">${product.description}</p>
    <div class="space-y-4">
      ${product.items.map(item => `
        <div class="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm">
          <img src="./icons/${item.name.toLowerCase().replace(/\s+/g, '_')}.png" alt="${item.name} Icon" class="w-10 h-10 mr-4">
          <div>
            <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
            <p class="text-gray-600">${item.desc} ${item.usage}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" onclick="openForm('${item.name}')">Tell me more!</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  // Insert the details section right after the clicked product item
  productItem.parentNode.insertBefore(detailsDiv, productItem.nextSibling);

  // Add transition class for smooth display
  setTimeout(() => detailsDiv.classList.add("show"), 10); 
}



// Open form modal
function openForm(productName) {
  console.log("Opening form for:", productName);
  const modal = document.getElementById("formModal");
  if (modal) {
    console.log("Modal element found");
    modal.classList.add("show");
    modal.style.display = "flex"; // Force display to ensure visibility
    console.log("Show class added to modal and display set to flex");
    document.getElementById("productSelect").value = productName;
  } else {
    console.log("Modal element not found");
  }
}


// Close form modal
function closeForm() {
  const modal = document.getElementById("formModal");
  if (modal) {
    modal.classList.remove("show");
    modal.style.display = "none"; // Hide modal by setting display to none
    console.log("Modal closed");
  } else {
    console.log("Modal element not found");
  }
}


// Form submission function using EmailJS
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const selectedProducts = Array.from(document.getElementById("productSelect").selectedOptions).map(option => option.value);
  const moreInfo = document.getElementById("moreInfo").checked;

  const templateParams = {
    name: name,
    email: email,
    whatsapp: whatsapp,
    selected_products: selectedProducts.join(", "),
    more_info: moreInfo ? "Yes" : "No"
  };

  emailjs.send("your_service_id", "your_template_id", templateParams, "your_user_id")
  .then(() => {
    alert("Thank you! Your interest has been recorded.");
    closeForm();
  }, (error) => {
    console.error("Failed to send email:", error);
    alert("There was an error submitting your interest. Please try again later.");
  });
}
