import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector(`[name=email]`),
  message: document.querySelector(`[name=message]`),
};

const STOREGE_KEY = 'feedback-form-state';
const feedbackData = {};

const savedData = localStorage.getItem(STOREGE_KEY);
if (savedData) {
  try {
    const item = JSON.parse(savedData);
    console.log(item);
    refs.email.value = item.email;
    refs.message.value = item.message;
  } catch (error) {
    console.log(`Error: `, error);
  }
}

refs.form.addEventListener(`input`, throttle(onFormInput), 500);
refs.form.addEventListener(`submit`, onFormSubmit);

function onFormInput(event) {
  event.preventDefault();
  feedbackData.email = refs.email.value;
  feedbackData.message = refs.message.value;
  localStorage.setItem(STOREGE_KEY, JSON.stringify(feedbackData));
}

function onFormSubmit(event) {
  event.preventDefault;
  console.log(feedbackData);

  localStorage.removeItem(STOREGE_KEY);
  event.target.reset();
}
