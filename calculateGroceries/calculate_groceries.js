let grocery1;
let grocery2;
let grocery3;

function groceryTotal() {
    grocery1 = parseFloat(document.getElementById('grocery_1').value);
    grocery2 = parseFloat(document.getElementById('grocery_2').value); //parseFloat converts a string value from the input field to a floating point number
    grocery3 = parseFloat(document.getElementById('grocery_3').value);

    let totalAmount = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = "The total amount is: " + totalAmount;
}
