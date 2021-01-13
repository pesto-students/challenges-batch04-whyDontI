function rangeIter(lb, ub) {
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

function validateRangeIter(func) {
  return (lb, ub) => {
    if (lb === undefined || typeof lb !== 'number') {
      throw new TypeError(`${typeof lb} is not a number`);
    }
    if (ub === undefined || typeof ub !== 'number') {
      throw new TypeError(`${typeof ub} is not a number`);
    }

    if (ub < lb) return [];
    return func.call(this, lb, ub);
  };
}

const validatedRangeIter = validateRangeIter(rangeIter);

export { validatedRangeIter as rangeIter };
