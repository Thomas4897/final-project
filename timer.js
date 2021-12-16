const player2Timer = $(`<div class="player2Timer">
                        </div>`);

const player1Timer = $(`<div class="player1Timer">
                        </div>`);

const interval = 1000;

//? Player 1 Timer
let timers = [5400, 5400];
let playertimers = [player1Timer, player2Timer];
let playerMinutes = Math.floor(timers[0] / 60);
let playerSeconds = timers[0] % 60;
let playerNumber = 1;

player1Timer.text(`${playerMinutes}:0${playerSeconds}`);
player2Timer.text(`${playerMinutes}:0${playerSeconds}`);

function playerTimerChange() {
	if (playerNumber === 1) {
		playerNumber = 2;
	} else if (playerNumber === 2) {
		playerNumber = 1;
	}
}

function setPlayersTimer(playerNumber) {
	let playerMinutes = Math.floor(timers[playerNumber - 1] / 60);
	let playerSeconds = timers[playerNumber - 1] % 60;
	let pad = playerSeconds < 10 ? "0" : "";

	timers[playerNumber - 1]--;

	playertimers[playerNumber - 1].text(
		`${playerMinutes}:${pad}${playerSeconds}`
	);
}

function timer() {
	const countDown = setInterval(() => {
		setPlayersTimer(playerNumber);
	}, interval);
}
