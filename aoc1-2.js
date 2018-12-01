const axios = require('axios');
const { performance } = require('perf_hooks');

let set = new Set();

(async () => {
	const response = await axios.get('https://adventofcode.com/2018/day/1/input', {
		headers: { cookie: 'session=53616c7465645f5f878bce7cbafc079272082885eed84d4cf76c958fb60405b2d67b874363f078af1a9209337fdc02e6' }
	});
	var t0 = performance.now();

	const list = response.data
		.trim()
		.split('\n')
		.map(x => parseInt(x, 10));

	let found = false;
	let frequency = 0;

	while (!found) {
		// Use spread to make sure list is not modified
		frequency = [...list].reduce((acc, curr, i, arr) => {
			set.add(acc);
			if (set.has(acc + curr)) {
				console.log(`First repeated frequency: ${acc + curr}`);
				found = true;
				arr.splice(1); // Modify the original array to forcefully break out of the reduce
			}
			return (acc += curr);
		}, frequency);
	}
	var t1 = performance.now();
	console.log(`Performance: ${t1 - t0} ms`);
})();
