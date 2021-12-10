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

for (let i = 0; i < horizontalChessBoardArray.length; i++) {
	console.log('Is "i" for loop running');
	for (let j = 0; j < verticalChessBoardArray; j++) {
		console.log('Is "j" for loop running');

		//? defines the id as the div's xy position on the board
		const id = `${horizontalChessBoardArray[i]}${verticalChessBoardArray[j]}`;
		const whiteSquare = $(`<div class="whiteSquare" id="${id}">
                                    ${id}
                        </div>`);

		const blackSquare = $(`<div class="blackSquare" id="${id}">
                        </div>`);

		//* Appends the new value to the div's innerText
		if (i % 2 === 0 && j % 2 === 1) {
			chessBoard.append(whiteSquare);
		}

		if (i % 2 === 1 && j % 2 === 0) {
			chessBoard.append(blackSquare);
		}
		// 	//* If dollar amount is greater that 100 than add 200 to it
		// 	if (j < 1) {
		// 		dollarAmount += 100;
		// 	} else {
		// 		dollarAmount += 200;
		// 	}
	}
}
