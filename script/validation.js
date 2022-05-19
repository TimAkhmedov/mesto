const addPlaceForm = document.forms.place;
const editUserForm = document.forms.user;



const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
};

const activateSubmitButton = (button) => {
  button.disabled = false;
  button.classList.remove(validationObject.invalidButtonClass);
}

const deactivateSubmitButton = (button) => {
  button.disabled = true;
  button.classList.add(validationObject.invalidButtonClass);
}

const setButtonState = (button, isValid) => {
  if (isValid) {
    activateSubmitButton(button);
  } else {
    deactivateSubmitButton(button);
  }
}

const setBorderState = (field, isValid) => {
  if (isValid) {
    field.classList.remove(validationObject.invalidBorderClass);
  } else {
    field.classList.add(validationObject.invalidBorderClass);
  }
}

const handleInput = (event) => {
  const currentForm = event.currentTarget;
  
  const input = event.target;
  const currentField = currentForm.querySelector(`.popup__${input.id}-field`);
  const submitButton = currentForm.querySelector(validationObject.submitButtonSelector); 

  validateInput(input, currentForm.checkValidity());
  
  setButtonState(submitButton, currentForm.checkValidity());
  setBorderState(currentField, currentField.checkValidity());
}

const handleSubmit = (event) => {
  event.preventDefault();

  const currentForm = event.target;

  if (currentForm .checkValidity()) {
    currentForm.reset();
  }
}

const renderSubmitButton = () => {
  
}

//editUserForm.addEventListener('submit', handleSubmit);
//addPlaceForm.addEventListener('submit', handleSubmit);
//editUserForm.addEventListener('input', handleInput);
//addPlaceForm.addEventListener('input', handleInput);


