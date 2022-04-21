const addPlaceForm = document.forms.place;
const editUserForm = document.forms.user;
const enableValidation = ({
  submitButtonSelector: '.popup__submit-btn',
  invalidButtonClass: 'popup__submit-btn_invalid',
  invalidBorderClass: 'popup__field_invalid'
});


const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
};

const activateSubmitButton = (button) => {
  button.disabled = false;
  button.classList.remove(enableValidation.invalidButtonClass);
}

const deactivateSubmitButton = (button) => {
  button.disabled = true;
  button.classList.add(enableValidation.invalidButtonClass);
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
    field.classList.remove(enableValidation.invalidBorderClass);
  } else {
    field.classList.add(enableValidation.invalidBorderClass);
  }
}

const handleInput = (event) => {
  const currentForm = event.currentTarget;
  
  const input = event.target;
  const currentField = currentForm.querySelector(`.popup__${input.id}-field`);
  const submitButton = currentForm.querySelector(enableValidation.submitButtonSelector); 

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

editUserForm.addEventListener('submit', handleSubmit);
addPlaceForm.addEventListener('submit', handleSubmit);
editUserForm.addEventListener('input', handleInput);
addPlaceForm.addEventListener('input', handleInput);

