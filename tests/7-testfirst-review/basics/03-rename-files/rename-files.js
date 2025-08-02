/* eslint-disable no-unused-vars */
function renameFiles(file) {
  let result = [];
  let map = {};

  for (let ele of file) {
    if (!map[ele]) {
      result.push(ele);
      map[ele] = 1;
    } else {
      let rname = `${ele}(${map[ele]})`;

      while (map[rname]) {
        map[ele]++;
        rname = `${ele}(${map[ele]})`;
      }

      result.push(rname);
      map[rname] = 1;
      map[ele]++;
    }
  }

  return result;
}
