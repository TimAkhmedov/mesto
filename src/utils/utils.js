export const container = document.querySelector('.page');
export const buttonProfileEdit = container.querySelector('.profile__edit-btn');
export const profilePopup = container.querySelector('.popup_profile');
export const cardPopup = container.querySelector('.popup_card');
export const profileNameEditInput = container.querySelector('.popup__profile-name-field');
export const profileJobEditInput = container.querySelector('.popup__profile-job-field');
export const buttonCardAdd = container.querySelector('.profile__add-btn');
export const formEdit = profilePopup.querySelector('.popup__form');
export const formAdd = cardPopup.querySelector('.popup__form');
export const validationObject = ({
  formSelector: '.popup__form', 
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-btn',
  invalidButtonClass: 'popup__submit-btn_invalid',
  invalidBorderClass: 'popup__field_invalid'
});
export const cardsInitial = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
