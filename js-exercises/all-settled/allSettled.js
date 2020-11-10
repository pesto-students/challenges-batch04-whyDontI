const allSettled = (promises) => {
  const resultArray = [];
  let promiseCount = 0;
  return new Promise((resolve) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((result) => {
          resultArray[i] = result;
          promiseCount += 1;
          if (promiseCount === promises.length) {
            resolve(resultArray);
          }
        })
        .catch((error) => {
          resultArray[i] = error;
          promiseCount += 1;
          if (promiseCount === promises.length) {
            resolve(resultArray);
          }
        });
    });
  });
};
export { allSettled };
