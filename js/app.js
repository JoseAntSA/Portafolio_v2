import { validate, validateButton, sendInfo } from "./validations.js";

const inputs = document.querySelectorAll(".input");
let button = document.querySelector(".btn-send");

inputs.forEach((input) => {
  input.addEventListener("keyup", (input) => {
    validate(input.target);
    validateButton(inputs, button);
  });
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

button.addEventListener("click", (button) =>{
  sendInfo(inputs);
});

 