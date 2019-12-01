const commonLetters = data => {
	let list = data.trim().split('\n');
	for (var i = 0; i < list.length - 1; i++) {
		const curr = list[i].split('');
		for (var j = i + 1; j < list.length; j++) {
			const next = list[j].split('');
			let errors = 0;
			for (var idx in curr) {
				if (errors > 1) break;
				if (curr[idx] === next[idx]) continue;
				else errors++;
			}
			if (errors === 1) {
				return curr.filter((x, i) => curr[i] == next[i]).join('');
			}
		}
	}
};

module.exports = commonLetters;
