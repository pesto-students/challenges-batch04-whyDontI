function deepCopyObject(inputObj) {
  let value;

  if (typeof inputObj !== 'object' || inputObj === null) {
    return inputObj;
  }

  const outputObj = Array.isArray(inputObj) ? [] : {};

  for (const key in inputObj) {
    if (Object.prototype.hasOwnProperty.call(inputObj, key)) {
      value = inputObj[key];

      outputObj[key] = deepCopyObject(value);
    }
  }

  return outputObj;
}

export { deepCopyObject };
