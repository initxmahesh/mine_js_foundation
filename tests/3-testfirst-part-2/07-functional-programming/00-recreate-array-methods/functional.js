/* eslint-disable no-unused-vars */

function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function doubler(arg) {
  return arg * 2;
}

function map(array, func) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(func([array[i]]));
  }
  return result;
}

const filter = function (array, func) {
  let filter = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      filter.push(array[i]);
    }
  }
  return filter;
};

const includes = function (collection, value) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
  } else {
    for (let key in collection) {
      if (collection[key] === value) {
        return true;
      }
    }
  }
  return false;
};

const countWords = function (value, strg) {
  let result = strg.split(" ");
  let count = value;
  for (let i = 0; i < result.length; i++) {
    if (result[i]) {
      count++;
    }
  }
  return count;
};

const reduce = function (array, start, func) {
  let acc = start;
  for (let i = 0; i < array.length; i++) {
    acc = func(acc, array[i]);
  }
  return acc;
};

const sum = function (array) {
  return reduce(array, 0, (a, b) => a + b);
};

// const every = function (array, func) {
//     return reduce(array, true, (a,b) => a && !!func(b))
// }

const every = (array, checkerFunc) => {
  const everyIterator = (currentVal, nextVal) =>
    currentVal && checkerFunc(nextVal);
  return reduce(array, true, everyIterator);
};

const some = (array, checkerFunc) => {
  const everyIterator = (currentVal, nextVal) =>
    currentVal || checkerFunc(nextVal);
  return reduce(array, false, everyIterator);
};
