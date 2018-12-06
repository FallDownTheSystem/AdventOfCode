const LargestArea = data => {
	let coords = data
		.trim()
		.split('\n')
		.map(x => {
			const coord = x.split(', ');
			return { x: parseInt(coord[0]), y: parseInt(coord[1]) };
		});
	// Function to get distance
	// Eliminate points with no other points left, right, above or below (keep track of the edges)
	// Go through list of candidates, how to get area?
	console.log(coords);
	return 0;
};

module.exports = LargestArea;
