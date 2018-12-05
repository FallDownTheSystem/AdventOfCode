/* eslint-disable no-undef */
const checksum = require('./aoc2-1');
const commonLetters = require('./aoc2-2');

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

test('Day 2 - Part 2: Common letters should return fgij', () => {
	let input = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;
	expect(commonLetters(input)).toBe('fgij');
});
