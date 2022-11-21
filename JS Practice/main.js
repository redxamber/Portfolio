//Red text in p element
const container = document.querySelector('#container');

const redp = document.createElement('p');
redp.style.color = "red";
redp.textContent = "Hey I'm red!"

container.appendChild(redp);

//Blue text in h3 element
const blueh3 = document.createElement('h3');
blueh3.style.color = "blue";
blueh3.textContent  = "Hi I'm blue h3!";

container.appendChild(blueh3);

//Div with pink background and black border
const pinkBlackDiv = document.createElement('div');
pinkBlackDiv.setAttribute('style', 'background-Color: pink; border: 1px solid black');

const anotherh3 = document.createElement('h3');
anotherh3.textContent = "I'm in a div!";

const ap = document.createElement('p');
ap.textContent = "ME TOO!";

pinkBlackDiv.appendChild(anotherh3);
pinkBlackDiv.appendChild(ap);

container.appendChild(pinkBlackDiv);

//Button turns yellow
const btn = document.querySelector('#btn');
document.addEventListener('click', function(e) {
    e.target.style.background = 'yellow';
});

//3 buttons
const buttons = document.querySelectorAll('.classButton');

buttons.forEach((button) => {

button.addEventListener('click', () => {
    alert(button.id);
  });
});