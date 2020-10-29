function isEven(num) {
  return (!Number.isNaN(Number(num)) && num % 2 === 0);
}

const sumEvenArgs = (...args) => args.reduce((a, c) => (a + ((isEven(c)) ? c : 0)), 0);

export { sumEvenArgs };
