import { throttle } from './throttle';

jest.useFakeTimers();

describe('Throttle', () => {
  test('Should return a function', () => {
    expect(typeof throttle(() => { }, 500)).toEqual('function');
  });

  test('Should call function only once', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    throttledFunc();
    jest.advanceTimersByTime(3000);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
