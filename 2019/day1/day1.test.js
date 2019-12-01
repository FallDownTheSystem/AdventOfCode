/* eslint-disable no-undef */
const calculateFuel = require('./aoc1-1');
const calculateFuelRecursive = require('./aoc1-2');

test('Day 1 - Part 1: calculateFuel should return 2 when input is 12', () => {
	let input = `12`;
	expect(calculateFuel(input)).toBe(2);
});

test('Day 1 - Part 1: calculateFuel should return 2 when input is 14', () => {
	let input = `14`;
	expect(calculateFuel(input)).toBe(2);
});

test('Day 1 - Part 1: calculateFuel should return 654 when input is 1969', () => {
	let input = `1969`;
	expect(calculateFuel(input)).toBe(654);
});

test('Day 1 - Part 1: calculateFuel should return 33583 when input is 100756', () => {
	let input = `100756`;
	expect(calculateFuel(input)).toBe(33583);
});

test('Day 1 - Part 2: calculateFuelRecursive should return 2 when input is 14', () => {
	let input = `14`;
	expect(calculateFuelRecursive(input)).toBe(2);
});

test('Day 1 - Part 2: calculateFuelRecursive should return 966 when input is 1969', () => {
	let input = `1969`;
	expect(calculateFuelRecursive(input)).toBe(966);
});

test('Day 1 - Part 2: calculatcalculateFuelRecursiveeFuel should return 50346 when input is 100756', () => {
	let input = `100756`;
	expect(calculateFuelRecursive(input)).toBe(50346);
});
