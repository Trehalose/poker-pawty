
const setSuitSpanTag = (color = 'black', suitEntityCode = '') => `
	<span class="${color}">&${suitEntityCode};</span>
`;

const renderPlayButton = () => {
	const uiEl = document.getElementById('ui');
	if (uiEl) {
		uiEl.innerHTML = `
			<button id="btn-play" class="btn">
				${setSuitSpanTag('black', 'clubs')}
				${setSuitSpanTag('red', 'hearts')}
				PLAY
				${setSuitSpanTag('red', 'diams')}
				${setSuitSpanTag('black', 'spades')}
			</button>
		`;
		return document.getElementById('btn-play');
	}
	return;
};
export default renderPlayButton;