import loadDeck from './cards/load-deck.js';
import askPlayerCount from './players/ask-player-count.js';
import setPlayers from './players/set-players.js';


// Ladies && gentlemen, let's start the game~
const deck = loadDeck();
const playerCount = askPlayerCount();
// TODO: ASK PLAYER THEIR NAME. BE A FANCY-PANTS~
const players = setPlayers(playerCount);
console.log('players: ', players);