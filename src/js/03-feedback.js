import throttle from 'lodash.throttle';
const storageKey = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();
const formData = {
  email: '',
  message: '',
};

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
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
  const parsedS = JSON.parse(savedMessage);
  if (parsedS) {
    returnInput(parsedS);
  }
}

function returnInput(data) {
  formData.email = data.email;
  formData.message = data.message;
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}
