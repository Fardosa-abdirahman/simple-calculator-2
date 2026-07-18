
console.log("page uploading ...")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operator")
const clearbtn = document.querySelectorAll("#clear")
const deletebtn = document.querySelectorAll("#delete")
const equalbtn = document.querySelectorAll("#equal")

// console.log(display, "display clicked")
// console.log(numbers, "num clicked")
// console.log(operators, "op clicked")
// console.log(clear, "clear clicked")
// console.log(deletebtn, "delete clicked")
// console.log(equalbtn, "equal clicked")

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
   });
});

equalbtn.forEach(btn => {
   btn.addEventListener("click", () => {
      currentInput = eval(currentInput);
      display.value = currentInput;
   });
});
clearbtn.forEach(btn => {
   btn.addEventListener("click", () => {
      currentInput = "";
      display.value = currentInput;
   })
})

deletebtn.forEach(btn => {
   btn.addEventListener("click", () => {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
   })
})
// display intialization
