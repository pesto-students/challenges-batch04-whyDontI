function curry(func, obj) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(obj, args);
    }
    return (...args2) => curried.apply(this, args.concat(args2));
  };
}

export {
  curry,
};
