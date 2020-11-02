function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function isObject(variable) {
  return Object.prototype.toString.call(variable) === '[object Object]';
}

function curry(func, obj) {
  if (!isFunction(func)) {
    throw new Error(`Expected first argument was Function, got ${typeof func}`);
  }

  if (!isObject(obj)) {
    throw new Error(`Expected second argument was Object, got ${typeof obj}`);
  }
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
