const hasValuesFromArray = (set, arr) => {
  const hasVal = arr.map((elem) => set.has(elem));

  if (hasVal.includes(false)) {
    return false;
  }
  return true;
};

export default hasValuesFromArray;
