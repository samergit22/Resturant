
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon =  themeButton?.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";



themeButton?.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme);
  localStorage.setItem("selected-icon", getCurrentIcon);
});


document.getElementById("orderForm")?.addEventListener("submit", function (event) {
   event.preventDefault()
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pizzaType = document.getElementById("pizzaType").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;
    const pizzaPrices = {
        Margherita: 9,
        Pepperoni: 10,
        "BBQ Chicken": 12,
        Veggie: 3,
    };

    const pricePerPizza = pizzaPrices[pizzaType];
    const totalPrice = (pricePerPizza * quantity).toFixed(2);


    // Generate order summary
    const summary = `
        <strong>Name:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Pizza Type:</strong> ${pizzaType} <br>
        <strong>Quantity:</strong> ${quantity} <br>
        <strong>Delivery Address:</strong> ${address}
    `;
  // Display the order summary and price
  document.getElementById("priceDisplay").textContent = `Total Price: $${totalPrice}`;
  document.getElementById("orderSummary").style.display = "block";
  document.getElementById("summaryDetails").innerHTML = summary;
});