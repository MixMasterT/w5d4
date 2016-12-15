class Clock {
  constructor() {
  // 1. Create a Date object.
    const ogTime = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = ogTime.getHours();
    this.minutes = ogTime.getMinutes();
    this.seconds = ogTime.getSeconds();

    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    global.setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds++;
    if(this.seconds > 59) {
      this.seconds = 0;
      this.minutes++;
    }

    if(this.minutes > 59) {
      this.minutes = 0;
      this.hours++;
    }

    if(this.hours > 12) {
      this.hours -= 12;
    }

    // 2. Call printTime.
    this.printTime();
    //global.setTimeout(this._tick.bind(this), 1000);
  }
}

const clock = new Clock();
