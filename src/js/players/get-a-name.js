const names = [
	'Lick Jowlger',
	'Faux Paw',
	'Rex',
	'Clawblerone',
	'Chewed Paw',
	'Andy Warhowl',
	'Chewbarka',
	'Indiana Bones',
	'Boba Fetch',
	'Jabba the Mutt',
	'Dumbledog',
	'Mutt Damon',
	'Droolius Caesar',
	'Dog Gonnit',
	'Hot Diggity',
	'Wishbone',
	'Rin Tin Tin',
	'Lassie',
	'Snowwy',
	'Marmaduke',
	'Scoobert Doo'
];

const getRandomDoggoName = () => {
	const randomNameIndex = Math.floor(Math.random() * names.length);
	return names[randomNameIndex];
};
export default getRandomDoggoName;