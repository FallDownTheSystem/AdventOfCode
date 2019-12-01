const calculateFuel = input => {
	const data = input.trim().split('\n');
	// const mass = data.map(x => parseInt(x, 10));
	// const fuel = mass.map(x => Math.floor(x / 3) - 2);
	// Doing everything in a single iteration for performance reasons
	const totalFuel = data.reduce((acc, val) => acc + Math.floor(parseInt(val) / 3) - 2, 0); // floor would not work for negative numbers
	return totalFuel;
};

module.exports = calculateFuel;
