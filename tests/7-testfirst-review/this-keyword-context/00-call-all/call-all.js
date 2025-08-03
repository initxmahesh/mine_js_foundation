/* eslint-disable no-unused-vars */
function callAll(obj, func) {
  return func.map(function (fn) {
    return fn.call(obj);
  });
}
