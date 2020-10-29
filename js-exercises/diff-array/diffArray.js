function diffArray(...arrays) {
  const m = new Map();
  const answerArray = [];

  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new Error(`Expected Array as argument, got ${typeof arr}`);
    }
    arr.forEach((item) => {
      if (m.has(item)) {
        m.set(item, m.get(item) + 1);
      } else {
        m.set(item, 1);
      }
    });
  }

  m.forEach((v, k) => {
    if (v === 1) {
      answerArray.push(k);
    }
  });

  return answerArray;
}

export {
  diffArray,
};
