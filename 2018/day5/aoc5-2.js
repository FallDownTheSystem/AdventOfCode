const CleanPolymerLength = data => {
	let polymerArray = data.trim().split('');
	let distinctPolymers = polymerArray.filter(distinct);
	distinctPolymers = distinctPolymers.filter(x => x.toLowerCase() === x);

	let polymerLengths = distinctPolymers.map(x => {
		let polymers = polymerArray.filter(y => y !== x && y !== x.reverseCapitalize());
		for (let i = 0; i < polymers.length - 1; i++) {
			if (polymers[i].reverseCapitalize() == polymers[i + 1]) {
				polymers.splice(i, 2);
				i -= 2;
				if (i < 0) i = -1;
			}
		}
		return polymers.length;
	});

	const min = (a, b) => (a > b ? b : a);
	return polymerLengths.reduce(min);
};

function distinct(value, index, self) {
	return self.indexOf(value) === index;
}

// This function only works for this specific use case, where the character set is already known, do not attempt to use elsewhere
String.prototype.reverseCapitalize = function() {
	var char = this.charCodeAt(0);
	if (char >= 97 && char <= 122) {
		return String.fromCharCode(char - 32);
	} else {
		return String.fromCharCode(char + 32);
	}
};

module.exports = CleanPolymerLength;
