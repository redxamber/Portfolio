function get() {
    let score = sessionStorage.getItem('score');
    score = JSON.parse(score);
    document.getElementById('scoreDisplay').innerHTML = score + "/10";
}

window.onload = get();