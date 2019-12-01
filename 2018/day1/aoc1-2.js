const getRepeatedFrequency = data => {
	let set = new Set();
	const list = data
		.trim()
		.split('\n')
		.map(x => parseInt(x, 10));

	let frequency = 0;
	let repeated;
	let found = false;

	while (!found) {
		// Use spread to make sure list is not modified
		frequency = [...list].reduce((acc, curr, i, arr) => {
			set.add(acc);
			if (set.has(acc + curr)) {
				repeated = acc + curr;
				found = true;
				arr.splice(1); // Modify the original array to forcefully break out of the reduce
			}
			return (acc += curr);
		}, frequency);
	}
	return repeated;
};

module.exports = getRepeatedFrequency;
