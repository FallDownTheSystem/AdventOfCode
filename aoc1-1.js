const axios = require('axios');

(async () => {
	const response = await axios.get('https://adventofcode.com/2018/day/1/input', {
		headers: { cookie: 'session=53616c7465645f5f878bce7cbafc079272082885eed84d4cf76c958fb60405b2d67b874363f078af1a9209337fdc02e6' }
	});
	const list = response.data
		.split('\n')
		.map(x => parseInt(x, 10))
		.filter(x => !isNaN(x));

	const data = list.reduce((acc, val) => acc + val);
	console.log(data);
})();
