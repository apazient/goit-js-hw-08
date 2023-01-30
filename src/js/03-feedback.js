import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(`[name=email]`),
    message:document.querySelector(`[name=message]`)
}


const STOREGE_KEY = "feedback-form-state";
const feedbackData={}

refs.form.addEventListener(`submit`, onFormSubmit)
refs.email.addEventListener(`input`,throttle( onEmailInput,500));
refs.message.addEventListener(`input`,throttle( onTextareaInput,500));

function onEmailInput(event) {

    event.preventDefault();
    feedbackData [event.target.name]= event.target.value; 
    localStorage.setItem(STOREGE_KEY,JSON.stringify( feedbackData))
    
    
}
function onTextareaInput(event) {
    event.preventDefault;
    feedbackData [event.target.name]= event.target.value;
    localStorage.setItem(STOREGE_KEY,JSON.stringify( feedbackData))
    

}
populateTextarea();

function onFormSubmit(event) {
    event.preventDefault;
    console.log(`Email: `, JSON.parse(localStorage.getItem(STOREGE_KEY)).email)
    console.log(`Message:`, JSON.parse(localStorage.getItem(STOREGE_KEY)).message)
    event.target.reset();
  localStorage.removeItem(STOREGE_KEY)
    

}
function populateTextarea() {
    
    const savedMessage = localStorage.getItem(STOREGE_KEY);
   
    if (savedMessage) {
        refs.message.value = JSON.parse( savedMessage).message;
    }
   
}
