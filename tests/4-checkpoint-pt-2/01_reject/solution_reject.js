function reject(arr, func) {
  let result = [];
  for (let ele of arr) {
    if (!func(ele)) {
      result.push(ele);
    }
  }
  return result;
}
