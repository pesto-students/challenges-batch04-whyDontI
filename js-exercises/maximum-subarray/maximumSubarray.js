function getMaximumSubarray(array) {
  if (!Array.isArray(array)) {
    throw new Error(`Expected argument to be an array, got ${typeof array}`);
  }

  let maxSum = -Infinity;
  let sum = 0;
  let maxSubArrayStart = 0;
  let maxSubArrayEnd = (array.length) ? array.length - 1 : array.length;

  let currentSubArrayStart = 0;

  array.forEach((number, index) => {
    sum += number;

    if (maxSum <= sum) {
      maxSum = sum;
      maxSubArrayStart = currentSubArrayStart;
      maxSubArrayEnd = index;
    }

    if (sum < 0) {
      sum = 0;
      currentSubArrayStart = index + 1;
    }
  });

  return array.slice(maxSubArrayStart, maxSubArrayEnd + 1);
}

export { getMaximumSubarray };
