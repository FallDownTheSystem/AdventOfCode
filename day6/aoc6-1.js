class Point {
	constructor(x, y, id) {
		this.x = x;
		this.y = y;
		this.id = id;
	}
	distance(x, y) {
		return Math.abs(this.x - x) + Math.abs(this.y - y);
	}
}

const LargestArea = data => {
	let points = data
		.trim()
		.split('\n')
		.map((x, i) => {
			const coord = x.split(', ');
			return new Point(parseInt(coord[0]), parseInt(coord[1]), i);
		});

	let smallestX = points[0].x;
	let smallestY = points[0].y;
	let largestX = points[0].x;
	let largestY = points[0].y;

	points.forEach(pt => {
		if (pt.x < smallestX) smallestX = pt.x;
		if (pt.x > largestX) largestX = pt.x;
		if (pt.y < smallestY) smallestY = pt.y;
		if (pt.y > largestY) largestY = pt.y;
	});

	let lengths = [];

	for (let x = smallestX; x < largestX; x++) {
		for (let y = smallestY; y < largestY; y++) {
			let closest = points.reduce((prev, curr) => prev.distance(x, y) < curr.distance(x, y) ? prev : curr);

			if (points.filter(pt => pt.distance(x, y) == closest.distance(x, y)).length == 1) {
				lengths[closest.id] == undefined ? lengths[closest.id] = 1 : lengths[closest.id]++;
			}
		}
	}

	return lengths.reduce((a, b) => a > b ? a : b);
};

module.exports = LargestArea;
