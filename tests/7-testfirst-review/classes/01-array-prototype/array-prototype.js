/* eslint-disable no-unused-vars */
// Implementing maap (map)
Array.prototype.maap = function (callback) {
  const result = [];
  this.forEach((element, index, array) => {
    result.push(callback(element, index, array));
  });
  return result;
};

// Implementing fiilter (filter)
Array.prototype.fiilter = function (callback) {
  const result = [];
  this.forEach((element, index, array) => {
    if (callback(element, index, array)) {
      result.push(element);
    }
  });
  return result;
};

// Implementing reeduce (reduce)
Array.prototype.reeduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  this.slice(startIndex).forEach((currentValue) => {
    accumulator = callback(accumulator, currentValue);
  });

  return accumulator;
};
