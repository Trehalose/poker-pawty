import { HAND_TYPES } from '../cards/constants.js';

const renderWinnerAnnouncement = (player = {}) => {
	const uiEl = document.getElementById('ui');
	if (uiEl) {
		// Clear it
		uiEl.innerHTML = '';

		// Set up announcement as new content
		const isUnnamedHandType = player.handType === HAND_TYPES.UNNAMED().index;
		const winReason = isUnnamedHandType ? 'a higher card' : Object.values(HAND_TYPES).find(val => val().index === player.handType)().prettyName;
		uiEl.innerHTML = `<p id="winner-announcement">
			${player.name}<br />
			<small>won the game with a</small><br />
			<strong>${winReason}</strong>!
		</p>`
	}
};
export default renderWinnerAnnouncement;