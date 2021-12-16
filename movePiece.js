let pieceType = "";
let lastPosition = "";

function resetPieceAndPosition() {
	pieceType = "";
	lastPosition = "";
}

//! ========
function movePiece() {
	$(".piece").click(function () {
		console.log(`New Move Player ${playerNumber}:`);
		// $(this).css({
		// 	background: "rgba(112, 128, 144, 0.63)",
		// });
		let pieceClass = $(this).attr("class");
		let pieceClassArray = pieceClass.split(" ");
		let doesSquareContainsPiece = pieceClassArray[1] !== undefined;
		let isWhitesTurn = playerNumber === 1;
		let isWhitesPiece = pieceType[0] === "w";
		let isBlacksTurn = playerNumber === 2;
		let isBlacksPiece = pieceType[0] === "b";
		let isStart = pieceType === "";
		let capturedPiece = "";
		// let isSamePieceColor =
		// 	capturedPiece[0] !== $(lastPosition).attr("class")[6];

		if (
			(isWhitesTurn && isWhitesPiece) ||
			(isBlacksTurn && isBlacksPiece) ||
			isStart
		) {
			//! If the space that is clicked does not contain a piece then it will set its class to what is in localStorage
			if (!doesSquareContainsPiece && !isStart) {
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
			if (doesSquareContainsPiece && isStart) {
				pieceType = pieceClassArray[1];
				lastPosition = this;
			} else if (doesSquareContainsPiece && !isStart) {
				//?
				capturedPiece = pieceClassArray[1];

				if (capturedPiece[0] !== $(lastPosition).attr("class")[6]) {
					$(this).removeClass(capturedPiece);
					$(this).addClass(pieceType);
					$(lastPosition).removeClass(pieceType);

					playerTimerChange();
					resetPieceAndPosition();
				}
			}
		} else {
			pieceType = "";
		}
	});
}
