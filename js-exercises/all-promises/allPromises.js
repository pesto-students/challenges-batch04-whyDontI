const allPromises = (promises) => {
  if (!Array.isArray(promises) || !promises.length) return Promise.resolve([]);

  const promiseArray = [];
  let promiseCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((result) => {
          promiseArray[i] = result;
          promiseCount += 1;
          if (promiseCount === promises.length) {
            resolve(promiseArray);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

export { allPromises };
