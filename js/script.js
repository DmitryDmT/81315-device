var link = document.querySelector(".btn-write-us");
var modalContent = document.querySelector(".modal-content");
var modalOverlay = document.querySelector(".modal-overlay");
var close = modalContent.querySelector(".modal-content-close");
var form = modalContent.querySelector(".message-form");
var loginField = modalContent.querySelector("[name=name]");
var emailField = modalContent.querySelector("[name=email]");
var storage = localStorage.getItem("loginField");
var modalMap = document.querySelector(".modal-map");
var mapLink = document.querySelector(".map a");
var mapClose = modalMap.querySelector(".modal-content-close");

link.addEventListener("click", function (evt) {
  
  evt.preventDefault();
  modalContent.classList.add("modal-content-show");
  modalOverlay.classList.add("modal-overlay-show");
  
  if (storage) {
    loginField.value = storage;
    emailField.focus();
  } else {
    loginField.focus();
  }
  
});

close.addEventListener("click", function (evt) {
  
  evt.preventDefault();
  modalContent.classList.remove("modal-content-show");
  modalContent.classList.remove("modal-error");
  modalOverlay.classList.remove("modal-overlay-show");
  
});

modalOverlay.addEventListener("click", function () {
  
  modalContent.classList.remove("modal-content-show");
  modalContent.classList.remove("modal-error");
  modalOverlay.classList.remove("modal-overlay-show");
  modalMap.classList.remove("modal-map-show");
  
});

window.addEventListener("keydown", function (evt) {
  
  if (evt.keyCode === 27 /* ESC */) {
    if (modalContent.classList.contains("modal-content-show")) {
      modalContent.classList.remove("modal-content-show");
      modalContent.classList.remove("modal-error");
    }
    if (modalOverlay.classList.contains("modal-overlay-show")) {
      modalOverlay.classList.remove("modal-overlay-show");
    }
  }
  
});

form.addEventListener("submit", function (evt) {
  
  if (!loginField.value || !emailField.value) {
    evt.preventDefault();
    modalContent.classList.remove("modal-error");
    modalContent.offsetWidth = modalContent.offsetWidth;
    modalContent.classList.add("modal-error");
  } else {
    localStorage.setItem("loginField", loginField.value);
  }
  
});

mapLink.addEventListener("click", function(evt) {
  
  evt.preventDefault();
  modalMap.classList.add("modal-map-show");
  modalOverlay.classList.add("modal-overlay-show");
  
});

mapClose.addEventListener("click", function(evt) {
  
  evt.preventDefault();
  modalMap.classList.remove("modal-map-show");
  modalOverlay.classList.remove("modal-overlay-show");
  
});

window.addEventListener("keydown", function(evt) {
  
  if (evt.keyCode === 27 /* ESC */) {
    if (modalMap.classList.contains("modal-map-show")) {
      modalMap.classList.remove("modal-map-show");
    }
  }
  
});