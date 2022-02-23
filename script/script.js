let page = document.querySelector('.page');
let editBtn = page.querySelector('.profile__edit-btn');
let popup = page.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__close-btn');

function openPopup() {
  popup.setAttribute('style', 'display: flex');
}

editBtn.addEventListener('click', openPopup);

function closePopup() {
  popup.setAttribute('style', 'display: none');
}

popupCloseBtn.addEventListener('click', closePopup);




/*let formEditBtn = document.querySelector('.profile__edit-btn');
let page = document.querySelector('.page');

let nameInput = page.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job');

function formSubmitHandler(evt) {
  evt.preventDeafault();

  console.log(nameInput.value);
}
console.log(page);
console.log(nameInput(value));
console.log(jobInput);*/