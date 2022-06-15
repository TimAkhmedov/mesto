import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { 
  buttonProfileEdit,
  profileNameEditInput,
  profileJobEditInput,
  buttonCardAdd,
  formEdit,
  formAdd,
  formAvatar,
  avatar,
  validationObject
} from "../utils/utils.js";
import Api from '../components/Api.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-42',
  password: '59dc190e-ac2d-47e3-971b-b27b0300b3c1'
});

const createCard = (item) => {
  const card = new Card(
    item,
    '.template-card',
    (name, link) => {
      popupWithImage.open(name, link)
    },
    popupWithConfirmation,
    user,
    api,
    like,
    dislike
    )
  return card.generateCard();
}
const like = id => api.setLike(id);
const dislike = id => api.deleteLike(id);

const insertCard = (card) => {
  const newCard = {
    name: card.name,
    link: card.link,
    likes: card.likes,
    id: card._id,
    owner: card.owner._id
  }
  cardList.renderItem(newCard);
}

const cardList = new Section({ 
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, '.cards');

const user = new UserInfo('.profile__name', '.profile__job', '.profile__avatar');

function getInitialData() {
  Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
      user.setUserInfo(userData.name, userData.about, userData.avatar, userData._id);
      cards.reverse().forEach(card => {
        insertCard(card);
      });
    })
    .catch(api.catchError);
}
getInitialData();


const editFormValidator = new FormValidator(validationObject, formEdit);
const addFormValidator = new FormValidator(validationObject, formAdd);
const avatarFormValidator = new FormValidator(validationObject, formAvatar);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();



const popupProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleSubmitForm: (formData) => {
    popupProfile.submitButton.textContent = "Сохранение...";
    api.setUserInfo(formData['profile-name'], formData['profile-job'])
      .then((res) => {
        user.setUserInfo(res.name, res.about, res.avatar);
        popupProfile.close();
      })
      .catch(api.catchError)
      .finally(() => {
        popupProfile.submitButton.textContent = "Сохранить";
      })
  }
});
popupProfile.setEventListeners();

function openProfilePopup() {
  const userInfoObj = user.getUserInfo();
  profileNameEditInput.value = userInfoObj.profileNameEditInput;
  profileJobEditInput.value = userInfoObj.profileJobEditInput;
  user.getUserInfo();
  popupProfile.open();
  editFormValidator.resetError();
  editFormValidator.deactivateSubmitButton();
}

buttonProfileEdit.addEventListener('click', openProfilePopup);

const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleSubmitForm: (formData) => {
    popupAvatar.submitButton.textContent = "Сохранение...";
    api.editAvatar(formData['profile-avatar'])
      .then((res) => {
        user.setUserInfo(res.name, res.about, res.avatar);
        popupAvatar.close();
      })
      .catch(api.catchError)
      .finally(() => {
        popupAvatar.submitButton.textContent = "Сохранить";
      })
  }
})
popupAvatar.setEventListeners();

function openAvatarPopup() {
  avatarFormValidator.resetError();
  avatarFormValidator.deactivateSubmitButton();
  popupAvatar.open();
}
avatar.addEventListener('click', openAvatarPopup);

const popupCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handleSubmitForm: (formData) => {
    popupCard.submitButton.textContent = "Сохранение...";
    api.addCard(formData['card-title'], formData['card-url'])
      .then((card) => {
        insertCard(card);
        popupCard.close();
      })
      .catch(api.catchError)
      .finally(() => {
        popupCard.submitButton.textContent = "Создать";
      })
  }
});
popupCard.setEventListeners();

function openCreateCardPopup() {
  popupCard.open();
  addFormValidator.resetError();
}

buttonCardAdd.addEventListener('click', openCreateCardPopup);

const popupWithConfirmation = new PopupWithConfirmation({
  popupSelector: '.popup_confirm',
  handleSubmitForm: (card, id) => {
    popupWithConfirmation.submitButton.textContent = "Удаление...";
    api.deleteCard(id)
      .then(() => {
        popupWithConfirmation.handleDeleteCard(card);
        popupWithConfirmation.close();
      })
      .catch(api.catchError)
      .finally(() => {
        popupWithConfirmation.submitButton.textContent = "Да";
      })
  }  
});
popupWithConfirmation.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();