/* eslint-disable no-unused-vars */
function accessor(obj) {
  return function (key, value) {
    if (arguments.length === 2) {
      obj[key] = value;
    }
    return obj[key];
  };
}
