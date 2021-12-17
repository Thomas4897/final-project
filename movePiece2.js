let selectedPieceType = "";
let lastPosition = "";
let pieceClass = "";
let lastPositionPieceType = "";
let pieceClassArray = "";

let doesSquareContainsPiece = "";
let isWhitesTurn = "";
let isWhitesPiece = "";
let isBlacksTurn = "";
let isBlacksPiece = "";
let isPieceTypeEmpty = "";
let capturedPieceType = "";

let isCapturingPiece = "";
let isValidCapture = "";

function resetPieceAndPosition() {
	selectedPieceType = "";
	lastPosition = "";
	capturedPiece = "";
}

//! ========
function movePiece() {
	$(".piece").click(function () {
		console.log(`New Move Player ${playerNumber}:`);
		// $(this).css({
		// 	background: "rgba(112, 128, 144, 0.63)",
		// });
		pieceClass = $(this).attr("class");
		if (lastPosition !== "") {
			lastPositionPieceType = $(lastPosition).attr("class")[6];
		}
		pieceClassArray = pieceClass.split(" ");

		doesSquareContainsPiece = pieceClassArray[1] !== undefined;

		isWhitesTurn = playerNumber === 1;
		isWhitesPiece = selectedPieceType[0] === "w";
		isBlacksTurn = playerNumber === 2;
		isBlacksPiece = selectedPieceType[0] === "b";

		isPieceTypeEmpty = selectedPieceType === "";

		isPlayerMoving = doesSquareContainsPiece && isPieceTypeEmpty;
		isCapturingPiece = doesSquareContainsPiece && !isPieceTypeEmpty;
		notCapturingPiece = !doesSquareContainsPiece && !isPieceTypeEmpty;

		// let isSamePieceColor =
		// 	capturedPieceType[0] !== $(lastPosition).attr("class")[6];

		if (
			(isWhitesTurn && isWhitesPiece) ||
			(isBlacksTurn && isBlacksPiece) ||
			isPieceTypeEmpty
		) {
			if (isPlayerMoving) {
				console.log("Called");
				selectedPieceType = pieceClassArray[1];
				lastPosition = this;
			}

			if (notCapturingPiece) {
				console.log("Called2");

				//?
				$(this).addClass(selectedPieceType);

				if (lastPosition !== "") {
					$(lastPosition).removeClass(selectedPieceType);
				}

				playerTimerChange();
				resetPieceAndPosition();
			}

			if (isCapturingPiece) {
				console.log("Called3");
				//?
				capturedPiece = pieceClassArray[1];
				capturedPieceType = capturedPiece[0];

				isValidCapture = capturedPieceType !== lastPositionPieceType;

				if (isValidCapture) {
					console.log("Called4");

					$(this).removeClass(capturedPiece);
					$(this).addClass(selectedPieceType);
					$(lastPosition).removeClass(selectedPieceType);

					playerTimerChange();
					resetPieceAndPosition();
				}
			}
		} else {
			selectedPieceType = "";
		}
	});
}
