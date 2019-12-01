class Worker {
	constructor(step) {
		this._step = step;
		this.timeleft = durations[step] || 0;
	}
	set step(step) {
		this._step = step;
		this.timeleft = durations[step] || 0;
	}
	get available() {
		return this.timeleft === 0;
	}
}

let durations = {};

const DurationOfParallelSteps = data => {
	let graph = {};
	data = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`;

	data = data
		.trim()
		.split('\n')
		.map(x => {
			return { step: x.slice(36, 37), req: x.slice(5, 6) };
		});

	const uniq = (value, index, self) => self.indexOf(value) === index;

	let steps = data.map(x => x.step);
	let requirements = data.map(x => x.req);
	let available = requirements.filter(x => !steps.includes(x)).filter(uniq).sort();

	let allSteps = [...available, ...steps.filter(uniq)].sort();
	allSteps.map((x, i) => durations[x] = 61 + i);

	let workers = [];
	for (let i = 0; i < 5; i++) {
		workers.push(new Worker(''));
	}

	data.forEach(x => {
		graph[x.step] == undefined ? (graph[x.step] = [x.req]) : graph[x.step].push(x.req);
	});

	let orderOfSteps = [];

	while (available.length) {
		let step = available[0];
		Object.keys(graph)
			.filter(x => !orderOfSteps.includes(x) && x !== step)
			.forEach(node => {
				graph[node] = graph[node].filter(req => req !== step);
				if (graph[node].length === 0 && !available.includes(node))
					available.push(node);
			});
		available = available.filter(x => x !== step).sort();
		orderOfSteps.push(step);
	}

	return orderOfSteps;
};

module.exports = DurationOfParallelSteps;
