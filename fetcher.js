const axios = require('axios');

const getInput = url => {
	return axios.get(url, {
		headers: { cookie: 'session=53616c7465645f5f878bce7cbafc079272082885eed84d4cf76c958fb60405b2d67b874363f078af1a9209337fdc02e6' }
	});
};

module.exports = getInput;
