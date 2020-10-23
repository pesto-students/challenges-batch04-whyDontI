function sumOddNumbersLessThanNum(array, num) {
  return array.reduce((acc, elem) => (((elem < num) && (elem % 2 !== 0)) ? (acc + elem) : acc));
}

function fib(n) {
  const table = [0, 1, 1];
  let i = 2;
  while (i <= n) {
    table[i] = table[i - 1] + table[i - 2];
    i += 1;
  }

  return table;
}

function sumFibs(num) {
  const table = fib(num);
  return sumOddNumbersLessThanNum(table, num);
}

function cacheFunction(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (!cache.has(key)) {
      const result = func(...args);
      cache.set(key, result);
    }

    return cache.get(key);
  };
}

export { sumFibs, cacheFunction };
