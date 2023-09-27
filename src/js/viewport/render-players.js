import { HAND_TYPES } from '../cards/constants.js';

// Utility methods
const setSuitPTag = (color = 'black', content = '') => `
	<p class="suit ${color}">${content}</p>
`;
const getCardSymbolEntity = (suit) => {
	switch (suit) {
		case ('heart'): return setSuitPTag('red', '&hearts;');
		case ('diamond'): return setSuitPTag('red', '&diams;');
		case ('spade'): return setSuitPTag('black', '&spades;');
		case ('club'): return setSuitPTag('black', '&clubs;');
		default: return '';
	}
};
const getCardNumberSymbol = (rank) => {
	switch (rank) {
		case (14): return 'A';
		case (13): return 'K';
		case (12): return 'Q';
		case (11): return 'J';
		default: return rank;
	}
}
const renderCard = (card) => `<li class="card">
	${getCardSymbolEntity(card.suit)}
	<p class="rank">${getCardNumberSymbol(card.rank)}</p>
</li>`;



// Main export
const renderPlayers = (players = []) => {
	const gameboardEl = document.getElementById('gameboard');
	if (gameboardEl) {
		players.forEach((player, p) => {
			const playerName = player.name || `Player #${player.id}`;
			// Set player image file
			const dogImgNum = Math.floor(Math.random() * 7) + 1;
			const imgRef = player.id === 0 ? './dist/imgs/cat-paws.png' : `./dist/imgs/dog-paws-${dogImgNum}.png`;
			// Set human-friendly hand type name
			const isUnnamedHandType = player.handType === HAND_TYPES.UNNAMED().index;
			const prettyHandType = isUnnamedHandType ? 'Basic hand' : (
				Object.values(HAND_TYPES).find(val => val().index === player.handType)().prettyName
			);

			/* TODO: 
					- Refactor the format string to its own function
					- Update aria label to not give away hand while hidden
			*/
			gameboardEl.insertAdjacentHTML('beforeend', `
				<div
					class="player hiding-card"
					data-player="${player.id}"
					${p === 0 ? 'data-is-winner="true"' : ''}
					aria-label="The paws of ${playerName} jutting from the edge of the screen. ${playerName} is holding a ${prettyHandType}"
				>
					<ul class="hand">
						${player.hand.map(renderCard).join('')}
					</ul>
					<img class="paws" src="${imgRef}" aria-hidden="true" />
					<p data-hand-type="( ${prettyHandType} )">${playerName}</p>
				</div>
			`);
		});
	}
};
export default renderPlayers;