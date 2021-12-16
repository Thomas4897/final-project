const player2Timer = $(`<div class="player2Timer">
                        </div>`);

const player1Timer = $(`<div class="player1Timer">
                        </div>`);

const interval = 1000;

//? Player 1 Timer
let timers = [5400, 5400];
let playerNumber = 1;
let playertimers = [player1Timer, player2Timer];

function setTimers(playerNumber) {
	let playerMinutes = Math.floor(timers[playerNumber - 1] / 60);
	let playerSeconds = timers[playerNumber - 1] % 60;
	let pad = playerSeconds < 10 ? "0" : "";

	playertimers[playerNumber - 1].text(
		`${playerMinutes}:${pad}${playerSeconds}`
	);
}

setTimers(1);
setTimers(2);

function playerTimerChange() {
	if (playerNumber === 1) {
		playerNumber = 2;
	} else if (playerNumber === 2) {
		playerNumber = 1;
	}
}

function setPlayersTimer(playerNumber) {
	setTimers(playerNumber);

	if (timers[playerNumber - 1] >= 0) {
		timers[playerNumber - 1]--;
	} else {
		playertimers[playerNumber - 1].text(`Times Up!`);
	}
}

function timer() {
	const countDown = setInterval(() => {
		setPlayersTimer(playerNumber);
	}, interval);
}
