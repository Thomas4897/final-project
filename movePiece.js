let selectedPieceType = "";
let selectedPiece = "";
let capturedPieceType = "";

function resetPieceAndPosition() {
	selectedPieceType = "";
	selectedPiece = "";
	capturedPiece = "";
}

//! Function that selects player's piece and moves it
function movePiece() {
	$(".piece").click(function () {
		console.log(`New Move Player ${playerNumber}:`);

		let pieceClass = $(this).attr("class");
		let pieceClassArray = pieceClass.split(" ");
		let doesSquareContainsPiece = pieceClassArray[1] !== undefined;

		let isWhitesTurn = playerNumber === 1;
		let isWhitesPiece = selectedPieceType[0] === "w";
		let isBlacksTurn = playerNumber === 2;
		let isBlacksPiece = selectedPieceType[0] === "b";

		let isPieceTypeEmpty = selectedPieceType === "";

		let isPlayerSelectingPiece = doesSquareContainsPiece && isPieceTypeEmpty;
		let isPlayerCapturingPiece = doesSquareContainsPiece && !isPieceTypeEmpty;
		let isPlayerMovingToEmptySquare =
			!doesSquareContainsPiece && !isPieceTypeEmpty;

		//? If is a players turn & the players piece is clicked then piece is selected or moved
		if (
			(isWhitesTurn && isWhitesPiece) ||
			(isBlacksTurn && isBlacksPiece) ||
			isPieceTypeEmpty
		) {
			if (isPlayerSelectingPiece) {
				selectedPieceType = pieceClassArray[1];
				selectedPiece = this;
			}

			if (isPlayerMovingToEmptySquare) {
				//?
				$(this).addClass(selectedPieceType);
				$(selectedPiece).removeClass(selectedPieceType);

				playerTimerChange();
				resetPieceAndPosition();
			}

			if (isPlayerCapturingPiece) {
				//?
				capturedPiece = pieceClassArray[1];
				capturedPieceType = capturedPiece[0];
				let lastPositionPieceType = $(selectedPiece).attr("class")[6];

				isValidCapture = capturedPieceType !== lastPositionPieceType;

				if (isValidCapture) {
					$(this).removeClass(capturedPiece);
					$(this).addClass(selectedPieceType);
					$(selectedPiece).removeClass(selectedPieceType);

					playerTimerChange();
					resetPieceAndPosition();
				}
			}
		} else {
			selectedPieceType = "";
		}
	});
}
