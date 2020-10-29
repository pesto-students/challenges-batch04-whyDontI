function removeFalsyValues(array) {
  if (!Array.isArray(array)) {
    throw new Error(`Expected argument is Array, got ${typeof array}`);
  }
  return array.filter((item) => (item));
}

export {
  removeFalsyValues,
};
