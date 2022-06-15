import { PopupWithForm } from "./PopupWithForm.js";

export class PopupWithConfirmation extends PopupWithForm {
  constructor({popupSelector, handleSubmitForm}){
    super({popupSelector, handleSubmitForm});
  }

  _submitForm = (evt) => {
    evt.preventDefault();
    this._handleSubmitForm(this._card, this._cardId);
  }

  open(card, id) {
    super.open();
    this._card = card;
    this._cardId = id;
  }
}