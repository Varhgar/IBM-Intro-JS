function performOperation() {
   //get user input
   let num1 = parseInt(document.getElementById('input1').value);
   let num2 = parseInt(document.getElementById('input2').value);
   //check if inputs are valid numbers
   if (Number.isFinite(num1) && Number.isFinite(num2)) {
      //perform operation
      let result = multiply(num1, num2);

      //displat result
      displayResult(result);
   } else {
      displayResult('Please enter valid numbers');
   }
}

function multiply(a, b) {
   // add debugger to pause execution
   debugger;

   //multiply numbers
   return a * b;
}

function displayResult(result) {
   const resultElement = document.getElementById('result');
   resultElement.textContent = `The result is: ${result}`;
}

            
