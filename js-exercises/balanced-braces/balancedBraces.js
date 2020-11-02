function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true;
  }
  return false;
}

function balancedBraces(str) {
  if (!isString(str)) {
    throw new Error(`Expected argument String, got ${typeof str}`);
  }

  const stack = [];

  for (const s of str) {
    if (s === '{' || s === '[' || s === '(') {
      stack.push(s);
    }

    if (s === '}' && stack[stack.length - 1] !== '{') {
      return false;
    } if (s === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    }

    if (s === ')' && stack[stack.length - 1] !== '(') {
      return false;
    } if (s === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    }

    if (s === ']' && stack[stack.length - 1] !== '[') {
      return false;
    } if (s === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  }

  return false;
}

export {
  balancedBraces,
};
