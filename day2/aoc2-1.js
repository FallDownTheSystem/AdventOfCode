let threeLetters = 0;
let twoLetters = 0;
const boxChecksum = data => {
	data.split('\n').forEach(x => {
		const charray = [];
		x.split('').forEach(y => {
			if (charray[y] == null) charray[y] = 0;
			charray[y] += 1;
		});
		let threeFound = false;
		let twoFound = false;
		for (var i in charray) {
			if (!twoFound && charray[i] == 2) {
				twoLetters++;
				twoFound = true;
			} else if (!threeFound && charray[i] == 3) {
				threeLetters++;
				threeFound = true;
			}
		}
	});
	return twoLetters * threeLetters;
};

module.exports = boxChecksum;
