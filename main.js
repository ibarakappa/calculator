let first = document.querySelector("#first");
let second = document.querySelector("#second");
let button = document.querySelector("#btn");
let select = document.querySelector("#form");
let result = document.querySelector("#result");
let switchValue = 0;

button.addEventListener("click", function () {
   switchValue = select.value;
   let a = +first.value;
   let b = +second.value;
   if (switchValue == 1) {
      result.innerText = a + b;
   }
   if (switchValue == 2) {
      result.innerText = a - b;
   }
   if (switchValue == 3) {
      result.innerText = a * b;
   }
   if (switchValue == 4) {
      result.innerText = a / b;
   }
   first.value = null;
   second.value = null;
});
