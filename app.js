"use strict";

const input = document.querySelector(".newsletter__input");
const inputBtn = document.querySelector(".newsletter__btn");
const errorMsg = document.querySelector(".error-msg");
const successMsg = document.querySelector(".success-msg");

const emailTemplate = /\w+@\w+\.\w+/g;

inputBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    changeUI(errorMsg);
  } else validateInput(input.value);
});

const validateInput = function (email) {
  if (email.match(emailTemplate) !== null) {
    changeUI(successMsg);
  } else changeUI(errorMsg);
};

const changeUI = function (element) {
  input.value = "";
  element.classList.remove("hidden");
  setTimeout(() => {
    element.classList.add("hidden");
  }, 3000);
};
