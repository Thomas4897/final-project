const player2Timer = $(`<div class="player2Timer">
                        </div>`);

const player1Timer = $(`<div class="player1Timer">
                        </div>`);

const interval = 1000;

//? Player 1 Timer
let timers = [5400, 5400];
let playerMinutes = Math.floor(timers[0] / 60);
let playerSeconds = timers[0] % 60;

player1Timer.text(`${playerMinutes}:0${playerSeconds}`);
player2Timer.text(`${playerMinutes}:0${playerSeconds}`);

function setPlayersTimer(playerNumber) {
	let playerMinutes = Math.floor(timers[playerNumber - 1] / 60);
	let playerSeconds = timers[playerNumber - 1] % 60;

	if (playerNumber === 1) {
		timers[playerNumber - 1]--;

		if (playerSeconds < 10) {
			player1Timer.text(`${playerMinutes}:0${playerSeconds}`);
		} else {
			player1Timer.text(`${playerMinutes}:${playerSeconds}`);
		}
	}

	if (playerNumber === 2) {
		timers[playerNumber - 1]--;

		if (playerSeconds < 10) {
			player2Timer.text(`${playerMinutes}:0${playerSeconds}`);
		} else {
			player2Timer.text(`${playerMinutes}:${playerSeconds}`);
		}
	}
}

function timer() {
	const countDown = setInterval(() => {
		setPlayersTimer(playerNumber);
	}, interval);
}
