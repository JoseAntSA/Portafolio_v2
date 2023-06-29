const messageError = {
  name: {
    valueMissing: "Este campo no puede estar vacío",
    tooLong: "Este campo solo permite máximo 50 caracteres",
    patternMismatch: "Solo se aceptan letras en este campo",
  },
  email: {
    valueMissing: "Este campo puede estar vacío",
    patternMismatch: "El correo no es válido",
  },
  topic: {
    valueMissing: "Este campo no puede estar vacío",
    tooLong: "Este campo solo permite máximo 50 caracteres",
  },
  message: {
    valueMissing: "Este campo no puede estar vacío",
    tooLong: "Este campo solo permite máximo 300 caracteres",
  },
};

const typeError = [
    "valueMissing",
    "tooLong",
    "patternMismatch",
  ];

export function validate(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
  }
  else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  typeError.forEach((error) => {
    if (input.validity[error])
      mensaje = messageError[tipoDeInput][error];
  });
  return mensaje;
}

export function validateButton(inputs, button){
  let boolButton = false;
  inputs.forEach((input) =>{
    if(!input.validity.valid){
      boolButton = true;
    }
  });
  button.disabled = boolButton;
  if(button.disabled)
    button.classList.add("btn-disabled");
  else
    button.classList.remove("btn-disabled");
}
