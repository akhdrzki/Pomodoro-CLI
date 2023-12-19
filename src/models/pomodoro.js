export class Pomodoro {
	constructor(totalDuration) {
		this.totalDuration = totalDuration;
		this.currentDuration = 0;
	}

	start() {
		this.IntervalId = setInterval(() => {
			this.tick();
		}, 1000)
	}

	tick() {
		console.clear();
		console.log(`${Math.floor(this.totalDuration / 60)} minute ${this.totalDuration % 60} second`);
		this.totalDuration--

		if (this.totalDuration < this.currentDuration) {
			this.stop();
			console.clear();
			console.log('Done');

		}
	}

	stop() {
		clearInterval(this.IntervalId);
	}
}

// converting minute into second
export const minuteToSec = (minute) => {
  let second = minute * 60;
  return second;
}







