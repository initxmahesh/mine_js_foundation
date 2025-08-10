function aQuarter(func) {
  let count = 0;
  return function (...args) {
    if (count < 3) {
      count++;
      return `something went wrong :/`;
    } else {
      count = 0;
      return func(...args);
    }
  };
}
