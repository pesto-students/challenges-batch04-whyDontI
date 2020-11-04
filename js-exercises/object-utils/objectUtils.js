// your implementation

function map(cb) {
  const newObj = (Array.isArray(this)) ? [] : {};
  const inputObj = this;
  for (const item in inputObj) {
    if (Object.prototype.hasOwnProperty.call(inputObj, item)) {
      const [key, value] = cb([item, inputObj[item]]);
      newObj[key] = value;
    }
  }

  return newObj;
}

function filter(cb) {
  const newObj = (Array.isArray(this)) ? [] : {};
  const inputObj = this;
  for (const item in inputObj) {
    if (Object.prototype.hasOwnProperty.call(inputObj, item)) {
      const result = cb([item, inputObj[item]]);
      if (result) {
        newObj[item] = inputObj[item];
      }
    }
  }

  return newObj;
}

function invert() {
  const newObj = (Array.isArray(this)) ? [] : {};
  const inputObj = this;

  for (const i in inputObj) {
    if (Object.prototype.hasOwnProperty.call(inputObj, i)) {
      newObj[inputObj[i]] = i;
    }
  }

  return newObj;
}

function merge(...args) {
  const newObj = {};

  for (const arg of args) {
    Object.assign(newObj, arg);
  }

  return newObj;
}

function all(cb) {
  const inputArray = this;
  for (const item in inputArray) {
    if (Object.prototype.hasOwnProperty.call(inputArray, item)) {
      if (!cb([item, inputArray[item]])) {
        return false;
      }
    }
  }

  return true;
}

function some(cb) {
  const inputArray = this;
  for (const item in inputArray) {
    if (Object.prototype.hasOwnProperty.call(inputArray, item)) {
      if (cb([item, inputArray[item]])) {
        return true;
      }
    }
  }

  return false;
}

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
