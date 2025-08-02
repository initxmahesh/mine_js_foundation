/* eslint-disable no-unused-vars */

function multipleMaps(array1, array2) {
  debugger;
  return array1.map((ele) => {
    debugger;
    for (let i = 0; i < array2.length; i++) {
      debugger;
      if (ele in array2[i]) {
        return array2[i][ele];
      }
    }
  });
}

multipleMaps(["a", "b", "c", "d"], [{ a: 0, b: 1 }, { c: 2 }, { d: 3 }]);
