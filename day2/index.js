const { performance } = require('perf_hooks');
const fetcher = require('../fetcher');
const boxChecksum = require('./aoc2-1');
const commonLetters = require('./aoc2-2');

const day2 = async () => {
	var response = await fetcher('https://adventofcode.com/2018/day/2/input');
	var t0 = performance.now();
	var checksum = boxChecksum(response.data);
	var t1 = performance.now();
	var letters = commonLetters(response.data);
	var t2 = performance.now();
	console.log('========================= DAY 2 =========================');
	console.log('Checksum:', checksum);
	console.log('Common letters:', letters);
	console.log(`Performance to get Checksum of box IDs: ${t1 - t0} ms`);
	console.log(`Performance to get common letters in checksums: ${t2 - t1} ms`);
};

module.exports = day2;
