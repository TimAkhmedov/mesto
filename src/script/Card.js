export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._title = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._setEventListeners();

    this._cardImageElement.alt = this._title;
    this._cardImageElement.src = this._link;
    this._element.querySelector('.card__title').textContent = this._title;

    return this._element;
  }

  _handleActiveLikeButton() {
    this._element.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-btn').addEventListener('click', () => {
      this._handleActiveLikeButton();
    });
    this._element.querySelector('.card__delete-btn').addEventListener('click', () => {
      this._handleDeleteCard();
    });
    this._cardImageElement.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    });
  }
}