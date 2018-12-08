const { performance } = require('perf_hooks');
const fetcher = require('../fetcher');
const f1 = require('./aoc7-1');
const f2 = require('./aoc7-2');

const day7 = async () => {
	var response = await fetcher('https://adventofcode.com/2018/day/7/input');
	var t0 = performance.now();
	var r1 = f1(response.data);
	var t1 = performance.now();
	var r2 = f2(response.data);
	var t2 = performance.now();
	console.log('========================= DAY 7 =========================');
	console.log('F1:', r1);
	console.log(`took: ${t1 - t0} ms`);
	console.log('F2:', r2);
	console.log(`took: ${t2 - t1} ms`);
};

module.exports = day7;
