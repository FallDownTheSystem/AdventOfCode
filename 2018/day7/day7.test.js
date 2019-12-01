/* eslint-disable no-undef */
const f1 = require('./aoc7-1');
const f2 = require('./aoc7-2');

test('Day 7 - Part 1: _ should return _', () => {
	let input = true;
	expect(f1(input)).toBe(true);
});

test('Day 7 - Part 2: Region from where distance to all points is less than 10K should return 16', () => {
	let input = true;
	expect(f2(input)).toBe(true);
});
