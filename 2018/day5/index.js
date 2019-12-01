const { performance } = require('perf_hooks');
const fetcher = require('../../fetcher');
const polymers = require('./aoc5-1');
const cleanpolymer = require('./aoc5-2');

const day5 = async () => {
	var response = await fetcher('https://adventofcode.com/2018/day/5/input');
	var t0 = performance.now();
	var f1 = polymers(response.data);
	var t1 = performance.now();
	var f2 = cleanpolymer(response.data);
	var t2 = performance.now();
	console.log('========================= DAY 5 =========================');
	console.log('Reduced polymer length:', f1);
	console.log(`took: ${t1 - t0} ms`);
	console.log('Shortest polymer chain length with one polymer removed:', f2);
	console.log(`took: ${t2 - t1} ms`);
};

module.exports = day5;
