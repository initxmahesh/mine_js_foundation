/* eslint-disable no-unused-vars */
function rotater(str) {
  let forward = true;
  return function (num) {
    if (num === 0) {
      return str;
    }
    if (num === str.length) {
      forward = !forward;
      return str;
    }
    if (forward) {
      return str.slice(num) + str.slice(0, num);
    } else {
      return str.slice(-num) + str.slice(0, -num);
    }
  };
}
