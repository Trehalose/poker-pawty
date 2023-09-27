import askPlayerCount from './players/ask-player-count.js';
import dealHand from './cards/deal-hand.js';
import determineHandType from './cards/determine-hand-type.js';
import setPlayers from './players/set-players.js';
import sortForRoundWinner from './players/sort-round-winner.js';
import renderPlayers from './viewport/render-players.js';


// Ladies && gentlemen, let's start the game~
const playerCount = askPlayerCount();
// TODO: ASK PLAYER THEIR NAME. BE A FANCY-PANTS~
const players = setPlayers(playerCount);
players.forEach((player) => {
	player.hand = dealHand();
	player.handType = determineHandType(player.hand);
});
/* NOTE: 
		This is my lazy way to pin a winning player
		for this speed of a project, I think.
*/
players.sort(sortForRoundWinner);

// Render the "game"
renderPlayers(players);