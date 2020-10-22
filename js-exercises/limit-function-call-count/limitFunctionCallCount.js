const limitFunctionCallCount = (callback, n) => {
  let limit = n;
  return function (...args) {
    if (!limit) return null;
    limit -= 1;
    return callback(...args);
  };
};

export {
  limitFunctionCallCount,
};
