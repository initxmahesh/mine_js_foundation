/* eslint-disable no-unused-vars, no-extend-native */
Array.prototype.doNotInclude = function (indices) {
  const excludeIndices = Array.isArray(indices) ? indices : [indices];
  return this.filter((_, index) => !excludeIndices.includes(index));
};
