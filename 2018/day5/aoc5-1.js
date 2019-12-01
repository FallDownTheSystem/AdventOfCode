const PolymerLength = data => {
	let polymerArray = data.trim().split('');
	for (let i = 0; i < polymerArray.length - 1; i++) {
		if (polymerArray[i].reverseCapitalize() == polymerArray[i + 1]) {
			polymerArray.splice(i, 2);
			i -= 2;
			if (i < 0) i = -1;
		}
	}
	return polymerArray.length;
};

// This function only works for this specific use case, where the character set is already known, do not attempt to use elsewhere
String.prototype.reverseCapitalize = function() {
	var char = this.charCodeAt(0);
	if (char >= 97 && char <= 122) {
		return String.fromCharCode(char - 32);
	} else {
		return String.fromCharCode(char + 32);
	}
};

module.exports = PolymerLength;
