// Event listener for the "placeOrder" button
document.getElementById("placeOrder").addEventListener("click", function () {
    // Retrieve input values
    let numPizzas = document.getElementById("numPizzas").value;
    let typePizza = document.getElementById("typePizza").value;
    let deliveryCity = document.getElementById("deliveryCity").value;
    let birthday = document.getElementById("birthday").value;

    // Input validation
    if (isNaN(numPizzas) || numPizzas <= 0) {
        alert("Please enter a valid number of pizzas.");
        return;
    }

    // Calculate order price
    let orderPrice = calculatePrice(numPizzas, typePizza);
    
    // Calculate delivery cost
    let deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // Generate output HTML
    let theOutput = "<p>Thank you for your order.</p>";

    // Display information about free delivery or delivery cost
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice + "</p>";
    }

    // Display total cost
    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice) + "</p>";

    // Update the HTML element with the output
    document.getElementById("displayTotal").innerHTML = theOutput;
});

// Function to calculate the order price based on the number of pizzas and type
function calculatePrice(numPizzas, typePizza) {
    let orderPrice = parseFloat(numPizzas) * 10;
    let extraCharge = 0;
    
    // Apply extra charge for "supreme" type
    if (typePizza === "supreme") {
        extraCharge = parseFloat(numPizzas) * 2;
    }

    orderPrice += extraCharge;
    return orderPrice;
}

// Function to calculate the delivery cost based on order price, delivery city, and birthday
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    let deliveryPrice = 0;

    // Determine delivery cost based on conditions
    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }

    return deliveryPrice;
}
