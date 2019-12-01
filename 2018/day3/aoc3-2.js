const NoOverlap = data => {
	const area = {};
	const claims = data
		.trim()
		.split('\n')
		.map(row => {
			let match = row
				.match(/#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)/)
				.slice(1, 6)
				.map(Number);
			const id = match[0];
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
			return { id, xOffset, yOffset, width, height };
		});

	for (let claim of claims) {
		let patch = new Set();

		for (let i = 0; i < claim.width; i++) {
			let x = claim.xOffset + i;

			for (let j = 0; j < claim.height; j++) {
				let y = claim.yOffset + j;
				patch.add(area[`${x},${y}`]);
			}
		}
		if (patch.size === 1 && patch.has(1)) {
			return claim.id;
		}
	}
};

module.exports = NoOverlap;
