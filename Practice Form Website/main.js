const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const password = document.getElementById("password");
const formdoc = document.getElementById("formdoc");
const errorElement = document.getElementById("error");

formdoc.addEventListener('submit', (e) => {
    let messages = []
    if(firstName.value === "" || firstName.value == null) {
        messages.push("Name is required")
    }
    
    if(password.value.length <= 6) {
        messages.push("Password must be longer than 6 characters.")
    }

    if(messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(',')
    }
})