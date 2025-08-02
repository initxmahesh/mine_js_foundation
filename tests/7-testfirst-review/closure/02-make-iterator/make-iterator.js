/* eslint-disable no-unused-vars */

function makeIterator(array = []) {
  let count = 0;
  return {
    getNext: function () {
      if (count >= array.length) {
        return {
          value: undefined,
          done: true,
        };
      }
      const val = array[count];
      count++;
      return {
        value: val,
        done: false,
      };
    },
    getIndex: function () {
      return count;
    },
  };
}
