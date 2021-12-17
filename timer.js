const player2Timer = $(`<div class="player2Timer">
                        </div>`);

const player1Timer = $(`<div class="player1Timer">
                        </div>`);

const interval = 1000;

//? Player 1 Timer
let timers = [5400, 5400];
let playerNumber = 1;
let playerTimers = [player1Timer, player2Timer];

function setTimers(playerNumber) {
	let playerMinutes = Math.floor(timers[playerNumber - 1] / 60);
	let playerSeconds = timers[playerNumber - 1] % 60;
	let pad = playerSeconds < 10 ? "0" : "";

	playerTimers[playerNumber - 1].text(
		`${playerMinutes}:${pad}${playerSeconds}`
	);
}

setTimers(1);
setTimers(2);

function playerTimerChange() {
	let isPlayer1Turn = playerNumber === 1;
	let isPlayer2Turn = playerNumber === 2;

	if (isPlayer1Turn) {
		playerNumber = 2;
	} else if (isPlayer2Turn) {
		playerNumber = 1;
	}
}

function setPlayersTimer(playerNumber) {
	setTimers(playerNumber);
	let playersTimeLeft = playerNumber - 1;

	if (timers[playersTimeLeft] >= 0) {
		timers[playersTimeLeft]--;
	} else {
		playerTimers[playersTimeLeft].text(`Times Up!`);
	}
}

function timer() {
	const countDown = setInterval(() => {
		setPlayersTimer(playerNumber);
	}, interval);
}
