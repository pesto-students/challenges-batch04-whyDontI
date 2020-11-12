function throttle(fn, timeInMs) {
  let time = null;
  return (...args) => {
    if (time) { return; }
    time = setTimeout(() => {
      clearTimeout(time);
      return fn.apply(this, args);
    }, timeInMs);
  };
}

export { throttle };
