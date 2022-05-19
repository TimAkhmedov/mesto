export class FormValidator {
  constructor(objConfig, formSelector) {
    this._objConfig = objConfig;
    this._formSelector = formSelector;
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._objConfig.inputSelector));
    this._buttonElement = this._formSelector.querySelector(this._objConfig.submitButtonSelector);
    this._inputErrorClass = objConfig.inputErrorClass;
    this._invalidButtonClass = objConfig.invalidButtonClass;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  } 

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _checkValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setBorderState(inputElem) {
    if (this._hasInvalidInput()) {
      inputElem.classList.add(this._objConfig.invalidBorderClass);
    } else {
      inputElem.classList.remove(this._objConfig.invalidBorderClass);
    }
  }

  _activateSubmitButton() {
    this._buttonElement.classList.remove(this._invalidButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

  deactivateSubmitButton() {
    this._buttonElement.classList.add(this._invalidButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _setButtonState() {
    if (this._hasInvalidInput()) {
      this.deactivateSubmitButton();
    } else {
      this._activateSubmitButton();
    }
  }

  _setEventListeners() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._setButtonState();
        this._setBorderState(inputElement);
        this._checkValidity(inputElement);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}