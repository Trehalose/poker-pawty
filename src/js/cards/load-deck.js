
const loadDeck = () => {
	return [].concat(
		addSuitCards('heart'),
		addSuitCards('spade'),
		addSuitCards('diamond'),
		addSuitCards('club')
	);
};


/* Card format will look like so:
	{
		suit: 'heart',
		rank: 2	// 2-14, with 11-14 as the face cards
		prettyName: '2 of Hearts',
	}
*/
const addSuitCards = (suit) => {
	if (!suit) return;

	const suitmates = [];
	for (let i = 2; i <= 14; i++) {
		const cardDeets = {
			suit,
			rank: i
		};
		let prettyRankName;
		switch (i) {
			case (11):
				prettyRankName = 'Jack';
				break;
			case (12):
				prettyRankName = 'Queen';
				break;
			case (13):
				prettyRankName = 'King';
				break;
			case (14):
				prettyRankName = 'Ace';
				break;
			default:
				prettyRankName = i;
				break;
		}
		cardDeets.prettyName = `${prettyRankName} of ${suit.charAt(0).toUpperCase() + suit.slice(1)}s`
		suitmates.push(cardDeets);
	}
	return suitmates;
};


export default loadDeck;