/* eslint-disable no-undef */
const code = require('./functions');

test('Day 1 - Part 1: runIntcode with input 1,0,0,0,99 should return [2,0,0,0,99]', () => {
	let input = '1,0,0,0,99';
	expect(code.runIntcode(input)).toEqual([2, 0, 0, 0, 99]);
});

test('Day 1 - Part 1: runIntcode with input 2,3,0,3,99 should return [2,3,0,6,99]', () => {
	let input = '2,3,0,3,99';
	expect(code.runIntcode(input)).toEqual([2, 3, 0, 6, 99]);
});

test('Day 1 - Part 1: runIntcode with input 2,4,4,5,99,0 should return [2,4,4,5,99,9801] ', () => {
	let input = '2,4,4,5,99,0';
	expect(code.runIntcode(input)).toEqual([2, 4, 4, 5, 99, 9801]);
});

test('Day 1 - Part 1: runIntcode with input 1,1,1,4,99,5,6,0,99 should return [30,1,1,4,2,5,6,0,99]', () => {
	let input = '1,1,1,4,99,5,6,0,99';
	expect(code.runIntcode(input)).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
});
