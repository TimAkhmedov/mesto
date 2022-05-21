const buttonProfileEdit = container.querySelector('.profile__edit-btn');
const profilePopup = container.querySelector('.popup_profile');
const cardPopup = container.querySelector('.popup_card');
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
const popupList = Array.from(container.querySelectorAll('.popup'));

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

import {Card} from "../script/Card.js";
import {FormValidator} from "../script/FormValidator.js";
import {cardsInitial, container} from "../script/utils.js";

const EditFormValidator = new FormValidator(validationObject, formEdit);
const AddFormValidator = new FormValidator(validationObject, formAdd);
EditFormValidator.enableValidation();
AddFormValidator.enableValidation();

export function openPopup(popup) {
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
  createCard(element);
  closePopup();
  AddFormValidator.deactivateSubmitButton();
  cardTitleInput.value = "";
  cardUrlInput.value = "";
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


const createCard = (item) => {
  const card = new Card(item, '.template-card');
  const cardElement = card.generateCard();
  return cardElement;
}

const renderInitialCards = () => {
  cardsInitial.forEach((item) => {
    createCard(item);
  });
};  
renderInitialCards();