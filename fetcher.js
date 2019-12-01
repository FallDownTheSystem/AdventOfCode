const axios = require('axios');

const getInput = url => {
	return axios.get(url, {
		headers: {
			cookie:
				'session=53616c7465645f5f97d18bf0b0b1a7552c54fd2300f894cc7f86f43f5fa7369b1610045767ae025d89cba2782d268923',
		},
	});
};

module.exports = getInput;
