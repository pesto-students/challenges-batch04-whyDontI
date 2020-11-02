// You can change the `args`

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function isObject(variable) {
  return Object.prototype.toString.call(variable) === '[object Object]';
}

function bind(func, obj) {
  if (!isFunction(func)) {
    throw new Error(`Expected first argument was Function, got ${typeof func}`);
  }

  if (!isObject(obj)) {
    throw new Error(`Expected second argument was Object, got ${typeof obj}`);
  }

  return (...args) => func.apply(obj, args);
}

module.exports = { bind };
