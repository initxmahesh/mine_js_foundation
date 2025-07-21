/* eslint-disable no-unused-vars */
const setPropsOnObj = (obj) => {
  obj.x = 7;
  obj.y = 8;
  obj.onePlus = (arg) => ++arg;
};

const setPropsOnArr = (obj1) => {
  obj1.hello = () => "Hello!";
  obj1.full = "stack";
  obj1[0] = 5;
  obj1.twoTimes = (arg1) => arg1 * 2;
};

const setPropsOnFunc = (obj2) => {
  obj2.year = "20??";
  obj2.divideByTwo = (arg2) => 3;
};

const shallowCopy = (arg3, arg4) =>
  Array.isArray(arg3) && Array.isArray(arg4)
    ? [...arg3, ...arg4]
    : { ...arg3, ...arg4 };
