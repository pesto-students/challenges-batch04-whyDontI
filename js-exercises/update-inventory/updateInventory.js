function updateInventory(arr1, arr2) {
  let ansArray = [];
  const m = new Map();
  const arr3 = arr1.concat(arr2);
  for (const [amount, name] of arr3) {
    if (m.has(name)) {
      m.set(name, m.get(name) + amount);
    } else {
      m.set(name, amount);
    }
  }

  const tempArray = [...m].sort((a, b) => {
    const nameA = (a[0].toUpperCase());
    const nameB = (b[0].toUpperCase());
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  ansArray = tempArray.map(([name, amount]) => [amount, name]);
  return ansArray;
}

export {
  updateInventory,
};
