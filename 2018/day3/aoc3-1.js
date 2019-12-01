const overlap = data => {
	const area = {};
	data
		.trim()
		.split('\n')
		.forEach(row => {
			let match = row
				.match(/#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)/)
				.slice(1, 6)
				.map(Number);
			const xOffset = match[1];
			const yOffset = match[2];
			const width = match[3];
			const height = match[4];

			for (let i = 0; i < width; i++) {
				let x = xOffset + i;
				for (let j = 0; j < height; j++) {
					let y = yOffset + j;
					area[`${x},${y}`] = area[`${x},${y}`] !== undefined ? area[`${x},${y}`] + 1 : 1;
				}
			}
		});
	return Object.values(area).filter(x => x > 1).length;
};

module.exports = overlap;
