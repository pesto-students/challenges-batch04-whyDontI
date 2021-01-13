function rangeIter(lb, ub) {
  if (lb === undefined || typeof lb !== 'number') {
    throw new TypeError(`${typeof lb} is not a number`, 'file.js', 10);
  }
  if (ub === undefined || typeof ub !== 'number') {
    throw new TypeError(`${typeof ub} is not a number`, 'file.js', 10);
  }

  if (ub < lb) return [];

  return {
    [Symbol.iterator]: function* gen() {
      let currentValue = lb;

      while (currentValue !== ub) {
        yield currentValue;
        currentValue += 1;
      }

      yield currentValue;
    },
  };
}

export { rangeIter };
