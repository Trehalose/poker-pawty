const sortTieBreak = (handA, handB) => {
	let sortDirection = 0; // defaults as a tied score
	for (let i = 0; i < 5; i++) {
		if (handA[i].rank !== handB[i].rank) {
			// See sorting format explanation in sortForRoundWinner() below
			sortDirection = handA[i].rank < handB[i].rank ? 1 : -1;
			break;
		}
	}
	return sortDirection;
}


const sortForRoundWinner = (playerA, playerB) => {
	if (playerA.handType < playerB.handType) {
		return 1; // Higher hand type score
	} else if (playerA.handType > playerB.handType) {
		return -1; // Lower hand type score
	} else { // Equivalent hand type score
		return sortTieBreak(playerA.hand, playerB.hand);
	}
}
export default sortForRoundWinner;