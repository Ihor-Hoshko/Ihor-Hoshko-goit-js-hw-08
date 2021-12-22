import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

populateTextarea();

function onInput(e) {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(data));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(storageKey));
}

function populateTextarea() {
  const savedData = localStorage.getItem(storageKey);
  const savedDataJson = JSON.parse(savedData);
  if (savedDataJson) {
    form.elements.email.value = savedDataJson.email;
    form.elements.message.value = savedDataJson.message;
  }
}
