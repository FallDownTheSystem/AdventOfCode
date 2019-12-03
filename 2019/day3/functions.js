mapX = {
	R: 1,
	L: -1,
	D: 0,
	U: 0,
};

mapY = {
	R: 0,
	L: 0,
	D: 1,
	U: -1,
};
/**
 * @param {string} input - Wire direction / distances
 */
const closestIntersection = input => {
	const wires = input
		.trim()
		.split('\n')
		.map(x =>
			x.split(',').map(y => ({
				x: mapX[y.substring(0, 1)],
				y: mapY[y.substring(0, 1)],
				dist: parseInt(y.substring(1)),
			}))
		);

	let panel = {};
	for (const i in wires) {
		let curX = 0;
		let curY = 0;
		const wire = wires[i];
		for (const vec of wire) {
			for (let idx = 0; idx < vec.dist; idx++) {
				curX += vec.x;
				curY += vec.y;
				let index = `${curX},${curY}`;
				if (!!panel[index] && panel[index] !== i) {
					panel[index] = 'x';
				} else {
					panel[index] = i;
				}
			}
		}
	}
	var distances = Object.entries(panel)
		.filter(x => x[1] === 'x')
		.map(x => Math.abs(parseInt(x[0].split(',')[0])) + Math.abs(parseInt(x[0].split(',')[1])));
	return Math.min(...distances);
};

/**
 * @param {string} input - Wire direction / distances
 */
const leastSteps = input => {
	const wires = input
		.trim()
		.split('\n')
		.map(x =>
			x.split(',').map(y => ({
				x: mapX[y.substring(0, 1)],
				y: mapY[y.substring(0, 1)],
				dist: parseInt(y.substring(1)),
			}))
		);

	let panel = {};
	let stepsPanel = {};
	for (const i in wires) {
		let curX = 0;
		let curY = 0;
		let stepCounter = 0;
		const wire = wires[i];
		for (const vec of wire) {
			for (let idx = 0; idx < vec.dist; idx++) {
				stepCounter += 1;
				curX += vec.x;
				curY += vec.y;
				let index = `${curX},${curY}`;

				if (!stepsPanel[`${index},${i}`]) {
					stepsPanel[`${index},${i}`] = stepCounter;
				}

				if (!!panel[index] && panel[index] !== i) {
					panel[index] = 'x';
				} else {
					panel[index] = i;
				}
			}
		}
	}
	var stepsAtIntersections = Object.entries(panel)
		.filter(x => x[1] === 'x')
		.map(x => stepsPanel[`${x[0]},${0}`] + stepsPanel[`${x[0]},${1}`]);

	return Math.min(...stepsAtIntersections);
};

module.exports = { closestIntersection, leastSteps };
