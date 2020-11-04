import {
  map, filter, invert, merge, all, some,
} from './objectUtils';

describe('Object Utils', () => {
  test('Map and Filter', () => {
    const obj = {
      chocolates: 5,
      drinks: 10,
      beer: 5,
    };
    const callbackFN = ([key, value]) => [key.toUpperCase(), value * 2];
    let modifiedObj = map.call(obj, callbackFN);
    expect(modifiedObj).toEqual({ CHOCOLATES: 10, DRINKS: 20, BEER: 10 });
    const filterCBFunc = ([key]) => key === 'chocolates';
    modifiedObj = filter.call(obj, filterCBFunc);
    expect(modifiedObj).toEqual({ chocolates: 5 });
  });
  test('Invert', () => {
    const generalObj = {
      name: 'Jane',
      age: 25,
      foodie: true,
    };
    const invertedObject = invert.call(generalObj);
    expect(invertedObject).toEqual({
      Jane: 'name',
      25: 'age',
      true: 'foodie',
    });
  });
  test('Merge', () => {
    const object1 = {
      name1: 'John',
      age1: 25,
      foodie: true,
    };
    const object2 = {
      name2: 'Jane',
      age2: 25,
      foodie: true,
    };
    const mergedObj = merge(object1, object2);
    expect(mergedObj).toEqual({
      name1: 'John',
      age1: 25,
      foodie: true,
      name2: 'Jane',
      age2: 25,
    });
  });
  test('All', () => {
    const testObject = {
      Person1: {
        name: 'John',
        age: 25,
      },
      Person2: {
        name: 'Jane',
        age: 25,
      },
    };
    const allPersonsOfSameAge = ([key, value]) => key && value.age === 25;
    expect(all.call(testObject, allPersonsOfSameAge)).toBeTruthy();
  });
  test('Some', () => {
    const testObject = {
      Person1: {
        name: 'John',
        age: 25,
      },
      Person2: {
        name: 'Jane',
        age: 25,
      },
      Person3: {
        name: 'Janitor',
        age: 29,
      },
    };
    const somePersonsOfSameAge = ([key, value]) => key && value.age === 25;
    expect(some.call(testObject, somePersonsOfSameAge)).toBeTruthy();
  });
});
