const submit = document.getElementById('submit');
const protein = document.getElementById('protein');
const humerus = document.getElementById('humerus');
const bladder = document.getElementById('bladder');
const oxygen = document.getElementById('oxygen');
const swallow = document.getElementById('swallow');
const vitaminD = document.getElementById('vitaminD');
const months9 = document.getElementById('months9');
const fightGerms = document.getElementById('fightGerms');
const brain1 = document.getElementById('brain1');
const sugar = document.getElementById('sugar');
let score = 0;


submit.addEventListener('click', function () {
    if(protein.checked) {
        score += 1;
    }
    if(humerus.checked) {
        score += 1;
    }
    if(bladder.checked) {
        score += 1;
    }
    if(oxygen.checked) {
        score += 1;
    }
    if(swallow.checked) {
        score += 1;
    }
    if(vitaminD.checked) {
        score += 1;
    }
    if(months9.checked) {
        score += 1;
    }
    if(fightGerms.checked) {
        score += 1;
    }
    if(brain1.checked) {
        score += 1;
    }
    if(sugar.checked) {
        score += 1;
    }
    store();
})

function store() {
    sessionStorage.setItem("score", JSON.stringify(score));
    location.href = "result.html";
}