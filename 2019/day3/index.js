const { performance } = require('perf_hooks');
const fetcher = require('../../fetcher');
const code = require('./functions');

const day3 = async () => {
	var response = await fetcher('https://adventofcode.com/2019/day/3/input');
	var data = response.data;
	var t0 = performance.now();
	var dist = code.closestIntersection(data, 12, 2);
	var t1 = performance.now();
	var steps = code.leastSteps(data);
	var t2 = performance.now();
	console.log('========================= DAY 3 =========================');
	console.log(`Manhattan distance: ${dist}`);
	console.log(`Took: ${t1 - t0} ms`);
	console.log(`Least steps: ${steps}`);
	console.log(`Took: ${t2 - t1} ms`);
};

module.exports = day3;
