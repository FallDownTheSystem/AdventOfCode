const { performance } = require('perf_hooks');
const fetcher = require('../../fetcher');
const getFrequency = require('./aoc1-1');
const getRepeatedFrequency = require('./aoc1-2');

const day1 = async () => {
	var response = await fetcher('https://adventofcode.com/2019/day/1/input');
	var t0 = performance.now();
	var f = getFrequency(response.data);
	var t1 = performance.now();
	var rf = getRepeatedFrequency(response.data);
	var t2 = performance.now();
	console.log('========================= DAY 1 =========================');
	console.log('Frequency:', f);
	console.log(`Took: ${t1 - t0} ms`);
	console.log('First repeated frequency:', rf);
	console.log(`Took: ${t2 - t1} ms`);
};

module.exports = day1;
