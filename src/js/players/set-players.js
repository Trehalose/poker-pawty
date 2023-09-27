import { DEFAULT_PLAYER_PROPERTIES } from './constants.js';
import getRandomDoggoName from './get-a-name.js';

/* Player format will look like so:
	{
		id: #,
		hand: [],
		handType: undefined
	}
*/
const setPlayers = (opponentCount = 1, preferredName = 'You') => {
	// The user for this application
	const players = [];
	players.push({
		id: 0,
		name: preferredName,
		...DEFAULT_PLAYER_PROPERTIES()
	});

	// The opponent player bots
	for(let i = 0; i < opponentCount; i++) {
		players.push({
			id: i + 1,
			name: getRandomDoggoName(),
			...DEFAULT_PLAYER_PROPERTIES()
		});
	}

	return players;
};

export default setPlayers;