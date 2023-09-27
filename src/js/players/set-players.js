import { DEFAULT_PLAYER_PROPERTIES } from './constants.js';

/* Player format will look like so:
	{
		id: #,
		hand: [],
		handType: undefined
	}
*/
const setPlayers = (opponentCount = 1) => {
	// The user for this application
	const players = [];
	// TODO: PASS IN A USER REQUESTED NAME
	players.push({ id: 0, ...DEFAULT_PLAYER_PROPERTIES() });

	// The opponent player bots
	for(let i = 0; i < opponentCount; i++) {
		// TODO: GENERATE FUN RANDOM NAMES
		players.push({ id: i + 1, ...DEFAULT_PLAYER_PROPERTIES() });
	}

	return players;
};

export default setPlayers;