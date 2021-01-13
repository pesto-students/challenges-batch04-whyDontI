function getDistance(p1, p2, q1, q2) {
  const first = Math.abs(p1 - q1) ** 2;
  const second = Math.abs(p2 - q2) ** 2;
  return Math.floor(Math.sqrt(Math.abs(first + second)));
}

function getCoordinates(number, string) {
  const index = string.split('').findIndex((num) => num === number);
  return [
    Math.floor(index / 3),
    Math.floor(index % 3),
  ];
}

function getTotalTime(passcode, keypadStr) {
  let timeTaken = 0;
  for (let i = 0; i < passcode.length - 1; i += 1) {
    const p = getCoordinates(passcode[i], keypadStr);
    const q = getCoordinates(passcode[i + 1], keypadStr);
    timeTaken += getDistance(p[0], p[1], q[0], q[1]);
  }
  return timeTaken;
}

function validator(func) {
  return (passcode, keypadStr) => {
    if (typeof passcode !== 'string') {
      return TypeError(`Passcode should be a string, got ${typeof passcode} `);
    }

    if (typeof keypadStr !== 'string') {
      return TypeError(`KeypadStr should be a string, got ${typeof keypadStr} `);
    }
    return func.call(this, passcode, keypadStr);
  };
}

const validated = validator(getTotalTime);
export { validated as getTotalTime };
