/* eslint-disable no-undef */
const getFrequency = require('./aoc1-1');
const getRepeatedFrequency = require('./aoc1-2');

// Day One - Part One Tests
test('Day 1 - Part 1: getFrequency should return 3 when input is +1, -2, +3, +1', () => {
	let input = `+1
-2
+3
+1`;
	expect(getFrequency(input)).toBe(3);
});

test('Day 1 - Part 1: getFrequency should return 3 when input is +1, +1, +1', () => {
	let input = `+1
+1
+1`;
	expect(getFrequency(input)).toBe(3);
});

test('Day 1 - Part 1: getFrequency should return 0 when input is +1, +1, -2', () => {
	let input = `+1
+1
-2`;
	expect(getFrequency(input)).toBe(0);
});

test('Day 1 - Part 1: getFrequency should return -6 when input is -1, -2, -3', () => {
	let input = `-1
-2
-3`;
	expect(getFrequency(input)).toBe(-6);
});

// Day One - Part Two Tests
test('Day 1 - Part 2: getRepeatedFrequency should return 2 when input is +1, -2, +3, +1', () => {
	let input = `+1
-2
+3
+1`;
	expect(getRepeatedFrequency(input)).toBe(2);
});

test('Day 1 - Part 2: getRepeatedFrequency should return 0 when input is +1, -1', () => {
	let input = `+1
-1`;
	expect(getRepeatedFrequency(input)).toBe(0);
});

test('Day 1 - Part 2: getRepeatedFrequency should return 10 when input is +3, +3, +4, -2, -4', () => {
	let input = `+3
+3
+4
-2
-4`;
	expect(getRepeatedFrequency(input)).toBe(10);
});

test('Day 1 - Part 2: getRepeatedFrequency should return 5 when input is -6, +3, +8, +5, -6', () => {
	let input = `-6
+3
+8
+5
-6`;
	expect(getRepeatedFrequency(input)).toBe(5);
});

test('Day 1 - Part 2: getRepeatedFrequency should return 14 when input is +7, +7, -2, -7, -4', () => {
	let input = `+7
+7
-2
-7
-4`;
	expect(getRepeatedFrequency(input)).toBe(14);
});
