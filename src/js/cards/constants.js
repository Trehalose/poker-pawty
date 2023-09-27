const HAND_SIZE = 5;
const HAND_TYPES = {
	'UNNAMED': () => ({ index: 0, prettyName: 'Unnamed' }),
	'PAIR': () => ({ index: 1, prettyName: 'Pair' }),
	'TWO_PAIR': () => ({ index: 2, prettyName: 'Two pairs' }),
	'THREE_KIND': () => ({ index: 3, prettyName: 'Three of a kind' }),
	'STRAIGHT': () => ({ index: 4, prettyName: 'Straight' }),
	'FLUSH': () => ({ index: 5, prettyName: 'Flush' }),
	'FULL_HOUSE': () => ({ index: 6, prettyName: 'Full House' }),
	'FOUR_KIND': () => ({ index: 7, prettyName: 'Four of a Kind' }),
	'STRAIGHT_FLUSH': () => ({ index: 8, prettyName: 'Straight Flush' }),
	'ROYAL_FLUSH': () => ({ index: 9, prettyName: 'Royal Flush' })
};

export {
	HAND_SIZE,
	HAND_TYPES
};