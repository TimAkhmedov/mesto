let container = document.querySelector('.page');
let editBtn = container.querySelector('.profile__edit-btn');
let popup = container.querySelector('.popup');
let openedPopup = container.querySelector('.popup_opened');
let popupCloseBtns = container.querySelectorAll('.popup__close-btn');
let popupAddCard = container.querySelector('.popup-card');
/*let submitBtn = popup.querySelector('.popup__submit-btn');*/

let nameInput = container.querySelector('.popup__name-field');
let jobInput = container.querySelector('.popup__job-field');
let profileName = container.querySelector('.profile__name');
let profileJob = container.querySelector('.profile__job');
let popupProfileEdit = popup.querySelector('.popup__profile-edit');
let likeBtn = container.querySelector('.card__like-btn');
let likeBtns = container.querySelectorAll('.card__like-btn');
let addCardBtn = container.querySelector('.profile__add-btn');

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  let openedPopup = container.querySelector('.popup_opened');
  console.log(openedPopup);
  openedPopup.classList.remove('popup_opened');
}

function addProfilePersonalData(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

function addCard() {
  popupAddCard.classList.add('popup_opened');
}
editBtn.addEventListener('click', openPopup);
popupCloseBtns.forEach(item => item.addEventListener('click', closePopup));
popupProfileEdit.addEventListener('submit', addProfilePersonalData);
/*submitBtn.addEventListener('submit', addProfilePersonalData);*/


likeBtns.forEach(item => item.addEventListener('click', (item) => {
  item.target.classList.toggle('card__like-btn_active');
}));

addCardBtn.addEventListener('click', addCard);
