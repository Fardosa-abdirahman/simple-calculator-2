
console.log("page uploading ...")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operator")
const clearbtn = document.querySelector("#clear")
const deletebtn = document.querySelector("#delete")
const equalbtn = document.querySelector("#equal")

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

// worked
operators.forEach(btn => {
   btn.addEventListener("click", () => {
      currentInput += btn.textContent;
      display.value = currentInput;
   });
});

function saVeResult(name, value) { 
   safedResult = { name, value };
   localStorage.setItem("result", JSON.stringify(safedResult));
   
}

// worked
equalbtn.addEventListener("click", () => {
      currentInput = eval(currentInput);
   display.value = currentInput;
 
   saVeResult("result", currentInput);
}
);

   // worked
clearbtn.addEventListener("click", () => {
      currentInput = "";
      display.value = currentInput;
   })

// worked
deletebtn.addEventListener("click", () => {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
   })

// display intialization
