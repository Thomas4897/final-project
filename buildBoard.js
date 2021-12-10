//!  Features:
//!     - A function that allows players to Move the pieces
//!     - A function that keeps track of Player timers (like in a standard chess game players are given a set time and after they use up that time the must make moves with in a shorter timeframe)
//!     - A function that will capture the opponents piece and remove it from the game
const body = $("body");
const chessBoard = $(`<div class="chessBoard">
                        </div>`);

body.append(chessBoard);

const horizontalChessBoardArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalChessBoardArray = ["8", "7", "6", "5", "5", "3", "2", "1"];

let rowArray = [];
let chessboardArray = [];

//
for (let i = 0; i < horizontalChessBoardArray.length; i++) {
	let rowArray = [];

	for (let j = 0; j < verticalChessBoardArray.length; j++) {
		//? defines the id as the div's xy position on the board
		const position = `${horizontalChessBoardArray[j]}${verticalChessBoardArray[i]}`;
		rowArray.push(position);
	}
	chessboardArray.push(rowArray);
}

for (let i = 0; i < chessboardArray.length; i++) {
	let whiteBackground = false;
	for (let j = 0; j < chessboardArray.length; j++) {
		//? defines the id as the div's xy position on the board
		const id = `${chessboardArray[i][j]}`;
		console.log("chessboardArray[j]", id);
		const whiteSquare = $(
			`<div class="whiteSquare" id="${id}">
				${id}
				<div class="piece"></div>
			</div>`
		);

		const blackSquare = $(
			`<div class="blackSquare" id="${id}">
				${id} 
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
}

const a2 = $("#a2 .piece");
a2.text(`♙`);
