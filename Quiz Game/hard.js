const submit = document.getElementById('submit');
const telomeres = document.getElementById('telomeres');
const blackWhite = document.getElementById('blackWhite');
const goblet = document.getElementById('goblet');
const bile = document.getElementById('bile');
const sns = document.getElementById('sns');
const xxy = document.getElementById('xxy');
const red = document.getElementById('red');
const phagocytosis = document.getElementById('phagocytosis');
const oxytocin = document.getElementById('oxytocin');
const muscleBreak = document.getElementById('muscleBreak');
let score = 0;


submit.addEventListener('click', function () {
    if(telomeres.checked) {
        score += 1;
    }
    if(blackWhite.checked) {
        score += 1;
    }
    if(goblet.checked) {
        score += 1;
    }
    if(bile.checked) {
        score += 1;
    }
    if(sns.checked) {
        score += 1;
    }
    if(xxy.checked) {
        score += 1;
    }
    if(red.checked) {
        score += 1;
    }
    if(phagocytosis.checked) {
        score += 1;
    }
    if(oxytocin.checked) {
        score += 1;
    }
    if(muscleBreak.checked) {
        score += 1;
    }
    store();
})

function store() {
    sessionStorage.setItem("score", JSON.stringify(score));
    location.href = "result.html";
}