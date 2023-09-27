import {
	HAND_TYPES,
	HAND_SIZE
} from '../cards/constants.js';

const getHighestKindRank = (hand = [], desiredCount = 0) => {
	const kindCounts = {};
	hand.forEach(card => {
		kindCounts[card.rank] = kindCounts[card.rank] ? kindCounts[card.rank] + 1 : 1;
	});

	// Returns the highest rank for a specified kind count there are.
	return Object.keys(kindCounts).filter(key => {
		return kindCounts[key] === desiredCount;
	}).map(key => Number(key)).sort((kindA, kindB) => {
		return kindA - kindB;
	})[0];
};
const generalTieBreak = (handA, handB) => {
	let sortDirection = 0; // defaults as a tied score
	for (let i = 0; i < HAND_SIZE; i++) {
		if (handA[i].rank !== handB[i].rank) {
			// See sorting format explanation in sortForRoundWinner() below
			sortDirection = handA[i].rank < handB[i].rank ? 1 : -1;
			break;
		}
	}
	return sortDirection;
}

const cutTheTie = (playerA, playerB) => {
	// Both players share the same hand type, which is why they are here
	const handType = playerA.handType;
	let kindCountRequest = 0;
	switch(handType) {
		case (HAND_TYPES['PAIR']().index):
		case (HAND_TYPES['TWO_PAIR']().index):
			kindCountRequest = 2;
			break;
		case (HAND_TYPES['FULL_HOUSE']().index):
		case (HAND_TYPES['THREE_KIND']().index):
			kindCountRequest = 3;
			break;
		case (HAND_TYPES['FOUR_KIND']().index):
			kindCountRequest = 4;
			break;
		default: break;
	}
	
	const playerARanker = kindCountRequest !== 0 ? getHighestKindRank(playerA.hand, kindCountRequest) : 0;
	const playerBRanker = kindCountRequest !== 0 ? getHighestKindRank(playerB.hand, kindCountRequest) : 0;
	if (playerARanker < playerBRanker) {
		return 1;
	} else if (playerARanker > playerBRanker) {
		return -1;
	} else {
		return generalTieBreak(playerA.hand, playerB.hand);
	}
}

// Main export
const sortForRoundWinner = (playerA, playerB) => {
	if (playerA.handType < playerB.handType) {
		return 1; // Higher hand type score
	} else if (playerA.handType > playerB.handType) {
		return -1; // Lower hand type score
	} else { // Equivalent hand type score
		return cutTheTie(playerA, playerB);
	}
}
export default sortForRoundWinner;