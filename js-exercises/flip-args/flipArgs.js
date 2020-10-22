function flipArgs(func) {
  return function (...args) {
    const reverseArgs = [];

    for (let i = args.length - 1; i >= 0; i -= 1) {
      reverseArgs.push(args[i]);
    }
    return func(...reverseArgs);
  };
}

export {
  flipArgs,
};
