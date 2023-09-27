import askPlayerCount from './players/ask-player-count.js';
import dealHand from './cards/deal-hand.js';
import determineHandType from './cards/determine-hand-type.js';
import displayCards from './viewport/display-cards.js';
import setPlayers from './players/set-players.js';
import sortForRoundWinner from './players/sort-round-winner.js';
import renderPlayButton from './viewport/render-play-button';
import renderPlayers from './viewport/render-players.js';
import renderWinnerAnnouncement from './viewport/render-winner-announcement.js';

// NOTE: Keeping this here for now
const announceWinner = () => {
	displayCards();
	renderWinnerAnnouncement(players[0]);
};

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

// Render the "game" viewport
renderPlayers(players);
// Set up the only thing that you can really interact with
const playBtnEl = renderPlayButton();
if (playBtnEl) { playBtnEl.addEventListener('click', announceWinner); }