import throttle from "lodash.throttle";

const emailEl = document.querySelector('.feedback-form [type = email]')
const messageEl = document.querySelector('.feedback-form textarea');
const feedbackFormEl = document.querySelector('.feedback-form');

const FEEDBACK = "feedback-form-state";
const formData = {};

feedbackFormEl.addEventListener('submit', onFormSubmit);
feedbackFormEl.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK);
}

function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK, JSON.stringify(formData));
}

function populateTextarea(e) {
    const savedMessage = JSON.parse(localStorage.getItem(FEEDBACK));

    if (savedMessage.email) {        
        emailEl.value = savedMessage.email;
    } 
    if (savedMessage.message) {
        messageEl.value = savedMessage.message;
    }
}
