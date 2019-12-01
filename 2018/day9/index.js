const { performance } = require('perf_hooks');
const fetcher = require('../../fetcher');
const f1 = require('./aoc9-1');
const f2 = require('./aoc9-2');

const day9 = async () => {
	var response = await fetcher('https://adventofcode.com/2018/day/9/input');
	var t0 = performance.now();
	var r1 = f1(response.data);
	var t1 = performance.now();
	var r2 = f2(response.data);
	var t2 = performance.now();
	console.log('========================= DAY 9 =========================');
	console.log('F1:', r1);
	console.log(`took: ${t1 - t0} ms`);
	console.log('F2:', r2);
	console.log(`took: ${t2 - t1} ms`);
};

module.exports = day9;
