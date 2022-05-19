export class Card {
  constructor(data, templateSelector) {
    this._title = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImageElement = this._element.querySelector('.card__image');
    this._setEvenetListeners();

    this._cardImageElement.alt = this._title;
    this._cardImageElement.src = this._link;
    this._element.querySelector('.card__title').textContent = this._title;

    return this._element;
  }

  _setEvenetListeners() {
    this._element.querySelector('.card__like-btn').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like-btn_active');
    });
    this._element.querySelector('.card__delete-btn').addEventListener('click', (evt) => {
      evt.target.closest('.card').remove();
    });
    this._cardImageElement.addEventListener('click', () => {
      imagePopupElement.alt = this._title;
      imagePopupElement.src = this._link;
      imagePopup.querySelector('.popup__card-title').textContent = this._title;
      openImagePopup(this);
    });
  }
}

import { imagePopupElement, imagePopup, openImagePopup } from "../script/index.js";