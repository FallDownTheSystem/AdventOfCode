/* eslint-disable no-undef */
const overlap = require('./aoc3-1');
const claimid = require('./aoc3-2');

test('Day 3 - Part 1: Overlapped area should be 4', () => {
	let input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;
	expect(overlap(input)).toBe(4);
});

test('Day 3 - Part 2: Claim ID with no overlap should be 3', () => {
	let input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;
	expect(claimid(input)).toBe(3);
});
