import './index.css';
const buttonProfileEdit = container.querySelector('.profile__edit-btn');
const profilePopup = container.querySelector('.popup_profile');
const cardPopup = container.querySelector('.popup_card');
//const closeButtonList = container.querySelectorAll('.popup__close-btn');
//const cardFormPopup = container.querySelector('.popup__card-add');
const profileNameEditInput = container.querySelector('.popup__profile-name-field');
const profileJobEditInput = container.querySelector('.popup__profile-job-field');
export const profileName = container.querySelector('.profile__name');
export const profileJob = container.querySelector('.profile__job');
//const profileEditPopup = container.querySelector('.popup__profile-edit');
const buttonCardAdd = container.querySelector('.profile__add-btn');
//const cardTitleInput = container.querySelector('.popup__card-title-field');
//const cardUrlInput = container.querySelector('.popup__card-url-field');
//const popupList = Array.from(container.querySelectorAll('.popup'));

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

/*

function openCreateCardPopup() {
  openPopup(cardPopup);
}

function renderPopupCard(cardElement) { 
  cardsContainer.prepend(createCard(cardElement)); 
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
  createCard(element);
  renderPopupCard(element);
  closePopup();
  AddFormValidator.deactivateSubmitButton();
  cardTitleInput.value = "";
  cardUrlInput.value = "";
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
*/


const createCard = (item) => {
  const card = new Card(item, '.template-card', () => {
    popupWithImage.open(item);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: cardsInitial, 
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, '.cards');
cardList.renderItems();

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

const EditFormValidator = new FormValidator(validationObject, formEdit);
const AddFormValidator = new FormValidator(validationObject, formAdd);
EditFormValidator.enableValidation();
AddFormValidator.enableValidation();

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
  //console.log(userInfo.getUserInfo());
  profileNameEditInput.value = userInfo.getUserInfo().profileNameEditInput;
  profileJobEditInput.value = userInfo.getUserInfo().profileJobEditInput;
  userInfo.getUserInfo();
  popupProfile.open();
}

buttonProfileEdit.addEventListener('click', openProfilePopup);

const popupCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handleSubmitForm: (formData) => {
    //console.log(formData);
    cardList.addItem(createCard({name: formData['card-title'], link: formData['card-url']}));
    popupCard.close();
  }
});
popupCard.setEventListeners();

function openCreateCardPopup() {
  popupCard.open();
}

buttonCardAdd.addEventListener('click', openCreateCardPopup);


/*const renderInitialCards = () => {
  cardsInitial.forEach((item) => {
    renderPopupCard(item);
  });
};  
renderInitialCards();*/