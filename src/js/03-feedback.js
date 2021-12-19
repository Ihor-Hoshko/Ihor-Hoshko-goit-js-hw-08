import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
let formData = {
  email: '',
  message: '',
};
const storageKey = 'feedback-form-state';

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
}

function populateTextarea() {
  const savedData = localStorage.getItem(storageKey);
  const savedDataJson = JSON.parse(savedData);
  if (savedDataJson) {
    returnDataInput(savedDataJson);
  }
}

function returnDataInput(data) {
  formData.email = data.email;
  formData.message = data.message;
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}
