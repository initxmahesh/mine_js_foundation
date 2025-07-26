/* eslint-disable no-unused-vars */

const concatString = function () {
  let arg = Array.from(arguments);
  return arg.join("");
};

const yourFunctionRunner = function () {
  let result = "";
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]();
  }
  return result;
};

const makeAdder = function (num) {
  return function (arg1) {
    return arg1 + num;
  };
};

const once = (func) => {
  let notCalled = true;
  return () => {
    if (notCalled) {
      notCalled = false;
      return func();
    }
    return "the function has already been called...";
  };
};

const createObjectWithClosures = function () {
  let value = 0;
  return {
    oneIncrementer: function () {
      value += 1;
    },
    tensIncrementer: function () {
      value += 10;
    },
    getValue: function () {
      return value;
    },
    setValue: function (newValue) {
      value = newValue;
    },
  };
};

const dontSpillTheBeans = function (secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newsecret) {
      secret = newsecret;
    },
  };
};
