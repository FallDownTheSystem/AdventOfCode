class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Method
	distance(x, y) {
		return Math.abs(this.x - x) + Math.abs(this.y - y);
	}
}

const RegionLessThan10K = (data, maxdist) => {
	let points = data
		.trim()
		.split('\n')
		.map(x => {
			const coord = x.split(', ');
			return new Point(parseInt(coord[0]), parseInt(coord[1]));
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

	let region = 0;

	for (let x = smallestX; x < largestX; x++) {
		for (let y = smallestY; y < largestY; y++) {
			let sumOfDistances = points.reduce((acc, curr) => acc + curr.distance(x, y), 0);
			if (sumOfDistances < maxdist) {
				region++;
			}
		}
	}
	return region;
};

module.exports = RegionLessThan10K;
