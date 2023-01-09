const magic8ball = document.getElementById('eight');
const result = document.getElementById('result');

function displayResult() {

let randomAnswer = Math.floor(Math.random() * 9) + 1;

if (randomAnswer == 1) {
    result.innerHTML = "Absolutely";
}

else if (randomAnswer == 2) {
    result.innerHTML = "It is certain";
}

else if (randomAnswer == 3) {
    result.innerHTML = "Yes, definitely";
}

else if (randomAnswer == 4) {
    result.innerHTML = "Most Likely";
}

else if (randomAnswer == 5) {
    result.innerHTML = "Maybe";
}

else if (randomAnswer == 6) {
    result.innerHTML = "Less Likely";
}

else if (randomAnswer == 7) {
    result.innerHTML = "Don't count on it";
}

else if (randomAnswer == 8) {
    result.innerHTML = "Outlook does not look good";
}

else {
    result.innerHTML = "No way";
}
}
