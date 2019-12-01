const { performance } = require('perf_hooks');
const fetcher = require('../../fetcher');
const calculateFuelCost = require('./aoc1-1');
const calculateFuelFuelCost = require('./aoc1-2');

const day1 = async () => {
	var response = await fetcher('https://adventofcode.com/2019/day/1/input');
	var data = response.data;
	var t0 = performance.now();
	var f = calculateFuelCost(data);
	var t1 = performance.now();
	var rf = calculateFuelFuelCost(data);
	var t2 = performance.now();
	console.log('========================= DAY 1 =========================');
	console.log('Required fuel:', f);
	console.log(`Took: ${t1 - t0} ms`);
	console.log('Required fuel (now with extra fuel!):', rf);
	console.log(`Took: ${t2 - t1} ms`);
};

module.exports = day1;
