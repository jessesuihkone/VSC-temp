const squareContainer = document.querySelector("#squares");
const numberOfSquares = 40;
let i = 0;
let square1, square2;
let clickCount = 0;
let score = 0;

document.querySelector("#score").style.visibility = "hidden";
const playAgainBtn = document.querySelector("button");
playAgainBtn.style.visibility = "hidden";
playAgainBtn.addEventListener("click", playAgain);



// Colors
let bolors = [
    "#33ff33",
    "#33ff33",
    "#ff944d",
    "#ff944d",
    "#80ccff",
    "#80ccff",
    "#ffff66",
    "#ffff66",
    "#ff4dff",
    "#ff4dff",
    "#ff1a1a",
    "#ff1a1a",
    "#dddddd",
    "#dddddd",
    "#000099",
    "#000099",
    "#0b02fa",
    "#0b02fa",
    "#02fa82",
    "#02fa82",
    "#fcfcfc",
    "#fcfcfc",
    "#dcfc83",
    "#dcfc83",
    "#fc83a8",
    "#fc83a8",
    "#a35cfa",
    "#a35cfa",
    "#33115c",
    "#33115c",
    "#115c3f",
    "#115c3f",
    "#916b01",
    "#916b01",
    "#f7da8b",
    "#f7da8b",
    "#fca456",
    "#fca456",
    "#e8b0f5",
    "#e8b0f5",

];



// Random color selection
function selectColor() {
    // 0-15
    const random = Math.floor(Math.random() * bolors.length)
    const selected = bolors[random]
    bolors.splice(random, 1)
    return selected;
};


while(i < numberOfSquares) {
    const square = document.createElement("li");
    const color = selectColor();
    square.setAttribute("data-color", color);
    squareContainer.appendChild(square);
    i++;
}

const squares = document.querySelectorAll('li')
for(const square of squares) {
    square.addEventListener("click", squareClicked)
};

function squareClicked() {
    if (square1 == this) return;
    clickCount++;
    if (clickCount > 2) return;
    clickCount === 1 ? (square1 = this) : (square2 = this);
    if(clickCount === 1) {
        square1.style.background = square1.getAttribute("data-color");
    } else {
        square2.style.background = square2.getAttribute("data-color");
        checkMatch();
    }
}

function checkMatch() {
    let Match =
    square1.getAttribute("data-color") === square2.getAttribute("data-color")
    if (!Match) {
        square1.classList.add("shake");
        square2.classList.add("shake");
        setTimeout(function () {
            noMatch();
        }, 500);
    } else {
        isMatch();
        checkGameEnded();
    }
}



// Check if it is a match or not
function noMatch() {
    square1.style.background = "";
    square2.style.background = "";
    square1.classList.remove("shake");
    square2.classList.remove("shake");
    square1 = "";
    square2 = "";
    clickCount = 0;
    console.log("no match")
}

function isMatch() {
    score++;
    document.querySelector("#score").innerText = score;
    document.querySelector("#score").style.visibility = "visible";
    square1.classList.add("pop");
    square2.classList.add("pop");
    square1.style.border = "none";
    square2.style.border = "none";
    square1.style.background = "none";
    square2.style.background = "none";
    square1.removeEventListener("click", squareClicked);
    square2.removeEventListener("click", squareClicked);
    clickCount = 0;
    console.log("match")
}



// Check game ending
function checkGameEnded() {
    const target = numberOfSquares / 2;
    const gameOver = score === target ? true : false;
    if (gameOver) {
        playAgainBtn.style.visibility = "visible";
    }
}



// Play again button
function playAgain() {
    window.location.reload();
}



// Rainbow
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

		var ii = 1;

		window.setInterval(function(){
			document.body.style.backgroundColor = colors[ii];
			ii++;
			if (ii === colors.length){
				ii=0;
			}
		}, 7500);