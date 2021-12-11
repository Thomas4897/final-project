//!  Features:
//!     - A function that allows players to Move the pieces
//!     - A function that keeps track of Player timers (like in a standard chess game players are given a set time and after they use up that time the must make moves with in a shorter timeframe)
//!     - A function that will capture the opponents piece and remove it from the game
const body = $("body");
const chessBoard = $(`<div class="chessBoard">
                        </div>`);

body.append(chessBoard);

const verticalChessBoardArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
const horizontalChessBoardArray = ["8", "7", "6", "5", "5", "3", "2", "1"];

// let rowArray = [];
// let chessboardArray = [];

function boardBuilder() {
	for (let i = 0; i < horizontalChessBoardArray.length; i++) {
		let whiteBackground = false;

		for (let j = 0; j < verticalChessBoardArray.length; j++) {
			//? defines the id as the div's xy position on the board
			const position = `${verticalChessBoardArray[j]}${horizontalChessBoardArray[i]}`;
			// rowArray.push(position);

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

			if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
				whiteBackground = true;
			} else {
				whiteBackground = false;
			}

			if (whiteBackground === true) {
				chessBoard.append(whiteSquare);
			} else {
				chessBoard.append(blackSquare);
			}
		}
		// chessboardArray.push(rowArray);
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

function boardSetup() {
	for (let i = 0; i < horizontalChessBoardArray.length; i++) {
		for (let j = 0; j < verticalChessBoardArray.length; j++) {
			const id = `#${verticalChessBoardArray[j]}${horizontalChessBoardArray[i]} .piece`;

			//! White pieces setup
			if (horizontalChessBoardArray[i] === "2") {
				const piece = $(id);
				piece.text(whitePawn);
			}

			if (id === "#a1 .piece" || id == "#h1 .piece") {
				const piece = $(id);
				piece.text(whiteRook);
			}

			if (id === "#b1 .piece" || id == "#g1 .piece") {
				const piece = $(id);
				piece.text(whiteKnight);
			}

			if (id === "#c1 .piece" || id == "#f1 .piece") {
				const piece = $(id);
				piece.text(whiteBishop);
			}

			if (id === "#d1 .piece") {
				const piece = $(id);
				piece.text(whiteQueen);
			}

			if (id === "#e1 .piece") {
				const piece = $(id);
				piece.text(whiteKing);
			}

			//! Black pieces setup
			if (horizontalChessBoardArray[i] === "7") {
				const piece = $(id);
				piece.text(blackPawn);
			}

			if (id === "#a8 .piece" || id == "#h8 .piece") {
				const piece = $(id);
				piece.text(blackRook);
			}

			if (id === "#b8 .piece" || id == "#g8 .piece") {
				const piece = $(id);
				piece.text(blackKnight);
			}

			if (id === "#c8 .piece" || id == "#f8 .piece") {
				const piece = $(id);
				piece.text(blackBishop);
			}

			if (id === "#d8 .piece") {
				const piece = $(id);
				piece.text(blackQueen);
			}

			if (id === "#e8 .piece") {
				const piece = $(id);
				piece.text(blackKing);
			}
		}
	}
}

// piece.text(whiteRook);

boardBuilder();
boardSetup();
