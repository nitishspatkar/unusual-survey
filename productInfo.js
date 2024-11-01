// Product data for the unusual products website
const productInfo = {
  "Vetiver": {
    description: "Vetiver, also known as 'khus' in India, is a tall, fragrant grass known for its deep-rooted system. Primarily found in South India, it has been used for centuries in Ayurveda due to its cooling and grounding properties.",
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
    description: "Soap berries, or 'reetha,' are fruits from the soap nut tree, used as a natural cleanser for centuries due to their saponin content. They’re an eco-friendly alternative to synthetic detergents and shampoos.",
    items: [
      { name: "Whole Berries", desc: "Used for natural laundry detergent.", usage: "Place in a cloth bag for laundry." },
      { name: "Powder", desc: "Acts as a natural shampoo and cleanser.", usage: "Mix with water for hair wash." }
    ]
  },
  "Kokum": {
    description: "Kokum is a tropical fruit native to the Western Ghats of India, prized for its digestive benefits. It’s often used in coastal Indian cuisines and Ayurvedic remedies to relieve acidity and inflammation.",
    items: [
      { name: "Butter", desc: "Rich, natural moisturizer from kokum seeds.", usage: "Apply on dry skin for deep hydration." },
      { name: "Syrup", desc: "Refreshing summer drink with cooling properties.", usage: "Mix with water or soda for a tangy, refreshing beverage." }
    ]
  },
  "Rose": {
    description: "Rose, or 'gulab,' is deeply rooted in Indian culture, valued for its fragrance and beauty. Rose water is widely used in culinary traditions, skincare, and religious rituals.",
    items: [
      { name: "Rose Water", desc: "Natural toner and skin refresher.", usage: "Apply to skin with a cotton pad or add to recipes." },
      { name: "Powder", desc: "Fragrant addition to culinary dishes and skincare.", usage: "Mix into face masks or desserts." },
      { name: "Marmalade", desc: "Delicious, fragrant preserve made from rose petals.", usage: "Spread on toast or add to desserts." }
    ]
  },
  "Neem": {
    description: "Neem is an evergreen tree native to India, known for its medicinal properties in Ayurveda. Its leaves, bark, and oil have been used traditionally for skin care and healing.",
    items: [
      { name: "Leaves", desc: "Traditionally used for skin health and immunity.", usage: "Use in baths or make into a paste for skin." },
      { name: "Powder", desc: "Natural remedy for skin and hair health.", usage: "Mix with water to make a paste or add to face masks." },
      { name: "Oil", desc: "Neem oil with antibacterial properties.", usage: "Apply to skin for moisturizing and healing." },
      { name: "Soap", desc: "Gentle, antibacterial soap for skin care.", usage: "Use for daily body cleansing." }
    ]
  },
  "Amla": {
    description: "Amla, also known as Indian gooseberry, is a rich source of vitamin C and is revered in Ayurveda for its rejuvenating properties.",
    items: [
      { name: "Raw", desc: "Fresh amla fruit, rich in vitamin C.", usage: "Eat raw or juice for immune support." },
      { name: "Dry", desc: "Dried amla for a tangy, healthful snack.", usage: "Add to teas or eat as-is." },
      { name: "Powder", desc: "Amla powder for skin and hair care.", usage: "Mix with water for a natural face or hair mask." },
      { name: "Oil", desc: "Amla oil for hair health.", usage: "Massage into scalp for stronger, healthier hair." }
    ]
  },
  "Jaswand/Hibiscus": {
    description: "Hibiscus, or 'jaswand,' is known for its vibrant flowers and its benefits for hair and skin. It is a popular ingredient in herbal teas and Ayurvedic treatments.",
    items: [
      { name: "Dry", desc: "Dried hibiscus flowers for teas and skincare.", usage: "Brew in hot water for a refreshing tea." },
      { name: "Powder", desc: "Hibiscus powder for hair and skin.", usage: "Add to face masks or hair treatments." },
      { name: "Oil", desc: "Hibiscus oil for moisturizing skin and hair.", usage: "Apply to hair for conditioning or to skin for hydration." }
    ]
  }
};

// Show product details function
function showDetails(productName) {
  const product = productInfo[productName];
  if (!product) return;

  // Locate the clicked product item
  const productItem = document.querySelector(`.product-item[data-name="${productName}"]`);

  // Remove any existing details section
  document.querySelectorAll(".product-details-temp").forEach(el => el.remove());

  // Create a new details section
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "product-details-temp p-4 bg-white rounded-lg shadow-md mt-4";
  detailsDiv.innerHTML = `
    <h2 class="text-xl font-semibold mb-2">${productName}</h2>
    <p class="text-gray-600">${product.description}</p>
    <div class="space-y-4 mt-4">
      ${product.items.map(item => `
        <div>
          <p class="text-blue-600 font-semibold">${item.name}</p>
          <p class="text-gray-700">${item.desc}</p>
          <p class="text-gray-500 italic">Usage: ${item.usage}</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" onclick="openForm('${item.name}')">I am interested</button>
        </div>
      `).join("")}
    </div>
  `;

  // Insert the details section right after the clicked product item
  productItem.parentNode.insertBefore(detailsDiv, productItem.nextSibling);
}

// Open and Close Form Functions
function openForm(productName) {
  document.getElementById("formModal").classList.add("show");
  document.getElementById("productSelect").value = productName;
}

function closeForm() {
  document.getElementById("formModal").classList.remove("show");
}

// Form Submission Function Using EmailJS
function submitForm() {
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

  emailjs.send("service_4o2zrfj", "template_1a4wf69", templateParams, "B03UDczpmPzTeYb5c")
  .then(() => {
    alert("Thank you! Your interest has been recorded.");
    closeForm();
  }, (error) => {
    console.error("Failed to send email:", error);
    alert("There was an error submitting your interest. Please try again later.");
  });
}
