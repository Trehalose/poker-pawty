import loadDeck from './cards/load-deck.js';
import askPlayerCount from './players/ask-player-count.js';



// Ladies && gentlemen, let's start the game~
const deck = loadDeck();
const playerCount = askPlayerCount();
console.log('playerCount: ', playerCount);