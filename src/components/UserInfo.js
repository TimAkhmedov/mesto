export class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      profileNameEditInput: this._nameSelector.textContent,
      profileJobEditInput: this._jobSelector.textContent
    }
    
    return userInfo;
  }

  setUserInfo(name, job, avatar, id) {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = job;
    this._avatarSelector.src = avatar;
    if (id) {
      this.id = id;
    }
  }
}