//<form action="#" method="POST"> (use if you are sending a form somewhere other than displaying on DOM)
//The "name" attribute is to help the back end identify the purpose of the input
//"email", "tel"(phone/card #), "date", "number", "text", and "password": some types of "input type" values
//There is also an option for <input type="search"> or <input type="url">
//Radio buttons have to have the same name attribute in order for them to be grouped together
//Write type="button" on normal buttons so that they don't accidentally submit the form
//<fieldset> groups content in a form together - surrounding them in a box
//Lists are recommended for structuring multiple checkboxes or radio buttons
//If you want something sent to server but to be unseen by user: type="hidden"+ name & value attributes
//If you want to click an image, make <input type="image">
//File picker widget: <input type="file"> - write multiple at the end if you want multiple
//If using file picker, you can write accept="value" with options being type (image, video, etc)
//Can add: readonly, disabled, maxlength, placeholder, size, spellcheck
//Can use a "pattern" attribute if you want something typed a certain way
//Type="range" creates a slider
//https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes possible pseudo-classes
//Finish fake form website


const firstName = document.querySelector("#firstName");
const greetButton = document.querySelector(".greet-btn");
const greetOutput = document.querySelector(".greeting");

greetButton.addEventListener('click', (event) => {
    greetOutput.innerText = `Hello ${firstName.value}`;
})
