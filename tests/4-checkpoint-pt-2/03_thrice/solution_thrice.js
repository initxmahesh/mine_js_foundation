function thrice(func) {
  let count = 0;
  return function () {
    while (count < 3) {
      count++;
      return func();
    }
  };
}
