// Sample product information
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
    description: "Soap berries, or 'reetha,' are the dried fruits of the soap nut tree, known for their natural saponin content that cleanses without harmful chemicals. Commonly used as an eco-friendly detergent and shampoo in India.",
    items: [
      { name: "Whole Berries", desc: "Used as a natural laundry detergent.", usage: "Place in a cloth bag for eco-friendly laundry." },
      { name: "Powder", desc: "Used as a gentle shampoo and cleanser.", usage: "Mix with water to wash hair naturally." }
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
      { name: "Marmalade", desc: "Sweet and tangy rose marmalade.", usage: "Spread on toast or add to desserts for a floral touch." }
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
  "Jaswand/Hibiscus": {
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
  
  // Set product title and description
  document.getElementById("product-title").textContent = productName;
  document.getElementById("product-description").textContent = product.description;

  // Populate product items list
  const productItemsList = document.getElementById("product-items");
  productItemsList.innerHTML = ""; // Clear previous items

  product.items.forEach(item => {
    const itemElement = document.createElement("li");
    itemElement.classList.add("p-4", "bg-gray-50", "rounded-lg", "shadow", "mb-4");

    const itemName = document.createElement("h4");
    itemName.classList.add("text-lg", "font-semibold", "text-blue-600");
    itemName.textContent = item.name;
    itemElement.appendChild(itemName);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("text-gray-600");
    itemDesc.textContent = item.desc;
    itemElement.appendChild(itemDesc);

    const itemUsage = document.createElement("p");
    itemUsage.classList.add("text-sm", "text-gray-500", "italic");
    itemUsage.textContent = `Usage: ${item.usage}`;
    itemElement.appendChild(itemUsage);

    const interestButton = document.createElement("button");
    interestButton.classList.add("mt-2", "bg-blue-500", "text-white", "py-1", "px-3", "rounded", "hover:bg-blue-600");
    interestButton.textContent = "I am interested";
    interestButton.onclick = openForm;
    itemElement.appendChild(interestButton);

    productItemsList.appendChild(itemElement);
  });
}

// Open form modal
function openForm() {
  document.getElementById("formModal").style.display = "flex";
}

// Close form modal
function closeForm() {
  document.getElementById("formModal").style.display = "none";
}

// Form submission handler (for future integration with EmailJS or backend)
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const selectedProducts = Array.from(document.getElementById("productSelect").selectedOptions).map(option => option.value);
  const moreInfo = document.getElementById("moreInfo").checked;

  // Prepare the template parameters
  const templateParams = {
    name: name,
    email: email,
    whatsapp: whatsapp,
    selected_products: selectedProducts.join(", "),
    more_info: moreInfo ? "Yes" : "No"
  };

  // Send the email using EmailJS
  emailjs.send("service_4o2zrfj", "template_1a4wf69", templateParams)
  .then(function(response) {
    alert("Thank you! Your interest has been recorded.");
    closeForm();
  }, function(error) {
    console.error("Failed to send email:", error); // Logs detailed error info
    alert("There was an error submitting your interest. Please try again later.");
  });
}
