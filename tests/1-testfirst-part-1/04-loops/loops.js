/* eslint-disable no-unused-vars */

const repeat = (str, number) => {
  let str1 = "";
  for (let i = 0; i < number; i++) {
    str1 += str;
  }
  return str1;
};

const sum = (arr) => {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const join = (arr1, strn = "") => {
  result = "";
  for (i = 0; i < arr1.length; i++) {
    result += arr1[i];
    if (i !== arr1.length - 1) {
      result += strn;
    }
  }
  return result;
};

const gridGenerator = (num) => {
  let str = "";
  if (num === 0) return str;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if ((i + j) % 2 === 0) {
        str += "#";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
};

const paramify = (obj) => {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(`${key}=${obj[key]}`);
    }
  }
  return join(keys.sort(), "&");
};

const paramifyObjectKeys = (obj1) => {
  let result = [];
  let key = Object.keys(obj1);
  for (let i = 0; i < key.length; i++) {
    result.push(`${key[i]}=${obj1[key[i]]}`);
  }
  return join(result.sort(), "&");
};

const sort = (arr2) => {
  let count = arr2.length;
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      if (arr2[i] > arr2[j]) {
        let temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
      }
    }
  }
  return arr2;
};
