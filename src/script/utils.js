export const container = document.querySelector('.page');
export const imagePopup = container.querySelector('.popup_image');
export const imagePopupElement = imagePopup.querySelector('.popup__card-image');
//export const cardsContainer = document.querySelector('.cards');

/*export function openImagePopup() {
  openPopup(imagePopup);
};
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  addListeners();
}
const addListeners = () => {
  container.addEventListener('keyup', keyHandler);
}
const keyHandler = (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
}
export function closePopup() {
  const popupOpened = container.querySelector('.popup_opened');
  popupOpened.classList.remove('popup_opened');
  removeListeners();
}

export const removeListeners = () => {
  container.removeEventListener('keyup', keyHandler);
}*/
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
