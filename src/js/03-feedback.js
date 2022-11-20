let throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

const inputText=()=> {
    const messageForm = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    const messageFormJson = JSON.stringify(messageForm);
    localStorage.setItem('feedback-form-state', messageFormJson);
    console.log(localStorage.getItem('feedback-form-state'));

};
form.addEventListener('input', throttle(inputText, 500));

const getInputValueStorage = () => {
    try {
        const messageFormParse = JSON.parse(localStorage.getItem('feedback-form-state'));
        form.elements.email.value = messageFormParse.email;
        form.elements.message.value = messageFormParse.message;
        
    } catch (error) {}
};
getInputValueStorage();

const clickSubmit = (event) => {
    event.preventDefault(); 
    if (form.elements.email.value === '' || form.elements.message.value === '') {
        alert(`Заполните поля Email и Message!`);
    } else {
        const messageFormSubmit= {
            email: form.elements.email.value,
            message: form.elements.message.value,
        };
        console.log(messageFormSubmit);
        form.elements.email.value = '';
        form.elements.message.value = '';
        localStorage.clear();
    }
};
form.addEventListener('submit', clickSubmit);