import throttle from 'lodash.throttle';
const storageKey = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form  textarea');
const inputEl = document.querySelector('input');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();
let formData = {};

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(storageKey);
}

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  const saveData = JSON.stringify(formData);
  localStorage.setItem(storageKey, saveData);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(storageKey);

  if (savedMessage) {
    const parsedS = JSON.parse(savedMessage);
    let formData = {};
    formData = parsedS;
    textareaEl.value = parsedS.message;
    inputEl.value = parsedS.email;
    console.log(parsedS);
  }
}
