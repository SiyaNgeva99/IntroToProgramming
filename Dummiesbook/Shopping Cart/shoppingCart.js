var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] - 1;
    if (quantities[x] < 0) {
        alert(" You can not go into the negatives with items in your basket! ");
        quantities[x] = quantities[x] + 1;
    }
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt -= prices[x];

    display_all();
}

function total_selection() {
    let orderSummary = "Items in your order:\n"; // Making a string variable to store the order summary
    // Loop through each item in the items array
    for (let i = 0; i < items.length; i++) {
        // // If the quantity is greater than 0, append the item and quantity to the order summary
        if (quantities[i] > 0) {
            orderSummary += `${items[i]} x ${quantities[i]}\n`;
        }
    }
    // Added a new line for better formatting and append the total order amount to the order summary 
    orderSummary += "\nTotal: " + totalOrderAmt;
    
    // Display the slip if everything what is in your basket and the total of each item what you have with the alert dialog 
    alert(orderSummary);
}




function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";


    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td style='width: 100px; text-align: right;'><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";
    myTable += "<td style='width: 100px; text-align: right;'><button onclick='total_selection(" + totalOrderAmt + ")'>Check Out</button></td>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function () {
    display_all();
}