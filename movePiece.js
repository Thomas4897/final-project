let pieceType = "";
let capturedPiece = "";
let lastPosition = "";
let playerNumber = 1;

// let clickable = false;

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

		// if (clickable === true) {
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

			if (capturedPiece[0] !== $(lastPosition).attr("class")[6]) {
				$(this).removeClass(capturedPiece);
				$(this).addClass(pieceType);
				$(lastPosition).removeClass(pieceType);

				playerTimerChange();
				resetPieceAndPosition();
			}
		} else if (containsPiece && pieceType === "") {
			pieceType = pieceClassArray[1];
			lastPosition = this;
		}
		// }
	});
}
