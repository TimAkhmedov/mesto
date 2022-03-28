const container = document.querySelector('.page');
const btnProfileEdit = container.querySelector('.profile__edit-btn');
const profilePopup = container.querySelector('.popup_profile');
const cardPopup = container.querySelector('.popup_card');
const imagePopup = container.querySelector('.popup_image');
const btnsClosePopup = container.querySelectorAll('.popup__close-btn');
const cardFormPopup = container.querySelector('.popup__card-add');
const profileNameEditInput = container.querySelector('.popup__name-field');
const profileJobEditInput = container.querySelector('.popup__job-field');
const profileName = container.querySelector('.profile__name');
const profileJob = container.querySelector('.profile__job');
const profileEditPopup = container.querySelector('.popup__profile-edit');
const btnCardAdd = container.querySelector('.profile__add-btn');
const cardTitleInput = container.querySelector('.popup__card-title-field');
const cardUrlInput = container.querySelector('.popup__card-url-field');
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('.template-card').content;
const cardsInitial = [{
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

function openPopup(element) {
  if (element.target.classList.contains('profile__edit-btn')) {
      profileNameEditInput.value = profileName.textContent;
      profileJobEditInput.value = profileJob.textContent;
      return profilePopup.classList.add('popup_opened');
  } else if (element.target.classList.contains('profile__add-btn')) {
      return cardPopup.classList.add('popup_opened');
  } else if (element.target.classList.contains('card__image')) {
      return imagePopup.classList.add('popup_opened');
  }
}

function closePopup() { /*т.к. в данном проекте всего может быть только один открытый попап(popup_opened), вешается слушатель на кнопку закрытия поапа */
  const popupOpened = container.querySelector('.popup_opened'); /*при вызове функции closePopup происходит принудительный поиск единственного открытого попапа с классом (popup_opened) по всему DOM*/
  popupOpened.classList.remove('popup_opened'); /*и удаление этого класса*/
}

function addProfilePersonalData(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameEditInput.value;
  profileJob.textContent = profileJobEditInput.value;
  closePopup();
}

function createCard (element) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElem = cardElement.querySelector('.card__image');
  const imagePopupElem = imagePopup.querySelector('.popup__card-image');
  if (cardUrlInput.value && cardTitleInput.value !== undefined) {/*создание новой карточки из формы попапа */
    element.preventDefault();
    cardImageElem.src = cardUrlInput.value;
    cardImageElem.alt = cardTitleInput.value;
    cardElement.querySelector('.card__title').textContent = cardTitleInput.value;
    cardElement.querySelector('.card__like-btn').addEventListener('click', (item) => {
      item.target.classList.toggle('card__like-btn_active');
    });
    cardElement.querySelector('.card__delete-btn').addEventListener('click', (item) => {
      item.target.closest('.card').remove();
    });
    cardElement.querySelector('.card__image').addEventListener('click', (item) => {
      imagePopupElem.alt = item.target.alt;
      imagePopupElem.src = item.target.src;
      imagePopup.querySelector('.popup__card-title').textContent = item.target.alt;
      openPopup(item);
    });
    closePopup();
    cardTitleInput.value = "";
    cardUrlInput.value = "";
  } else { /*добавление карточек из массива */
    cardImageElem.alt = element.name;
    cardImageElem.src = element.link;
    cardElement.querySelector('.card__title').textContent = element.name;
    cardElement.querySelector('.card__like-btn').addEventListener('click', (item) => {
      item.target.classList.toggle('card__like-btn_active');
    });
    cardElement.querySelector('.card__delete-btn').addEventListener('click', (item) => {
      item.target.closest('.card').remove();
    });
    cardElement.querySelector('.card__image').addEventListener('click', (item) => {
      imagePopupElem.alt = item.target.alt;
      imagePopupElem.src = item.target.src;
      imagePopup.querySelector('.popup__card-title').textContent = item.target.alt;
      openPopup(item);
    });
  }
  renderPopupCard(cardElement);
}

function renderPopupCard(cardElement) {
  cardsContainer.prepend(cardElement);
}

cardsInitial.forEach(element => createCard(element));
btnProfileEdit.addEventListener('click', openPopup);
btnsClosePopup.forEach(item => item.addEventListener('click', closePopup));
profileEditPopup.addEventListener('submit', addProfilePersonalData);
cardFormPopup.addEventListener('submit', createCard);
btnCardAdd.addEventListener('click', openPopup);