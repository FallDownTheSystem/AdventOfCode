const { performance } = require('perf_hooks');
const fetcher = require('../fetcher');
const f1 = require('./aoc6-1');
const f2 = require('./aoc6-2');

const day5 = async () => {
	var response = await fetcher('https://adventofcode.com/2018/day/6/input');
	var t0 = performance.now();
	var r1 = f1(response.data);
	var t1 = performance.now();
	// var r2 = f2(response.data);
	var t2 = performance.now();
	console.log('========================= DAY 6 =========================');
	console.log('Reduced polymer length:', r1);
	console.log(`took: ${t1 - t0} ms`);
	// console.log('Shortest polymer chain length with one polymer removed:', r2);
	console.log(`took: ${t2 - t1} ms`);
};

module.exports = day5;
