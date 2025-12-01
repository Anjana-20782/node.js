// countdown.js
const EventEmitter = require('events');
const emitter = new EventEmitter();

function startCountdown() {
  const numbers = [3, 2, 1];

  // run each count with a 1-second gap
  numbers.forEach((num, i) => {
    setTimeout(() => {
      console.log(num);
      // when last number printed, emit the event after a tiny delay
      if (i === numbers.length - 1) {
        // small delay to show separation, optional
        setTimeout(() => emitter.emit('launch:ready'), 200);
      }
    },i * 1000); // 0ms, 1000ms, 2000ms
  });
}

// listener
emitter.on('launch:ready', () => {
  console.log('Launch protocol approved');
});

// start
startCountdown();
