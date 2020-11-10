import { allSettled } from './allSettled';

describe('allSettled', () => {
  test('The function should return a Promise', () => {
    expect(allSettled() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise(resolve => resolve(1));
    const p2 = 2;
    const p3 = new Promise((resolve, reject) => {
      try {
        if (false) {
          resolve('This is not possible');
        }
        throw Error(3);
      } catch (error) {
        reject(error);
      }
    });
    return expect(allSettled([p1, p2, p3])).resolves.toEqual([1, 2, new Error(3)]);
  });
});
