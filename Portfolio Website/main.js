function toggleText1() {
  var text1 = document.getElementById("paragraph1");
  var text2 = document.getElementById("paragraph2");
  var text3 = document.getElementById("paragraph3");
  if (text1.style.display === "none") {
    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
  } else {
    text1.style.display = "none";
  } 
}

function toggleText2() {
  var text1 = document.getElementById("paragraph1");
  var text2 = document.getElementById("paragraph2");
  var text3 = document.getElementById("paragraph3");
  if (text2.style.display === "none") {
    text2.style.display = "block";
    text1.style.display = "none";
    text3.style.display = "none";
  } else {
    text2.style.display = "none";
  } 
}

function toggleText3() {
  var text1 = document.getElementById("paragraph1");
  var text2 = document.getElementById("paragraph2");
  var text3 = document.getElementById("paragraph3");
  if (text3.style.display === "none") {
    text3.style.display = "block";
    text2.style.display = "none";
    text1.style.display = "none";
  } else {
    text3.style.display = "none";
  } 
}



