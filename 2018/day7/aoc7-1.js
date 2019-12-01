const OrderOfSteps = data => {
	let graph = {};
	data = data
		.trim()
		.split('\n')
		.map(x => { return { step: x.slice(36, 37), req: x.slice(5, 6) }; });

	const uniq = (value, index, self) => self.indexOf(value) === index;

	let steps = data.map(x => x.step);
	let requirements = data.map(x => x.req);
	let available = requirements.filter(x => !steps.includes(x)).filter(uniq).sort();

	data.forEach(x => {
		graph[x.step] == undefined ? graph[x.step] = [x.req] : graph[x.step].push(x.req);
	});

	let orderOfSteps = [];

	while (available.length) {
		let step = available[0];
		Object.keys(graph).filter(x => !orderOfSteps.includes(x) && x !== step).forEach(node => {
			graph[node] = graph[node].filter(req => req !== step);
			if (graph[node].length === 0) available.push(node);
		});
		available = available.filter(x => x !== step).sort();
		orderOfSteps.push(step);
	}

	return orderOfSteps.join('');
};

module.exports = OrderOfSteps;
