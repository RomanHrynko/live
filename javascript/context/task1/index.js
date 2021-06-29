'use strict';

const timer = {
  secondsPassed: 0,
  minutesPassed: 0,
  intervalId: null,
  startTimer() {
    // +++
    // console.log('CONTEXT of startTimer IS', this);

    // input: func, ms;
    // output: num;

    // lose context caase #1
    this.intervalId = setInterval(() => {
      // console.log('CONTEXT of callback IS', this);

      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minutesPassed += 1;
      }
    }, 1000);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    //
    // console.log(this);
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

console.log(timer);
timer.startTimer();

// console.log(this);

// lose context caase #1
// const func = timer.startTimer
// func()

// example callback lose context
// console.log(
//   [1, 5, 10, 19].filter(
//     function (el) {
//       console.log(this);
//       return el > 5;
//     }.bind(timer),
//   ),
// );
