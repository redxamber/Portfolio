//Define variables
let box0 = document.getElementById('box-0');
let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');
let box4 = document.getElementById('box-4');
let box5 = document.getElementById('box-5');
let box6 = document.getElementById('box-6');
let box7 = document.getElementById('box-7');
let box8 = document.getElementById('box-8');
let reset = document.getElementById('reset');
let boxes = document.querySelectorAll('.box');
let winnerMessage = document.querySelector('#display-winner');
let whosTurn = document.querySelector('#whosturn');
let currentPlayer = "X";

//Clicking and switching players for each box & winning conditions
for (i of boxes) {
i.addEventListener('click', function displayLetter(e) {

//Displaying and switching players
	let box = e.target;
    if (currentPlayer === "X") {
		box.textContent = "X";
		currentPlayer = "O";
		whosTurn.innerHTML = "It's Player O's Turn";
	} else {
		box.textContent = "O";
		currentPlayer = "X";
		whosTurn.innerHTML = "It's Player X's Turn";
	}

	if (box.textContent !== "") {
        box.disabled = true;
	}

    //Winning X Statements 
	if (box0.textContent == "X" && box1.textContent == "X" && box2.textContent == "X") {
		winningMessageX();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box3.textContent == "X" && box4.textContent == "X" && box5.textContent == "X") {
		winningMessageX();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box6.textContent == "X" && box7.textContent == "X" && box8.textContent == "X") {
		winningMessageX();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box0.textContent == "X" && box3.textContent == "X" && box6.textContent == "X") {
		winningMessageX();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box1.textContent == "X" && box4.textContent == "X" && box7.textContent == "X") {
		winningMessageX();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box2.textContent == "X" && box5.textContent == "X" && box8.textContent == "X") {
		winningMessageX();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box0.textContent == "X" && box4.textContent == "X" && box8.textContent == "X") {
		winningMessageX();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box2.textContent == "X" && box4.textContent == "X" && box6.textContent == "X") {
		winningMessageX();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	//Winning O Statements	
	else if (box0.textContent == "O" && box1.textContent == "O" && box2.textContent == "O") {
		winningMessageO();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box3.textContent == "O" && box4.textContent == "O" && box5.textContent == "O") {
		winningMessageO();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box6.textContent == "O" && box7.textContent == "O" && box8.textContent == "O") {
		winningMessageO();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box0.textContent == "O" && box3.textContent == "O" && box6.textContent == "O") {
		winningMessageO();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box1.textContent == "O" && box4.textContent == "O" && box7.textContent == "O") {
		winningMessageO();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box2.textContent == "O" && box5.textContent == "O" && box8.textContent == "O") {
		winningMessageO();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box0.textContent == "O" && box4.textContent == "O" && box8.textContent == "O") {
		winningMessageO();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if (box2.textContent == "O" && box4.textContent == "O" && box6.textContent == "O") {
		winningMessageO();
		disableBoxes();
		whosTurn.innerHTML = "";
	}
	else if ((box0.textContent == 'X' || box0.textContent == 'O') && (box1.textContent == 'X'
    || box1.textContent == 'O') && (box2.textContent == 'X' || box2.textContent == 'O') &&
    (box3.textContent == 'X' || box3.textContent == 'O') && (box4.textContent == 'X' ||
    box4.textContent == 'O') && (box5.textContent == 'X' || box5.textContent == 'O') &&
    (box6.textContent == 'X' || box6.textContent == 'O') && (box7.textContent == 'X' ||
    box7.textContent == 'O') && (box8.textContent == 'X' || box8.textContent == 'O')) {
        drawMessage();
		whosTurn.innerHTML = "";
    }
	else {
		null;
	}
  }  
)}

//Message/disable functions
function winningMessageX() {
    winnerMessage.innerHTML = "Player X wins!";
}
function winningMessageO() {
    winnerMessage.innerHTML = "Player O wins!";
}
function drawMessage() {
    winnerMessage.innerHTML = "It's a draw!";
}
function disableBoxes() {
	box0.disabled = true;
	box1.disabled = true;
	box2.disabled = true;
	box3.disabled = true;
	box4.disabled = true;
	box5.disabled = true;
	box6.disabled = true;
    box7.disabled = true;
	box8.disabled = true;
}

//Reset function 
reset.addEventListener('click', function reset() {
	box0.textContent = "";	
	box1.textContent = "";	
	box2.textContent = "";	
	box3.textContent = "";	
	box4.textContent = "";	
	box5.textContent = "";	
	box6.textContent = "";	
	box7.textContent = "";	
	box8.textContent = "";	
	winnerMessage.innerHTML = "";
	box0.disabled = false;
	box1.disabled = false;
	box2.disabled = false;
	box3.disabled = false;
	box4.disabled = false;
	box5.disabled = false;
	box6.disabled = false;
    box7.disabled = false;
	box8.disabled = false;
})