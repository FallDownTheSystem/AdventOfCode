/* eslint-disable no-undef */
const code = require('./functions');

const input1 = `R8,U5,L5,D3
U7,R6,D4,L4`;

const input2 = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`;

const input3 = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;

test(`Day 1 - Part 1: closestIntersection with input ${input1} should return 6`, () => {
	expect(code.closestIntersection(input1)).toBe(6);
});

test(`Day 1 - Part 1: closestIntersection with input ${input2} should return 159`, () => {
	expect(code.closestIntersection(input2)).toBe(159);
});

test(`Day 1 - Part 1: closestIntersection with input ${input3} should return 135`, () => {
	expect(code.closestIntersection(input3)).toBe(135);
});

test(`Day 1 - Part 2: leastSteps with input ${input1} should return 30`, () => {
	expect(code.leastSteps(input1)).toBe(30);
});

test(`Day 1 - Part 2: leastSteps with input ${input2} should return 610`, () => {
	expect(code.leastSteps(input2)).toBe(610);
});

test(`Day 1 - Part 2: leastSteps with input ${input3} should return 410`, () => {
	expect(code.leastSteps(input3)).toBe(410);
});
