function debounce(fn, timeInMs) {
  let inDebounce;
  return (...args) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      fn(...args);
    }, timeInMs);
  };
}

export { debounce };
