const submit = document.getElementById('submit');
const arteries = document.getElementById('arteries');
const four = document.getElementById('four');
const teeth32 = document.getElementById('teeth32');
const bones3 = document.getElementById('bones3');
const monocyte = document.getElementById('monocyte');
const bgr = document.getElementById('bgr');
const feetFirst = document.getElementById('feetFirst');
const bacteria = document.getElementById('bacteria');
const cnspns = document.getElementById('cnspns');
const skin = document.getElementById('skin');
let score = 0;


submit.addEventListener('click', function () {
    if(arteries.checked) {
        score += 1;
    }
    if(four.checked) {
        score += 1;
    }
    if(teeth32.checked) {
        score += 1;
    }
    if(bones3.checked) {
        score += 1;
    }
    if(monocyte.checked) {
        score += 1;
    }
    if(bgr.checked) {
        score += 1;
    }
    if(feetFirst.checked) {
        score += 1;
    }
    if(bacteria.checked) {
        score += 1;
    }
    if(cnspns.checked) {
        score += 1;
    }
    if(skin.checked) {
        score += 1;
    }
    store();
})

function store() {
    sessionStorage.setItem("score", JSON.stringify(score));
    location.href = "result.html";
}