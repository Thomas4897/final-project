//!  Features:
//!     - A function that allows players to Move the pieces
//!     - A function that keeps track of Player timers (like in a standard chess game players are given a set player2Timer and after they use up that time the must make moves with in a shorter timeframe)
//!     - A function that will capture the opponents piece and remove it from the game
const body = $("body");
const chessBoard = $(`<div class="chessBoard">
                        </div>`);
const player2Timer = $(`<div class="player2Timer">
                        </div>`);

const player1Timer = $(`<div class="player1Timer">
                        </div>`);

body.append(player2Timer);
body.append(chessBoard);
body.append(player1Timer);

//! =======================================================================================

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

//! ===============================================================================

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

//! ==============================================================================

let pieceType = "";
let capturedPiece = "";
let lastPosition = "";
let playerNumber = 1;

function playerTimerChange() {
	if (playerNumber === 1) {
		playerNumber = 2;
	} else if (playerNumber === 2) {
		playerNumber = 1;
	}
}

function resetPieceAndPosition() {
	pieceType = "";
	lastPosition = "";
}

//! ========
function movePiece() {
	$(".piece").click(function () {
		console.log(`New Move Player ${playerNumber}:`);

		let pieceClass = $(this).attr("class");
		let pieceClassArray = pieceClass.split(" ");

		let notContainsPiece = pieceClassArray[1] === undefined;
		let containsPiece = pieceClassArray[1] !== undefined;

		//! If the space that is clicked does not contain a piece then it will set its class to what is in localStorage
		if (notContainsPiece && pieceType !== "") {
			//?
			$(this).addClass(pieceType);

			if (lastPosition !== "") {
				$(lastPosition).removeClass(pieceType);
			}

			playerTimerChange();
			resetPieceAndPosition();
		}

		//*=================================
		//! If the space that is clicked does not contain a piece then it will set its class to what is in localStorage
		if (containsPiece && pieceType !== "") {
			//?
			capturedPiece = pieceClassArray[1];

			$(this).removeClass(capturedPiece);
			$(this).addClass(pieceType);
			$(lastPosition).removeClass(pieceType);

			playerTimerChange();
			resetPieceAndPosition();
		} else if (containsPiece && pieceType === "") {
			pieceType = pieceClassArray[1];
			lastPosition = this;
		}
	});
}

//! =======================================================================================
//* refactor to just seconds divide minutes

//? Player 1 Timer
let timers = [5400, 5400];

let player1time = 5400;
let player1Minutes = Math.floor(player1time / 60);
let player1Seconds = player1time % 60;

const interval = 1000;

player1Timer.text(`${player1Minutes}:0${player1Seconds}`);

function setPlayer1Timer() {
	if (playerNumber === 1) {
		player1time--;

		player1Minutes = Math.floor(player1time / 60);
		player1Seconds = player1time % 60;

		if (player1Seconds < 10) {
			player1Timer.text(`${player1Minutes}:0${player1Seconds}`);
		} else {
			player1Timer.text(`${player1Minutes}:${player1Seconds}`);
		}
	}
}

//? Player 2 Timer
let player2time = 5400;
let player2Minutes = Math.floor(player2time / 60);
let player2Seconds = player2time % 60;

player2Timer.text(`${player2Minutes}:0${player2Seconds}`);

function setPlayer2Timer() {
	if (playerNumber === 2) {
		player2time--;

		player2Minutes = Math.floor(player2time / 60);
		player2Seconds = player2time % 60;

		if (player2Seconds < 10) {
			player2Timer.text(`${player2Minutes}:0${player2Seconds}`);
		} else {
			player2Timer.text(`${player2Minutes}:${player2Seconds}`);
		}
	}
}

function timer() {
	const countDown = setInterval(() => {
		setPlayer1Timer();
		setPlayer2Timer();
	}, interval);
}

boardBuilder();
boardSetup();
movePiece();
timer();

//? create-react-app .
//? npm install
//? npm run start
//? yarn start
