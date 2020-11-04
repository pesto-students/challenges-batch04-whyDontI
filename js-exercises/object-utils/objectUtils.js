// your implementation

function map(cb) {
  const newObj = (Array.isArray(this)) ? [] : {};
  const inputObj = this;
  for (const item in inputObj) {
    const pair = cb([item, inputObj[item]]);
    newObj[pair[0]] = pair[1];
  }

  return newObj;
}

function filter(cb) {
  const newObj = (Array.isArray(this)) ? [] : {};
  const inputObj = this;
  for (const item in inputObj) {
    const result = cb([item, inputObj[item]]);
    if (result) {
      newObj[item] = inputObj[item];
    }
  }

  return newObj;
}

function invert() {
  const newObj = (Array.isArray(this)) ? [] : {};
  const inputObj = this;

  for (const i in inputObj) {
    newObj[inputObj[i]] = i;
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
    if (!cb([item, inputArray[item]])) {
      return false;
    }
  }

  return true;
}

function some(cb) {
  const inputArray = this;
  for (const item in inputArray) {
    if (cb([item, inputArray[item]])) {
      return true;
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
