/* eslint-disable no-undef */
const f1 = require('./aoc6-1');
const f2 = require('./aoc6-2');

test('Day 6 - Part 1: Largest area should return 17', () => {
	let input = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`;
	expect(f1(input)).toBe(17);
});

test('Day 6 - Part 2: Region from where distance to all points is less than 10K should return 16', () => {
	let input = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`;
	expect(f2(input, 32)).toBe(16);
});
