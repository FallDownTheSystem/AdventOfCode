const { performance } = require('perf_hooks');
const fetcher = require('../fetcher');
const SleepyGuard = require('./aoc4-1');
const FrequentGuard = require('./aoc4-2');

const day2 = async () => {
	var response = await fetcher('https://adventofcode.com/2018/day/4/input');
	var t0 = performance.now();
	var f1 = SleepyGuard(response.data);
	var t1 = performance.now();
	var f2 = FrequentGuard(response.data);
	var t2 = performance.now();
	console.log('========================= DAY 4 =========================');
	console.log('ID of guard multiplied with sleepiest minute:', f1);
	console.log('ID of guard multiplied with the minute most frequently slept on:', f2);
	console.log(`Performance to find ID of guard multiplied with sleepiest minute: ${t1 - t0} ms`);
	console.log(`Performance to find ID of guard multiplied with the minute most frequently slept on: ${t2 - t1} ms`);
};

module.exports = day2;
