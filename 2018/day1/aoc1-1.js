const getFrequency = data => {
	const list = data
		.trim()
		.split('\n')
		.map(x => parseInt(x, 10));

	const frequency = list.reduce((acc, val) => acc + val);
	return frequency;
};

module.exports = getFrequency;
