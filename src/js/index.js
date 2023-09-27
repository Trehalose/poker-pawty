import askPlayerCount from './players/ask-player-count.js';
import setPlayers from './players/set-players.js';
import dealHand from './cards/deal-hand.js';
import determineHandType from './cards/determine-hand-type.js';


// Ladies && gentlemen, let's start the game~
const playerCount = askPlayerCount();
// TODO: ASK PLAYER THEIR NAME. BE A FANCY-PANTS~
const players = setPlayers(playerCount);
players.forEach((player) => {
	player.hand = dealHand();
	player.handType = determineHandType(player.hand);
});
console.log('players: ', players);