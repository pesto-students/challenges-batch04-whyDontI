import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
  test('debounce should not run even once', () => {
    const func = jest.fn();
    const debounceFunction = debounce(func, 1000);
    debounceFunction();
    debounceFunction();
    expect(func).toHaveBeenCalledTimes(0);
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
