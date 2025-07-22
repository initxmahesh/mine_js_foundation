/* eslint-disable no-unused-vars */
const createCalculator = () => {
  return {
    total: 0,
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    value() {
      return this.total;
    },
    clear() {
      this.total = 0;
    },
  };
};

const addSquareMethod = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].square = function () {
      return this.total * this.total;
    };
  }
  return array;
};

const createHumanCalculator = () => {
  let instance = Object.create(createCalculator());
  instance.__proto__.total = -10;
  instance.__proto__.clear = function () {
    this.total = -10;
  };
  return instance;
};
