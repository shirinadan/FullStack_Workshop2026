/*Solutions are committed to the same branch inside the SOLUTIONS folder.*/

/*
  STEP 1: SELECT YOUR ELEMENTS FROM THE DOM
  You need to grab each part of the calculator from the HTML.
  The first one is done for you as an example!
*/

const screen = document.getElementById("calcScreen"); 

// Grab all buttons with class "num" using querySelectorAll
// Grab all buttons with class "sign" using querySelectorAll
// Grab the ONE element with class "signEqual" using querySelector
// Grab the element with id "clearButton"
// Grab the element with id "deleteButton"
   
   
/*
  STEP 2: STATE VARIABLES
  These keep track of what the user is doing.
  They are already declared — just understand what each one is for!
   
  currentValue  → the number currently showing on screen
  previousValue → the first number (saved before an operator is clicked)
  currentOperator → which operator the user clicked (+, -, *, /)
*/

let currentValue = "0";
let previousValue = "";
let currentOperator = null;
   

/*
  STEP 3: updateScreen()
  This function's only job: show currentValue on the screen.
  Hint: use textContent on the screen element
*/
   
function updateScreen() {
// set the screen's text to show whatever currentValue is 
}
   
   
/* 
  STEP 4: handleNumberClick(digit)
  This runs every time a number button is clicked.
  It receives one argument: digit (the number that was clicked)
   
  Logic:
  - If currentValue is "0", replace it with the new digit
  - Otherwise, add the digit to the END of currentValue
  - Call updateScreen() at the end
*/
   
function handleNumberClick(digit) {
   
}
   
   
/*
  STEP 5: handleOperatorClick(operator)
  This runs when the user clicks +, -, *, or /
  It receives one argument: operator (the symbol clicked)
   
  Logic:
  - Save currentValue into previousValue (this is the first number)
  - Save the operator into currentOperator
  - Reset currentValue back to "0" so user can type the second number
*/
   
function handleOperatorClick(operator) {
   
}
   
   
/*
  STEP 6: performCalculation()
  This runs when the user hits =
  No arguments — it uses previousValue, currentValue, currentOperator

  Logic: Try to figure out on your own!
*/
   
function performCalculation() {
   
}
   
/* STEP 7: ADD EVENT LISTENERS - Connect all your buttons to your functions! */