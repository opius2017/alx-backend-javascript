const setFromArray = (arr) => {
  const newSet = new Set();
  arr.forEach((elem) => newSet.add(elem));
  return newSet;
};

export default setFromArray;
