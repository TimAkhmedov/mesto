const addPlaceForm = document.forms.place;
const editUserForm = document.forms.user;
const enableValidation = ({
  submitButtonSelector: '.popup__submit-btn',
  invalidButtonClass: 'popup__submit-btn_invalid'
});


const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);

  // validate input
  //setBorderState(input, isValid);
  errorElement.textContent = input.validationMessage;
};

const activateSubmitBtn = (button) => {
  button.disabled = false;
  button.classList.remove('popup__submit-btn_invalid');
}

const deactivateSubmitBtn = (button) => {
  button.disabled = true;
  button.classList.add('popup__submit-btn_invalid');
}

const setButtonState = (button, isValid) => {
  if (isValid) {
    activateSubmitBtn(button);
  } else {
    deactivateSubmitBtn(button);
  }
}

/*const setBorderState = (border, isValid) => {
  if (isValid) {
    border.classList.remove('popup__field_invalid');
  } else {
    border.classList.add('popup__field_invalid');
  }
}*/

const handleInput = (event) => {
  const currentForm = event.currentTarget;
  const input = event.target;
  const submitButton = currentForm.querySelector('.popup__submit-btn'); 

  validateInput(input, currentForm.checkValidity());
  
  setButtonState(submitButton, currentForm.checkValidity());
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

