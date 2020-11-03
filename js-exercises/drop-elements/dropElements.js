function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function dropElements(elements, predicate) {
  if (!Array.isArray(elements)) {
    throw new Error(`Expected first argument to be array, got ${typeof elements}`);
  }

  if (!isFunction(predicate)) {
    throw new Error(`Expected first argument to be function, got ${typeof predicate}`);
  }

  return elements.filter(predicate);
}

export { dropElements };
