(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.name,this._link=e.link,this._id=e.id,this._user=i,this._owner=e.owner,this._templateSelector=n,this._popupConfirm=o,this._handleCardClick=r,this._likes=e.likes.length,this._user=i,this._isLiked=!1,this._api=a,e.likes.forEach((function(e){e._id==c._user.id&&(c._isLiked=!0)}))}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImageElement=this._element.querySelector(".card__image"),this._setEventListeners(),this._cardImageElement.alt=this._title,this._cardImageElement.src=this._link,this._element.querySelector(".card__title").textContent=this._title,this._element.querySelector(".card__likes-amount").textContent=this._likes,this._likeButton=this._element.querySelector(".card__like-btn"),this._isLiked&&this._likeButton.classList.add("card__like-btn_active"),this._owner==this._user.id&&this._element.querySelector(".card__delete-btn").classList.add("card__delete-btn_active"),this._element}},{key:"_handleLikeButton",value:function(){var e=this;this._element.querySelector(".card__like-btn").classList.contains("card__like-btn_active")?this._api.deleteLike(this._id).then((function(t){e._element.querySelector(".card__likes-amount").textContent=t.likes.length,e._element.querySelector(".card__like-btn").classList.remove("card__like-btn_active")})).catch(this._api.catchError):this._api.setLike(this._id).then((function(t){e._element.querySelector(".card__likes-amount").textContent=t.likes.length,e._element.querySelector(".card__like-btn").classList.add("card__like-btn_active")})).catch(this._api.catchError)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__like-btn").addEventListener("click",(function(){e._handleLikeButton()})),this._element.querySelector(".card__delete-btn").addEventListener("click",(function(){e._popupConfirm.open(e._element,e._id)})),this._cardImageElement.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}},{key:"_checkCardOwner",value:function(){this._user!==this._ownerId&&this._element.querySelector(".card__delete-btn").remove()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._objConfig=t,this._formSelector=n,this._inputList=Array.from(this._formSelector.querySelectorAll(this._objConfig.inputSelector)),this._buttonElement=this._formSelector.querySelector(this._objConfig.submitButtonSelector),this._invalidButtonClass=t.invalidButtonClass,this._invalidBorderClass=t.invalidBorderClass}var t,r;return t=e,(r=[{key:"_hideInputError",value:function(e){this._formSelector.querySelector("#".concat(e.id,"-error")).textContent=""}},{key:"_showInputError",value:function(e,t){this._formSelector.querySelector("#".concat(e.id,"-error")).textContent=t}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setBorderState",value:function(e){e.validity.valid?e.classList.remove(this._invalidBorderClass):e.classList.add(this._invalidBorderClass)}},{key:"_activateSubmitButton",value:function(){this._buttonElement.classList.remove(this._invalidButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"deactivateSubmitButton",value:function(){this._buttonElement.classList.add(this._invalidButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setButtonState",value:function(){this._hasInvalidInput()?this.deactivateSubmitButton():this._activateSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._formSelector.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._setButtonState(),e._setBorderState(t),e._checkValidity(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),e._setButtonState(),t.classList.remove(e._invalidBorderClass)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup__close-btn")||t.target===t.currentTarget)&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupSelector.querySelector(".popup__card-image"),t._title=t._popupSelector.querySelector(".popup__card-title"),t}return t=a,(n=[{key:"open",value:function(e,t){u(p(a.prototype),"open",this).call(this),this._image.src=t,this._title.textContent=e,this._image.alt=e}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function m(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),w(S(t=i.call(this,n)),"_getInputValues",(function(){var e={};return t._inputList.forEach((function(t){e[t.name]=t.value})),e})),w(S(t),"_submitForm",(function(e){e.preventDefault(),t._handleSubmitForm(t._getInputValues())})),t._handleSubmitForm=r,t.submitButton=t._popupSelector.querySelector(".popup__submit-btn"),t._form=t._popupSelector.querySelector(".popup__form"),t._inputList=Array.from(t._popupSelector.querySelectorAll(".popup__field")),t}return t=a,(n=[{key:"setEventListeners",value:function(){y(k(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitForm)}},{key:"close",value:function(){y(k(a.prototype),"close",this).call(this),this._resetForm()}},{key:"_resetForm",value:function(){this._form.reset()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(t),this._jobSelector=document.querySelector(n),this._avatarSelector=document.querySelector(r)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{profileNameEditInput:this._nameSelector.textContent,profileJobEditInput:this._jobSelector.textContent}}},{key:"setUserInfo",value:function(e,t,n,r){this._nameSelector.textContent=e,this._jobSelector.textContent=t,this._avatarSelector.src=n,r&&(this.id=r)}}],n&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){this._renderer(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=document.querySelector(".page"),P=L.querySelector(".profile__edit-btn"),B=L.querySelector(".popup_profile"),I=L.querySelector(".popup_card"),q=L.querySelector(".popup__profile-name-field"),R=L.querySelector(".popup__profile-job-field"),T=L.querySelector(".profile__add-btn"),x=B.querySelector(".popup__form"),A=I.querySelector(".popup__form"),F=L.querySelector(".popup_avatar").querySelector(".popup__form"),U=L.querySelector(".profile__avatar"),D={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__submit-btn",invalidButtonClass:"popup__submit-btn_invalid",invalidBorderClass:"popup__field_invalid"};function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._password=t.password}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"catchError",value:function(e){console.log(e)}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._password}}).then((function(t){return e._checkResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._password}}).then((function(t){return e._checkResponse(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._password,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._password,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponse(e)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._password,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkResponse(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._password}}).then(this._checkResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._password}}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._password}}).then((function(e){return t._checkResponse(e)}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},G.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function $(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return K(e)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return $(this,e)});function a(e){var t,n,r,o,c=e.popupSelector,u=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(e){e.preventDefault(),t._handleSubmitForm(t._card,t._cardId)},(r="_submitForm")in(n=K(t=i.call(this,{popupSelector:c,handleSubmitForm:u})))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t}return t=a,(n=[{key:"open",value:function(e,t){G(Q(a.prototype),"open",this).call(this),this._card=e,this._cardId=t}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new V({url:"https://mesto.nomoreparties.co/v1/cohort-42",password:"59dc190e-ac2d-47e3-971b-b27b0300b3c1"}),Z=function(e){return new t(e,".template-card",(function(e,t){le.open(e,t)}),ue,te,Y).generateCard()},ee=new C({renderer:function(e){ee.addItem(Z(e))}},".cards"),te=new O(".profile__name",".profile__job",".profile__avatar");Promise.all([Y.getUserInfo(),Y.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.setUserInfo(o.name,o.about,o.avatar,o._id),i.reverse().forEach((function(e){!function(e){var t={name:e.name,link:e.link,likes:e.likes,id:e._id,owner:e.owner._id};ee.renderItems(t)}(e)}))})).catch(Y.catchError);var ne=new r(D,x),re=new r(D,A),oe=new r(D,F);ne.enableValidation(),re.enableValidation(),oe.enableValidation();var ie=new g({popupSelector:".popup_profile",handleSubmitForm:function(e){ie.submitButton.textContent="Сохранение...",Y.setUserInfo(e["profile-name"],e["profile-job"]).then((function(e){te.setUserInfo(e.name,e.about,e.avatar),ie.close()})).catch(Y.catchError).finally((function(){ie.submitButton.textContent="Сохранить"}))}});ie.setEventListeners(),P.addEventListener("click",(function(){q.value=te.getUserInfo().profileNameEditInput,R.value=te.getUserInfo().profileJobEditInput,te.getUserInfo(),ie.open(),ne.resetError(),ne.deactivateSubmitButton()}));var ae=new g({popupSelector:".popup_avatar",handleSubmitForm:function(e){ae.submitButton.textContent="Сохранение...",Y.editAvatar(e["profile-avatar"]).then((function(e){te.setUserInfo(e.name,e.about,e.avatar),ae.close()})).catch(Y.catchError).finally((function(){ae.submitButton.textContent="Сохранить"}))}});ae.setEventListeners(),U.addEventListener("click",(function(){oe.resetError(),oe.deactivateSubmitButton(),ae.open()}));var ce=new g({popupSelector:".popup_card",handleSubmitForm:function(e){ce.submitButton.textContent="Сохранение...",Y.addCard(e["card-title"],e["card-url"]).then((function(e){Z(e),ce.close()})).catch(Y.catchError).finally((function(){ce.submitButton.textContent="Создать"}))}});ce.setEventListeners(),T.addEventListener("click",(function(){ce.open(),re.resetError()}));var ue=new W({popupSelector:".popup_confirm",handleSubmitForm:function(e,t){ue.submitButton.textContent="Удаление...",Y.deleteCard(t).then((function(){e.remove(),ue.close()})).catch(Y.catchError).finally((function(){ue.submitButton.textContent="Да"}))}});ue.setEventListeners();var le=new h(".popup_image");le.setEventListeners()})();