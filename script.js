
console.log("page uploading ...")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")
const clearbtn = document.querySelectorAll("#clear")
const deletebtn = document.querySelectorAll("#delete")

// console.log(display, "display clicked")
// console.log(numbers, "num clicked")
// console.log(operators, "op clicked")
// console.log(clear, "clear clicked")
// console.log(deletebtn, "delete clicked")

let currentInput = "";
let intialInput = "0";

function updateDisplay() {

   (display.value = intialInput )
}

console.log(updateDisplay());

numbers.forEach(btn => {
   btn.addEventListener("click", () => {
      currentInput += btn.textContent;
      display.value = currentInput;
   })
})
operators.forEach(btn => {
   btn.addEventListener("click", () => {
      currentInput += btn.textContent;
      display.value = currentInput;
   })
})

// display intialization

