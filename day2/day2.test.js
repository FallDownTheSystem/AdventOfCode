/* eslint-disable no-undef */
const checksum = require('./aoc2-1');
const commonLetters = require('./aoc2-2');

// Day One - Part One Tests
test('Day 2 - Part 1: Checksum should return 12', () => {
	let input = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;
	expect(checksum(input)).toBe(12);
});

test('Day 2 - Part 2: getFrequency should return 3 when input is +1, +1, +1', () => {
	let input = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;
	expect(commonLetters(input)).toBe('fgij');
});
