import throttle from "lodash.throttle";

const feedbackFormEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

populateTextarea();

feedbackFormEl.addEventListener('submit', onFormSubmit);
feedbackFormEl.addEventListener('input', throttle(onTextareaInput, 1000));

function onFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset();
}

function onTextareaInput(e) {
    let savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
    savedMessage = savedMessage ? JSON.parse(savedMessage) : {};
    savedMessage[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedMessage));
}

function populateTextarea() {
    let savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage);
        Object.entries(savedMessage).forEach(([name, value]) => {
            feedbackFormEl.elements[name].value = value;
        });
    }
}