// write your own test cases
import { flipArgs } from './flipArgs';

function testFlipFunc() {
  return ([...arguments]);
}

describe.only('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('should return reversed arguments', () => {
    const flipped = flipArgs(testFlipFunc);

    let result = flipped();
    expect(result).toEqual([]);

    result = flipped('a', 'b', 'c', 'd');
    expect(result).toEqual(['d', 'c', 'b', 'a']);
  });
});
