export class Card {
  constructor(data, templateSelector, handleCardClick, popupConfirm, user, api ) {
    this._title = data.name;
    this._link = data.link;
    this._id = data.id;
    this._user = user;
    this._owner = data.owner;
    this._templateSelector = templateSelector;
    this._popupConfirm = popupConfirm;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes.length;
    this._user = user;
    this._isLiked = false;
    this._api = api;
    data.likes.forEach(like => {
      if (like._id == this._user.id) {
        this._isLiked = true;
      }
    });
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
    this._element.querySelector('.card__likes-amount').textContent = this._likes;
    this._likeButton = this._element.querySelector('.card__like-btn');
    if (this._isLiked) {
      this._likeButton.classList.add('card__like-btn_active');
    }
    if (this._owner == this._user.id) {
      this._element.querySelector('.card__delete-btn').classList.add('card__delete-btn_active');
    }

    return this._element;
  }

  _handleLikeButton() {
    if (this._element.querySelector('.card__like-btn').classList.contains('card__like-btn_active')) {
      this._api.deleteLike(this._id)
        .then((res) => {
          this._element.querySelector('.card__likes-amount').textContent = res.likes.length;
          this._element.querySelector('.card__like-btn').classList.remove('card__like-btn_active');
        })
        .catch(this._api.catchError);
    } else {
      this._api.setLike(this._id)
        .then((res) => {
          this._element.querySelector('.card__likes-amount').textContent = res.likes.length;
          this._element.querySelector('.card__like-btn').classList.add('card__like-btn_active');
        })
        .catch(this._api.catchError);
    }
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-btn').addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._element.querySelector('.card__delete-btn').addEventListener('click', () => {
      this._popupConfirm.open(this._element, this._id);
    });
    this._cardImageElement.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    });
  }

  _checkCardOwner() {
    if (this._user !== this._ownerId) {
      this._element.querySelector('.card__delete-btn').remove();
    }
  } 
}