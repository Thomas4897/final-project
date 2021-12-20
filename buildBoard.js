//!  Features:
//!     - A function that allows players to Move the pieces
//!     - A function that keeps track of Player timers (like in a standard chess game players are given a set player2Timer and after they use up that time the must make moves with in a shorter timeframe)
//!     - A function that will capture the opponents piece and remove it from the game
const body = $("body");
const chessBoard = $(`<div class="chessBoard">
                        </div>`);

body.append(player2Timer);
body.append(chessBoard);
body.append(player1Timer);

//! =======================================================================================

const verticalChessBoardArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
const horizontalChessBoardArray = ["8", "7", "6", "5", "5", "3", "2", "1"];

//! Function that builds an 8x8 checkered board
function boardBuilder() {
	//? For loop that cycles through horizontalChessBoardArray
	for (let i = 0; i < horizontalChessBoardArray.length; i++) {
		let whiteBackground = false;

		//? For loop that cycles through verticalChessBoardArray
		for (let j = 0; j < verticalChessBoardArray.length; j++) {
			//? Creates a xy id from the two arrays
			const position = `${verticalChessBoardArray[j]}${horizontalChessBoardArray[i]}`;

			//? defines the whiteSquare id as the div's xy position on the board
			const whiteSquare = $(
				`<div class="whiteSquare" id="${position}">
				${position}
				<div class="piece"></div>
			</div>`
			);

			//? defines the blackSquare id as the div's xy position on the board
			const blackSquare = $(
				`<div class="blackSquare" id="${position}">
				${position} 
				<div class="piece"></div>
            </div>`
			);

			//? Defines a whiteSquare
			const isWhiteSquare =
				(i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1);

			//? If whiteSquare sets whiteBackground to true else false
			if (isWhiteSquare) {
				whiteBackground = true;
			} else {
				whiteBackground = false;
			}

			//? If whiteBackground is true then appends a whiteSquare else appends a blackSquare
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

//! Functions that sets up the initial chessboard
function boardSetup() {
	//? For loop that cycles through horizontalChessBoardArray
	for (let i = 0; i < horizontalChessBoardArray.length; i++) {
		//? For loop that cycles through verticalChessBoardArray
		for (let j = 0; j < verticalChessBoardArray.length; j++) {
			//? Creates a xy id from the two arrays
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

boardBuilder();
boardSetup();
movePiece();
timer();
