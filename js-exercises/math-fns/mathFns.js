// You can't use the function from the `Math` module.
function sqrt(num) {
  if (num === 0 || num === 1) return num;

  let result = 0;

  for (let i = 1; i <= ((num / 2) + 1); i += 1) {
    if ((i * i) === num) { // perfect square
      result = i;
      break;
    } if ((i * i) > num) { // return approx value
      result = i - 0.5;
      break;
    }
  }

  return result;
}

function power(a, b) {
  return (a ** b);
}

function round(num) {
  if (num % 1 < 0.5) {
    return num - (num % 1);
  }
  return num + (1 - (num % 1));
}

// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};
