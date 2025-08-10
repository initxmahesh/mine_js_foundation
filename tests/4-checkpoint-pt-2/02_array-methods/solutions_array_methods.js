function useMapToUpperCase(str) {
  return str.split(" ").map((el) => {
    return el.toUpperCase();
  });
}

function useFilter(arr) {
  return arr.filter((ele) => {
    if (ele.includes("@")) return ele;
  });
}

function sumWithReduce(arr, start = 0) {
  return arr.reduce((acc, ele) => {
    acc += ele;
    return acc;
  }, start);
}

function filterEvensDoubleAndSum(arr) {
  return arr
    .filter((el) => {
      if (el % 2 === 0) return true;
    })
    .map((el) => {
      return el * 2;
    })
    .reduce((acc, el) => {
      return (acc += el);
    }, 0);
}
