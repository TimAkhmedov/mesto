export class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userInfo = {
      profileNameEditInput: this._nameSelector.textContent,
      profileJobEditInput: this._jobSelector.textContent
    }
    
    return userInfo;
  }

  setUserInfo(name, job) {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = job;
  }
}