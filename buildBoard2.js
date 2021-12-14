//!  Features:
//!     - A function that allows players to Move the pieces
//!     - A function that keeps track of Player timers (like in a standard chess game players are given a set time and after they use up that time the must make moves with in a shorter timeframe)
//!     - A function that will capture the opponents piece and remove it from the game
const body = $("body");
const chessBoard = $(`<div class="chessBoard">
                        </div>`);
const time = $(`<div class="timer">
                        </div>`);

const time2 = $(`<div class="timer2">
                        </div>`);

body.append(time);
body.append(chessBoard);
body.append(time2);

const verticalChessBoardArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
const horizontalChessBoardArray = ["8", "7", "6", "5", "5", "3", "2", "1"];

//! ===========
function boardBuilder() {
	//? ===========
	for (let i = 0; i < horizontalChessBoardArray.length; i++) {
		let whiteBackground = false;

		for (let j = 0; j < verticalChessBoardArray.length; j++) {
			//? defines the id as the div's xy position on the board
			const position = `${verticalChessBoardArray[j]}${horizontalChessBoardArray[i]}`;

			//? defines the id as the div's xy position on the board
			const whiteSquare = $(
				`<div class="whiteSquare" id="${position}">
				${position}
				<div class="piece"></div>
			</div>`
			);

			const blackSquare = $(
				`<div class="blackSquare" id="${position}">
				${position} 
				<div class="piece"></div>
            </div>`
			);

			//? ========
			if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
				whiteBackground = true;
			} else {
				whiteBackground = false;
			}

			//? ===========
			if (whiteBackground === true) {
				chessBoard.append(whiteSquare);
			} else {
				chessBoard.append(blackSquare);
			}
		}
	}
}

const whiteKing = "♔";

const whiteQueen = "♕";
const whiteRook = "♖";
const whiteBishop = "♗";
const whiteKnight = "♘";
const whitePawn = "♙";

const blackKing = "♚";
const blackQueen = "♛";
const blackRook = "♜";
const blackBishop = "♝";
const blackKnight = "♞";
const blackPawn = "♟";

//! =========
function boardSetup() {
	//? ============
	for (let i = 0; i < horizontalChessBoardArray.length; i++) {
		for (let j = 0; j < verticalChessBoardArray.length; j++) {
			const id = `#${verticalChessBoardArray[j]}${horizontalChessBoardArray[i]} .piece`;

			//! White pieces setup
			if (horizontalChessBoardArray[i] === "2") {
				$(id).addClass("whitePawn");
			}

			if (id === "#a1 .piece" || id == "#h1 .piece") {
				$(id).addClass("whiteRook");
			}

			if (id === "#b1 .piece" || id == "#g1 .piece") {
				$(id).addClass("whiteKnight");
			}

			if (id === "#c1 .piece" || id == "#f1 .piece") {
				$(id).addClass("whiteBishop");
			}

			if (id === "#d1 .piece") {
				$(id).addClass("whiteQueen");
			}

			if (id === "#e1 .piece") {
				$(id).addClass("whiteKing");
			}

			//! Black pieces setup
			if (horizontalChessBoardArray[i] === "7") {
				$(id).addClass("blackPawn");
			}

			if (id === "#a8 .piece" || id == "#h8 .piece") {
				$(id).addClass("blackRook");
			}

			if (id === "#b8 .piece" || id == "#g8 .piece") {
				$(id).addClass("blackKnight");
			}

			if (id === "#c8 .piece" || id == "#f8 .piece") {
				$(id).addClass("blackBishop");
			}

			if (id === "#d8 .piece") {
				$(id).addClass("blackQueen");
			}

			if (id === "#e8 .piece") {
				$(id).addClass("blackKing");
			}
		}
	}
}

let pieceType = "";
let capturedPiece = "";
let lastPosition = "";
let startTimer = false;

//! ========
function movePiece() {
	$(".piece").click(function () {
		console.log("New Move:");

		startTimer = true;
		let testClass = $(this).attr("class");
		let testClassArray = testClass.split(" ");

		let doesNotContainPiece = testClassArray[1] === undefined;
		let ifContainsPiece = testClassArray[1] !== undefined;

		//! If the space that is clicked does not contain a piece then it will set its class to what is in localStorage
		if (doesNotContainPiece && pieceType !== "") {
			console.log("line 147 is called");
			$(this).addClass(pieceType);

			//?
			if (lastPosition !== "") {
				console.log("line 153 is called");
				$(lastPosition).removeClass(pieceType);
			}
			lastPosition = "";
			pieceType = "";

			console.log("lastPosition", lastPosition);
			console.log("pieceType", pieceType);
		}

		//*=================================
		//! If the space that is clicked does not contain a piece then it will set its class to what is in localStorage
		if (ifContainsPiece && pieceType !== "") {
			console.log("line 165 is called");
			capturedPiece = testClassArray[1];
			$(this).removeClass(capturedPiece);
			$(this).addClass(pieceType);
			$(lastPosition).removeClass(pieceType);

			lastPosition = "";
			pieceType = "";
		} else if (ifContainsPiece && pieceType === "") {
			console.log("line 174 is called");
			pieceType = testClassArray[1];
			lastPosition = this;
			console.log("lastPosition", lastPosition);
			console.log("pieceType", pieceType);
		}
	});
}

function playerTimer() {
	const countDown = new Time("");
}

// const timer = document.querySelector("h1");
let timeMinutes = 90;
let timeSeconds = 0;
const interval = 1000;

// time.text(`${timeMinutes}:0${timeSeconds}`);
// time2.text(`${timeMinutes}:0${timeSeconds}`);

function timer() {
	const countDown = setInterval(() => {
		if (startTimer === true) {
			if (timeSeconds > 0) {
				timeSeconds--;
			}

			if (timeSeconds < 10) {
				seconds = `0${timeSeconds}`;
			} else {
				seconds = `${timeSeconds}`;
			}

			time.text(`${timeMinutes}:${seconds}`);

			// displayTime(timeSecond);
			if (timeSeconds <= 0) {
				if (timeMinutes > 0) {
					timeMinutes--;
					timeSeconds = 60;
				}

				if (timeMinutes <= 1 && timeSeconds <= 1) {
					clearInterval(countDown);
					time.text(`Times Up!`);
				}
			}
		}
	}, interval);
}

time.text(`${timeMinutes}:0${timeSeconds}`);
time2.text(`${timeMinutes}:0${timeSeconds}`);

boardBuilder();
boardSetup();
movePiece();
timer();

//? create-react-app .
//? npm install
//? npm run start
//? yarn start
