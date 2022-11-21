let authorInputField = document.getElementById('author')
let titleInputField = document.getElementById('title')
let submitButton = document.getElementById('submit')
let booksContainer = document.getElementById('booksContainer')

submitButton.addEventListener('click', function () {
    var paragraph = document.createElement('p')
  paragraph.innerText = authorInputField.value
  booksContainer.appendChild(paragraph);
  authorInputField.value = "";
    var paragraph2 = document.createElement('p')
  paragraph2.innerText = titleInputField.value
  booksContainer.appendChild(paragraph2);
  titleInputField.value = "";
})