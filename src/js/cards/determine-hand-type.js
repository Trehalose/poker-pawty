import { HAND_TYPES } from './constants.js';

// Card type checker methods
const isRoyalFlush = (hand = []) => {
	return isFlush(hand) && isStraight(hand, true);
};
const isStraightFlush = (hand = []) => {
	return isFlush(hand) && isStraight(hand);
};
const getKindCounts = (hand = [], desiredCount = 0) => {
	const kindCounts = {};
	hand.forEach(card => {
		kindCounts[card.rank] = kindCounts[card.rank] ? kindCounts[card.rank] + 1 : 1;
	});

	// Returns how many instances for a specified rank count there are.
	return Object.values(kindCounts).filter(count => count === desiredCount).length;
};
const isFullHouse = (hand = []) => {
	const has3OfKind = getKindCounts(hand, 3) === 1;
	const has2OfKind = getKindCounts(hand, 2) === 1;
	return has3OfKind && has2OfKind;
};
const isFlush = (hand = []) => {
	const firstCardSuit = hand[0].suit;
	return hand.map(card => card.suit).filter(suit => suit === firstCardSuit).length === 5;
};
const isStraight = (hand = [], isRoyal = false) => {
	// NOTE: Ace is 14, TODO: refactor if in the mood for it
	const firstCardCheck = isRoyal ? hand[0].rank === 14 : true;
	if (
		firstCardCheck &&
		// Note: Below checks are not ideal, but I am optimizing for laziness.
		hand[1].rank === (hand[0].rank - 1) &&
		hand[2].rank === (hand[1].rank - 1) &&
		hand[3].rank === (hand[2].rank - 1) &&
		hand[4].rank === (hand[3].rank - 1)
		// TODO: mod for low Aces if having the time or mood.
	) {
		return true;
	}
	return false;
};


// The main export
const determineHandType = (hand = []) => {
	if (isRoyalFlush(hand)) {
		return HAND_TYPES.ROYAL_FLUSH().index;
	} else if (isStraightFlush(hand)) {
		return HAND_TYPES.STRAIGHT_FLUSH().index;
	} else if (getKindCounts(hand, 4) === 1) {
		return HAND_TYPES.FOUR_KIND().index;
	} else if (isFullHouse(hand)) {
		return HAND_TYPES.FULL_HOUSE().index;
	} else if (isFlush(hand)) {
		return HAND_TYPES.FLUSH().index;
	} else if (isStraight(hand)) {
		return HAND_TYPES.STRAIGHT().index;
	} else if (getKindCounts(hand, 3) === 1) {
		return HAND_TYPES.THREE_KIND().index;
	} else if (getKindCounts(hand, 2) === 2) {
		return HAND_TYPES.TWO_PAIR().index;
	} else if (getKindCounts(hand, 2) === 1) {
		return HAND_TYPES.PAIR().index;
	} else {
		return HAND_TYPES.UNNAMED().index;
	}
};
export default determineHandType;