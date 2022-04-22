const container = document.querySelector('.page');
const buttonProfileEdit = container.querySelector('.profile__edit-btn');
const profilePopup = container.querySelector('.popup_profile');
const cardPopup = container.querySelector('.popup_card');
const imagePopup = container.querySelector('.popup_image');
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
const cardTemplate = document.querySelector('.template-card').content;
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

function createCard(element) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector('.card__image');
  const imagePopupElement = imagePopup.querySelector('.popup__card-image');
  cardImageElement.alt = element.name;
  cardImageElement.src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__like-btn').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-btn_active');
  });
  cardElement.querySelector('.card__delete-btn').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
  cardElement.querySelector('.card__image').addEventListener('click', (evt) => {
    imagePopupElement.alt = evt.target.alt;
    imagePopupElement.src = evt.target.src;
    imagePopup.querySelector('.popup__card-title').textContent = evt.target.alt;
    openImagePopup(evt);
  });
  return cardElement;
}

function submitCardForm(evt) {
  evt.preventDefault();
  const element = {name: cardTitleInput.value, link: cardUrlInput.value };
  const card = createCard(element);
  const submitButton = evt.currentTarget.querySelector('.popup__submit-btn');
  renderPopupCard(card);
  closePopup();
  deactivateSubmitButton(submitButton);
  cardTitleInput.value = "";
  cardUrlInput.value = "";
}

function renderPopupCard(cardElement) {
  cardsContainer.prepend(cardElement);
}

function renderCards() {
  cardsInitial.forEach(function (element) {
    const card = createCard(element);
    renderPopupCard(card);
  });
}

const keyHandler = (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
}

cardsInitial.forEach(element => createCard(element));
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

renderCards();