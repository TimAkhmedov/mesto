/*export {openImagePopup, imagePopupElement, imagePopup};
import {Card} from './Card.js';*/
const container = document.querySelector('.page');
const buttonProfileEdit = container.querySelector('.profile__edit-btn');
const profilePopup = container.querySelector('.popup_profile');
const cardPopup = container.querySelector('.popup_card');
const imagePopup = container.querySelector('.popup_image');
const imagePopupElement = imagePopup.querySelector('.popup__card-image');
const closeButtonList = container.querySelectorAll('.popup__close-btn');
const cardFormPopup = container.querySelector('.popup__card-add');
const profileNameEditInput = container.querySelector('.popup__profile-name-field');
const profileJobEditInput = container.querySelector('.popup__profile-job-field');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__job');
const profileEditPopup = container.querySelector('.popup__profile-edit');
const buttonCardAdd = container.querySelector('.profile__add-btn');
const cardTitleInput = container.querySelector('.popup__card-title-field');
const cardUrlInput = container.querySelector('.popup__card-url-field');
const cardsContainer = document.querySelector('.cards');
const popupList = Array.from(container.querySelectorAll('.popup'));

function openPopup(popup) {
  popup.classList.add('popup_opened');
  addListeners();
}

const addListeners = () => {
  container.addEventListener('keyup', keyHandler);
}

function openProfilePopup() {
  profileNameEditInput.value = profileName.textContent;
  profileJobEditInput.value = profileJob.textContent;
  openPopup(profilePopup);
}

function openCreateCardPopup() {
  openPopup(cardPopup);
}

function openImagePopup() {
  openPopup(imagePopup);
}

function closePopup() {
  const popupOpened = container.querySelector('.popup_opened');
  popupOpened.classList.remove('popup_opened');
  removeListeners();
}

const removeListeners = () => {
  container.removeEventListener('keyup', keyHandler);
}

function addProfilePersonalData(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameEditInput.value;
  profileJob.textContent = profileJobEditInput.value;
  closePopup();
}

function submitCardForm(evt) {
  evt.preventDefault();
  const element = {name: cardTitleInput.value, link: cardUrlInput.value };
  const submitButton = evt.currentTarget.querySelector('.popup__submit-btn');
  console.log(evt.target);
  createCard(element);
  closePopup();
  deactivateSubmitButton(submitButton);
  cardTitleInput.value = "";
  cardUrlInput.value = "";
}

function renderPopupCard(cardElement) {
  cardsContainer.prepend(cardElement);
}

const keyHandler = (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
}

buttonProfileEdit.addEventListener('click', openProfilePopup);
closeButtonList.forEach(item => item.addEventListener('click', closePopup));
profileEditPopup.addEventListener('submit', addProfilePersonalData);
cardFormPopup.addEventListener('submit', submitCardForm);
buttonCardAdd.addEventListener('click', openCreateCardPopup);
popupList.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup();
    };
  });
})

/*class Card {
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
      imagePopup.querySelector('.popup__card-title').textContent = this._alt;
      openImagePopup(this);
    });
  }
} */

const createCard = (item) => {
  const card = new Card(item, '.template-card');
  const cardElement = card.generateCard();
  renderPopupCard(cardElement);
}

const renderInitialCards = () => {
  cardsInitial.forEach((item) => {
    createCard(item);
  });
};  
renderInitialCards();