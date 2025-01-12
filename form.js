// Function to open the form modal
function openForm() {
    document.getElementById("formModal").classList.remove("hidden");
  }
  
  // Function to close the form modal
  function closeForm() {
    document.getElementById("formModal").classList.add("hidden");
  }
  
  // Function to validate and submit the form
  function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const personalMessage = document.getElementById("personalMessage").value;
    const selectedProducts = Array.from(document.getElementById("productSelect").selectedOptions).map(option => option.value);
    const country = document.getElementById("country").value;
    const otherProducts = document.getElementById("otherProducts").checked;
    const preBooking = document.getElementById("preBooking").checked;
  
    // Email validation pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    // Check for required fields and validate email
    if (!email) {
      alert("Email is required.");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!country) {
      alert("Please select your country.");
      return;
    }
  
    // Prepare the data for EmailJS
    const templateParams = {
      name: name,
      email: email,
      personal_message: personalMessage,
      selected_products: selectedProducts.join(", "),
      country: country,
      other_products: otherProducts ? "Yes" : "No",
      pre_booking: preBooking ? "Yes" : "No",
    };
  
    // Send the email using EmailJS
    emailjs.send("service_l9ywr9s", "template_1a4wf69", templateParams)
      .then(() => {
        alert("Thank you! Your interest has been recorded.");
        closeForm();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("There was an error submitting your interest. Please try again later.");
      });
  }
  
  // Initialize EmailJS with your user ID (replace "your_user_id" with your actual user ID)
  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("3ZeygHJopFx8Fx2We");
  });
  