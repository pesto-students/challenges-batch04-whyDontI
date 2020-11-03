const isNumber = value => !Number.isNaN(Number(value));

function chunkArrayInGroups(array, chunkSize) {
  if (!Array.isArray(array)) {
    throw new Error(`Expected array as first argument, got ${typeof array}`);
  }

  if (!isNumber(chunkSize)) {
    throw new Error(`Expected number as second argument, got ${typeof chunkSize}`);
  }

  const answerArray = [];
  const start = 0;

  while (array.length) {
    answerArray.push(array.splice(start, chunkSize));
  }

  return answerArray;
}

export {
  chunkArrayInGroups,
};
