import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this.submitButton = this._popupSelector.querySelector('.popup__submit-btn');
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputList = Array.from(this._popupSelector.querySelectorAll('.popup__field'));
  }

  _getInputValues = () => {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm);
  }

  _submitForm = (evt) => {
    evt.preventDefault();
    this._handleSubmitForm(this._getInputValues());
  }

  close() {
    super.close();
    this._resetForm();
  }

  _resetForm() {
    this._form.reset();
  }
}