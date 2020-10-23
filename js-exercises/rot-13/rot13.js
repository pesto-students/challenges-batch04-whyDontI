function rot13(str) {
  const shiftDistance = 13;
  let newString = '';

  for (const c of str) {
    const charCode = c.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      newString += String.fromCharCode((((charCode - 65 + shiftDistance) % 26) + 65));
    } else {
      newString += c;
    }
  }

  return newString;
}

export {
  rot13,
};
