import './index.css';
const buttonProfileEdit = container.querySelector('.profile__edit-btn');
const profilePopup = container.querySelector('.popup_profile');
const cardPopup = container.querySelector('.popup_card');
const profileNameEditInput = container.querySelector('.popup__profile-name-field');
const profileJobEditInput = container.querySelector('.popup__profile-job-field');
export const profileName = container.querySelector('.profile__name');
export const profileJob = container.querySelector('.profile__job');
const buttonCardAdd = container.querySelector('.profile__add-btn');

//FormValidator
const formEdit = profilePopup.querySelector('.popup__form');
const formAdd = cardPopup.querySelector('.popup__form');
const validationObject = ({
  formSelector: '.popup__form', 
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-btn',
  invalidButtonClass: 'popup__submit-btn_invalid',
  invalidBorderClass: 'popup__field_invalid'
});

import { Card } from "./script/Card.js";
import { FormValidator } from "./script/FormValidator.js";
import { cardsInitial, container } from "./script/utils.js";
import { PopupWithImage } from "./script/PopupWithImage.js";
import { PopupWithForm } from "./script/PopupWithForm.js";
import { UserInfo } from "./script/UserInfo.js";
import Section from "./script/Section.js";

const createCard = (item) => {
  const card = new Card(item, '.template-card', () => {
    popupWithImage.open(item);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({ 
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, '.cards');
cardList.renderItems(cardsInitial);

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

const editFormValidator = new FormValidator(validationObject, formEdit);
const addFormValidator = new FormValidator(validationObject, formAdd);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const userInfo = new UserInfo('.profile__name', '.profile__job');

const popupProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleSubmitForm: (formData) => {
    userInfo.setUserInfo(formData['profile-name'], formData['profile-job']);
    popupProfile.close();
  }
});
popupProfile.setEventListeners();

function openProfilePopup() {
  profileNameEditInput.value = userInfo.getUserInfo().profileNameEditInput;
  profileJobEditInput.value = userInfo.getUserInfo().profileJobEditInput;
  userInfo.getUserInfo();
  popupProfile.open();
}

buttonProfileEdit.addEventListener('click', openProfilePopup);

const popupCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handleSubmitForm: (formData) => {
    cardList.addItem(createCard({name: formData['card-title'], link: formData['card-url']}));
    popupCard.close();
  }
});
popupCard.setEventListeners();

function openCreateCardPopup() {
  popupCard.open();
}

buttonCardAdd.addEventListener('click', openCreateCardPopup);