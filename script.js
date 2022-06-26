/**
 * Our function the button calls to perform our calculation
 * @param {*} event
 */
function calculate(event) {
  event.preventDefault();
  // Get the values/inputs from the user
  var firstNumber = document.getElementById("first-number").value;
  var operator = document.getElementById("operator").value;
  var secondNumber = document.getElementById("second-number").value;
  // get our answer element
  var answerText = document.getElementById("answer-text");
  // Check if the user has entered a number
  if (!firstNumber || !secondNumber) {
    answerText.innerHTML = "Please enter both numbers";
    return;
  }
  // calculate the result
  var resultValue = eval(firstNumber + operator + secondNumber);
  // disolav the result
  answerText.innerHTML = resultValue;
}
