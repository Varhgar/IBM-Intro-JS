let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value); //parseFloat converts a string value from the input field to a floating point number

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: $(area)`;
}
