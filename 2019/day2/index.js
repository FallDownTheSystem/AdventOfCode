const { performance } = require('perf_hooks');
const fetcher = require('../../fetcher');
const code = require('./functions');

const day2 = async () => {
	var response = await fetcher('https://adventofcode.com/2019/day/2/input');
	var data = response.data;
	var t0 = performance.now();
	var cpu = code.runIntcode(data, 12, 2);
	var t1 = performance.now();
	var res2 = code.findNounAndVerb(data);
	var t2 = performance.now();
	console.log('========================= DAY 2 =========================');
	console.log('Memory:');
	console.log(cpu.viewMemory());
	console.log(`Took: ${t1 - t0} ms`);
	console.log(
		`Noun: ${res2['noun']}\nVerb: ${res2['verb']}\n100 * noun + verb = ${100 * res2['noun'] + res2['verb']}`
	);
	console.log(`Took: ${t2 - t1} ms`);
};

module.exports = day2;
