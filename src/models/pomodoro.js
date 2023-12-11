export default class Pomodoro {
	constructor (totalDuration) {
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
		console.log(`Menit ke ${Math.floor(this.totalDuration / 60)} menit ${this.totalDuration % 60} detik`);
		this.totalDuration--

		if (this.totalDuration <= this.currentDuration) {
			this.stop();
			console.log('Done')
		}
	}

	stop() {
		clearInterval(this.IntervalId);
	}
}