const calculateFuelRecursive = input => {
	const data = input.trim().split('\n');
	// If you care about performance, don't do 4 iterations for something that can be done in one
	const mass = data.map(x => parseInt(x, 10));
	const fuel = mass.map(x => Math.floor(x / 3) - 2);
	const fuelRecursive = fuel.map(x => x + calcFuelFuelCost(x));
	const totalFuel = fuelRecursive.reduce((acc, val) => acc + val, 0);
	return totalFuel;
};

function calcFuelFuelCost(fuel) {
	let fuelCost = Math.floor(fuel / 3) - 2;
	if (fuelCost < 0) {
		return 0;
	}
	return fuelCost + calcFuelFuelCost(fuelCost);
}

module.exports = calculateFuelRecursive;
