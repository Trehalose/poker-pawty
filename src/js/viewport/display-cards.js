const displayCards = () => {
	const gameboardEl = document.getElementById('gameboard');
	if (gameboardEl) {
		// removes hiding class from card elements in player hand
		const playerEls = gameboardEl.querySelectorAll('.player');
		playerEls.forEach(playerEl => {
			if (playerEl.classList.contains('hiding-card')) {
				playerEl.classList.remove('hiding-card')
			}
		});
	}
};
export default displayCards;