function duplicateLetters(letters) {
  const m = new Map();
  const lettersArray = letters.split('');
  lettersArray.forEach(l => {
    if (m.has(l)) {
      m.set(l, m.get(l) + 1);
    } else {
      m.set(l, 1);
    }
  });

  const maxDuplicates = Math.max(...m.values());
  return (maxDuplicates > 1) ? maxDuplicates : false;
}

export {
  duplicateLetters,
};
