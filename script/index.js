let container = document.querySelector('.page');
let editBtn = container.querySelector('.profile__edit-btn');
let popup = container.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__close-btn');
/*let submitBtn = popup.querySelector('.popup__submit-btn');*/

let nameInput = container.querySelector('.popup__name-field');
let jobInput = container.querySelector('.popup__job-field');
let profileName = container.querySelector('.profile__name');
let profileJob = container.querySelector('.profile__job');
let popupProfileEdit = popup.querySelector('.popup__profile-edit');
/*let likeBtn = container.querySelector('.card__like-btn');*/

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function addProfilePersonalData(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
editBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupProfileEdit.addEventListener('submit', addProfilePersonalData);
/*submitBtn.addEventListener('submit', addProfilePersonalData);*/

/* Функция добавления лайка карточке
function likeAction() {
  likeBtn.classList.toggle('card__like-btn_active');
}

likeBtn.addEventListener('click', likeAction);*/


