let container = document.querySelector('.page');
let editBtn = container.querySelector('.profile__edit-btn');
let popupOpenBtn = container.querySelector('.popup');
let popupCloseBtn = popupOpenBtn.querySelector('.popup__close-btn');
let submitBtn = popupOpenBtn.querySelector('.form__submit-btn');
let nameInput = container.querySelector('.form__name-field');
let jobInput = container.querySelector('.form__job-field');
let likeBtn = container.querySelector('.card__like-btn');

function openPopup() {
  let profileName = container.querySelector('.profile__name').textContent;
  let profileJob = container.querySelector('.profile__job').textContent;
  popupOpenBtn.classList.add('popup_opened');
  nameInput.value = profileName;
  jobInput.value = profileJob;
}
editBtn.addEventListener('click', openPopup);

function closePopup() {
  popupOpenBtn.classList.remove('popup_opened');
}
popupCloseBtn.addEventListener('click', closePopup);

function addProfilePersonalData(evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  container.querySelector('.profile__name').textContent = nameValue;
  container.querySelector('.profile__job').textContent = jobValue;
  closePopup();
}
submitBtn.addEventListener('click', addProfilePersonalData);

function likeAction() {
  likeBtn.classList.toggle('card__like-btn_active');
}
likeBtn.addEventListener('click', likeAction);