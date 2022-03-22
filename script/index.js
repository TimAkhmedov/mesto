let container = document.querySelector('.page');
let editBtn = container.querySelector('.profile__edit-btn');
let popup = container.querySelector('.popup');
let openedPopup = container.querySelector('.popup_opened');
let popupCloseBtns = container.querySelectorAll('.popup__close-btn');
let popupAddCard = container.querySelector('.popup-card');
let popupAddCardForm = container.querySelector('.popup__card-add');
let popupImage = container.querySelector('.popup_image');
let nameInput = container.querySelector('.popup__name-field');
let jobInput = container.querySelector('.popup__job-field');
let profileName = container.querySelector('.profile__name');
let profileJob = container.querySelector('.profile__job');
let popupProfileEdit = popup.querySelector('.popup__profile-edit');
let addCardBtn = container.querySelector('.profile__add-btn');
let cardTitleInput = container.querySelector('.popup__card-title-field');
let cardUrlInput = container.querySelector('.popup__card-url-field');
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.template-card').content;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);
  const imgElem = document.querySelector('.popup_image');
  cardElement.querySelector('.card__image').alt = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__like-btn').addEventListener('click', (item) => {
    item.target.classList.toggle('card__like-btn_active');
  });
  cardElement.querySelector('.card__delete-btn').addEventListener('click', (item) => {
    item.target.closest('.card').remove();
  });
  cardElement.querySelector('.card__image').addEventListener('click', (item) => {
    imgElem.querySelector('.popup__card-image').alt = item.target.alt;
    imgElem.querySelector('.popup__card-image').src = item.target.src;
    imgElem.querySelector('.popup__card-title').textContent = item.target.alt;
    popupImage.classList.add('popup_opened');
  });
  
  cardsList.append(cardElement);
});

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  let openedPopup = container.querySelector('.popup_opened');
  openedPopup.classList.remove('popup_opened');
}

function addProfilePersonalData(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

function openPopupCard() {
  popupAddCard.classList.add('popup_opened');
}

function addNewCard (evt) {
  evt.preventDefault();
  const imgElem = document.querySelector('.popup_image');
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__image').src = cardUrlInput.value;
  cardElement.querySelector('.card__image').alt = cardTitleInput.value;
  cardElement.querySelector('.card__title').textContent = cardTitleInput.value;
  cardElement.querySelector('.card__like-btn').addEventListener('click', (item) => {
    item.target.classList.toggle('card__like-btn_active');
  });
  cardElement.querySelector('.card__delete-btn').addEventListener('click', (item) => {
    item.target.closest('.card').remove();
  });
  cardElement.querySelector('.card__image').addEventListener('click', (item) => {
    imgElem.querySelector('.popup__card-image').alt = item.target.alt;
    imgElem.querySelector('.popup__card-image').src = item.target.src;
    imgElem.querySelector('.popup__card-title').textContent = item.target.alt;
    popupImage.classList.add('popup_opened');
  });
  cardsList.prepend(cardElement);
  closePopup();
}

editBtn.addEventListener('click', openPopup);
popupCloseBtns.forEach(item => item.addEventListener('click', closePopup));
popupProfileEdit.addEventListener('submit', addProfilePersonalData);
popupAddCardForm.addEventListener('submit', addNewCard);
addCardBtn.addEventListener('click', openPopupCard);
