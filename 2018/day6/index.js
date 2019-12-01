const { performance } = require('perf_hooks');
const fetcher = require('../fetcher');
const f1 = require('./aoc6-1');
const f2 = require('./aoc6-2');

const day6 = async () => {
	var response = await fetcher('https://adventofcode.com/2018/day/6/input');
	var t0 = performance.now();
	var r1 = f1(response.data);
	var t1 = performance.now();
	var r2 = f2(response.data, 10000);
	var t2 = performance.now();
	console.log('========================= DAY 6 =========================');
	console.log('Largest area:', r1);
	console.log(`took: ${t1 - t0} ms`);
	console.log('Region containing locations which have a total distance to all given coordinates of less than 10 000:', r2);
	console.log(`took: ${t2 - t1} ms`);
};

module.exports = day6;
