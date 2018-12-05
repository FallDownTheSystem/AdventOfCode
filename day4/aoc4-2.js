const SleepiestGuard = data => {
	let guardMinuteMap = new Map();
	let id = 0;
	let sleep = 0;
	let wake = 0;

	data.trim()
		.split('\n')
		.sort()
		.forEach(shift => {
			let match = shift.match(/\[(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})\] (\w+) #?(\d+\d+|\w+)/);
			let minute = parseInt(match[5]);
			const action = match[6];

			if (action === 'falls') {
				sleep = minute;
			} else if (action === 'wakes') {
				wake = minute;

				for (let m = sleep; m < wake; m++) {
					guardMinuteMap.get(id)[m]++;
				}
			} else if (action === 'Guard') {
				id = match[7];

				if (guardMinuteMap.get(id) == undefined) {
					guardMinuteMap.set(id, new Array(60).fill(0));
				}
			}
		});

	const max = (a, b) => (a < b ? b : a);
	const guardIds = [...guardMinuteMap.keys()];

	let maxSlept = guardIds.map(id => guardMinuteMap.get(id).reduce(max)).reduce(max);

	let sleepyGuardId = guardIds.find(id => Object.keys(guardMinuteMap.get(id)).find(m => guardMinuteMap.get(id)[m] === maxSlept));
	let minutes = guardMinuteMap.get(sleepyGuardId);

	let longestSleepTime = minutes.reduce(max);

	let mostSleptMinute = Object.keys(minutes).find(m => minutes[m] === longestSleepTime);

	return sleepyGuardId * mostSleptMinute;
};

module.exports = SleepiestGuard;
