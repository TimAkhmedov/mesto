export default class Api {
  constructor(data) {
    this._url = data.url;
    this._password = data.password;
  }

  _checkResponse(res) {
    return res.ok 
    ? res.json() 
    : Promise.reject(`Ошибка: ${res.status}`);
  }

  catchError(err) {
    console.log(err);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: {
        authorization: this._password
      }
    })
      .then((res) => this._checkResponse(res));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._password
      }
    })
      .then((res) => this._checkResponse(res));
  }

  setUserInfo(name, job) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._password,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: job
      })
    })
    .then((res) => this._checkResponse(res));
  }

  editAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._password,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then((res) => this._checkResponse(res));
  }

  addCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: { 
        authorization: this._password,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then((res) => this._checkResponse(res));
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: { 
        authorization: this._password
      }
    })
    .then(this._checkResponse);
  }

  setLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._password
      }
    })
    .then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._password
      }
    })
    .then((res) => this._checkResponse(res));
  }
}