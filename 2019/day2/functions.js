const ADD = 1;
const MUL = 2;
const HALT = 99;

class CPU {
	/**
	 * @param {Array<number>} memory - Memory array
	 */
	constructor(memory) {
		this.memory = memory;
		this.ip = 0;
	}

	viewMemory() {
		let memoryString = '';
		this.memory.forEach((x, i) => {
			if (i % 4 == 0) {
				memoryString += `${i}:\t`;
			}
			memoryString += `${x.toString().padStart(8, ' ')}  `;
			if ((i + 1) % 4 === 0) {
				memoryString += '\n';
			}
		});
		return memoryString;
	}

	fetch() {
		const instruction = this.memory[this.ip];
		this.ip += 1;
		return instruction;
	}

	execute(instruction) {
		switch (instruction) {
			// Add two values from memory together and move it memory
			case ADD: {
				const a = this.fetch();
				const b = this.fetch();
				const address = this.fetch();
				this.memory[address] = this.memory[a] + this.memory[b];
				return;
			}

			// Multiply two values from memory together and move it to memory
			case MUL: {
				const a = this.fetch();
				const b = this.fetch();
				const address = this.fetch();
				this.memory[address] = this.memory[a] * this.memory[b];
				return;
			}

			// Halt and catch fire
			case HALT: {
				return -1;
			}
		}
	}

	step() {
		const instruction = this.fetch();
		return this.execute(instruction);
	}
}

/**
 * @param {string} input - Initial memory
 * @param {boolean} hcf - Add halting instructions
 */
const runIntcode = (input, noun, verb) => {
	const memory = input
		.trim()
		.split(',')
		.map(x => parseInt(x));

	memory[1] = noun;
	memory[2] = verb;
	const cpu = new CPU(memory);
	let running = true;
	while (running) {
		running = cpu.step() !== -1;
	}
	return cpu;
};

/**
 * @param {string} input - Initial memory
 */
const findNounAndVerb = input => {
	res = { noun: -1, verb: -1 };
	loop1: for (const i of Array(100).keys()) {
		loop2: for (const j of Array(100).keys()) {
			cpu = runIntcode(input, i, j);
			if (cpu.memory[0] === 19690720) {
				res.noun = i;
				res.verb = j;
				break loop1;
			}
		}
	}
	return res;
};

module.exports = { runIntcode, findNounAndVerb };
