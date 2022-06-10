import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { 
  cardsInitial,
  buttonProfileEdit,
  profileNameEditInput,
  profileJobEditInput,
  buttonCardAdd,
  formEdit,
  formAdd,
  validationObject
} from "../utils/utils.js";



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
  editFormValidator.resetError();
  editFormValidator.deactivateSubmitButton();
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
  addFormValidator.resetError();
}

buttonCardAdd.addEventListener('click', openCreateCardPopup);