function alternate(func) {
  let count = 0;
  return function () {
    count++;
    if (count % 2 === 1) {
      return func();
    } else return 0;
  };
}

function twice(func) {
  let count = 0;
  return function () {
    if (count < 2) {
      count++;
      return func();
    } else return 0;
  };
}
