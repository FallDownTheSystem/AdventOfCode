const { performance } = require('perf_hooks');
const fetcher = require('../../fetcher');
const overlap = require('./aoc3-1');
const noOverlap = require('./aoc3-2');

const day3 = async () => {
	var response = await fetcher('https://adventofcode.com/2018/day/3/input');
	var t0 = performance.now();
	var overlappedArea = overlap(response.data);
	var t1 = performance.now();
	var claimId = noOverlap(response.data);
	var t2 = performance.now();
	console.log('========================= DAY 3 =========================');
	console.log('Overlapped area:', overlappedArea);
	console.log(`Took: ${t1 - t0} ms`);
	console.log('Claim id with no overlap', claimId);
	console.log(`Took: ${t2 - t1} ms`);
};

module.exports = day3;
