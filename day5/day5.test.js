/* eslint-disable no-undef */
const ReducedPolymer = require('./aoc5-1');
const ShortestPolymer = require('./aoc5-2');

test('Day 5 - Part 1: Reducing the polymer should return 10', () => {
	expect(ReducedPolymer('dabAcCaCBAcCcaDA')).toBe(10);
});

test('Day 5 - Part 2: Reducing the polymer chain with one polymer removed should return 4', () => {
	expect(ShortestPolymer('dabAcCaCBAcCcaDA')).toBe(4);
});
