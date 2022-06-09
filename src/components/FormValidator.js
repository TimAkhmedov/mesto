export class FormValidator {
  constructor(objConfig, formSelector) {
    this._objConfig = objConfig;
    this._formSelector = formSelector;
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._objConfig.inputSelector));
    this._buttonElement = this._formSelector.querySelector(this._objConfig.submitButtonSelector);
    this._invalidButtonClass = objConfig.invalidButtonClass;
    this._invalidBorderClass = objConfig.invalidBorderClass;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
  } 

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
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
    if (!inputElem.validity.valid) {
      inputElem.classList.add(this._invalidBorderClass);
    } else {
      inputElem.classList.remove(this._invalidBorderClass);
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

  resetError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      this._setButtonState();
      inputElement.classList.remove(this._invalidBorderClass);
    })
  }
}