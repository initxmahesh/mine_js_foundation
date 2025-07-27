/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
class RPNCalculator {
  constructor() {
    this.stack = [];
  }

  push(num) {
    this.stack.push(num);
  }

  operation(compute) {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    } else {
      const a = this.stack.pop();
      const b = this.stack.pop();
      this.push(compute(a, b));
    }
  }
  plus() {
    this.operation((a, b) => a + b);
  }
  minus() {
    this.operation((a, b) => b - a);
  }
  times() {
    this.operation((a, b) => a * b);
  }
  divide() {
    this.operation((a, b) => b / a);
  }
  value() {
    return this.stack[this.stack.length - 1];
  }
}
