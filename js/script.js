var userPoints = 0;
var comPoints = 0;
var runTimes = 3;

for (var i = 0; i < runTimes; i++) {
	
	do {
		var userVal = prompt('Rock/Paper/Scissor');
	} while (!userVal);

	var compRand = Math.random() * 3;
	var compValue = Math.ceil(compRand);

	if (userVal == 1 && compValue == 1) {
		userPoints += 0;
	} else if (userVal == 1 && compValue == 2) {
		comPoints += 1;
	} else if (userVal == 1 && compValue == 3) {
		userPoints += 1;
	} else if (userVal == 2 && compValue == 1) {
		userPoints += 1;
	} else if (userVal == 2 && compValue == 2) {
		userPoints += 0;
	} else if (userVal == 2 && compValue == 3) {
		comPoints += 1;
	} else if (userVal == 3 && compValue == 1) {
		comPoints += 1;
	} else if (userVal == 3 && compValue == 2) {
		userPoints += 1;
	} else if (userVal == 3 && compValue == 3) {
		userPoints += 0;
	}

	if (i == runTimes - 2) {
		if (userPoints == 2 || comPoints == 2) {
			break;
		}
	}
}

if (userPoints < comPoints) {
	console.log('Computer Wins! Points ' + comPoints + ' You lose! Points: ' + userPoints);
} else if (userPoints == comPoints) {
	console.log('Draw Math! Computer Points ' + comPoints + ' User Points: ' + userPoints);
} else {
	console.log('You win! Points: ' + userPoints + ' Computer Loses! Points ' + comPoints);
}