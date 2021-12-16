let selectedPieceClass = "";
let selectedPiece = "";

function resetPieceAndPosition() {
	selectedPieceClass = "";
	selectedPiece = "";
}

//! ========
function movePiece() {
	$(".piece").click(function () {
		console.log(`New Move Player ${playerNumber}:`);

		let pieceClass = $(this).attr("class");
		let pieceClassArray = pieceClass.split(" ");
		let doesSquareContainsPiece = pieceClassArray[1] !== undefined;

		let isWhitesTurn = playerNumber === 1;
		let isWhitesPiece = selectedPieceClass[0] === "w";
		let isBlacksTurn = playerNumber === 2;
		let isBlacksPiece = selectedPieceClass[0] === "b";
		let isStart = selectedPieceClass === "";

		let capturedPiece = "";

		if (
			(isWhitesTurn && isWhitesPiece) ||
			(isBlacksTurn && isBlacksPiece) ||
			isStart
		) {
			//*=================================
			//! If the space that is clicked does not contain a piece then it will set its class to what is in localStorage
			// if (doesSquareContainsPiece && isStart) {
			selectedPieceClass = pieceClassArray[1];

			selectedPiece = this;

			let selectedPieceColor = $(selectedPiece).attr("class")[6];

			// $(selectedPiece).removeClass(selectedPieceClass);
			// }

			//?

			$(this).addClass(selectedPieceClass);

			// $(selectedPiece).removeClass(selectedPieceClass);

			playerTimerChange();
			// resetPieceAndPosition();
		} else {
			selectedPieceClass = "";
		}
	});
}
