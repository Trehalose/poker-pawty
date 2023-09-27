import loadDeck from './load-deck.js';

const deck = loadDeck();
const MAX_CARDS_IN_HAND = 5;

const dealHand = () => {
	const hand = [];
	// Get 5 random cards from core deck to pass to a player's hand
	for(let cardCount = 0; cardCount < MAX_CARDS_IN_HAND; cardCount++) {
		const cardIndex = Math.floor(Math.random() * deck.length);
		const selectedCard = deck.splice(cardIndex, 1)[0];
		hand.push(selectedCard);
	}

	/*
		Orders the hand from highest to lowest,
		which is easier for me checking the hand types later
	*/
	hand.sort((cardA, cardB) => cardB.rank - cardA.rank);
	return hand;
};

export default dealHand;