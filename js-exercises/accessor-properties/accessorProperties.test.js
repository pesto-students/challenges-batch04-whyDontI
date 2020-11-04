import { accessorProperties } from './accessorProperties';

describe('Accessor Properties', () => {
  test('Binary', () => {
    const obj = accessorProperties();
    obj.number = 10;
    expect(obj.number).toBe('1010');

    obj.number = 100;
    expect(obj.number).toBe('1100100');

    obj.number = 256;
    expect(obj.number).toBe('100000000');

    obj.number = 13;
    expect(obj.number).toBe('1101');
  });
});
