const MAX_COUNT = 5;
const askPlayerCount = (error = '') => {
	const errorMsg = error ? `${error}\n\n` : '';
	const playerCountStr = prompt(`${errorMsg}How many additional players would you like to join you?\n- 1 is the minimum. (default)\n- ${MAX_COUNT} is the maximum.`);
	const playerCountNum = Number(playerCountStr || 1);

	if (
		typeof playerCountNum === 'number' &&
		playerCountNum >= 1 &&
		playerCountNum <= MAX_COUNT
	) {
		return playerCountNum;
	} else {
		return askPlayerCount(`Nice try buddy, we need a number between 1-${MAX_COUNT} to continue. Try again!`);
	}
};

export default askPlayerCount;