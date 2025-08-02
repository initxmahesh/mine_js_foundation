/* eslint-disable no-unused-vars */
function mapQuest(arr) {
  let map = {
    N: "S",
    S: "N",
    E: "W",
    W: "E",
  };
  return arr.reduce((dir, curDir) => {
    if (map[curDir] === dir[dir.length - 1]) {
      dir.pop();
    } else {
      dir.push(curDir);
    }
    return dir;
  }, []);
}
