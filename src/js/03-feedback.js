import throttle from 'lodash.throttle';
const storageKey = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const inputEl = document.querySelector('input');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();
let formData = {};

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
}

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  const savedText = JSON.stringify(formData);
  localStorage.setItem(storageKey, savedText);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(storageKey);
  if (savedMessage) {
    const parsedS = JSON.parse(savedMessage);
    let formData = {};
    formData = parsedS;
    textareaEl.value = parsedS.message;
    inputEl.value = parsedS.email;
  }
}
