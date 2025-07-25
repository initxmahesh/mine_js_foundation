/* eslint-disable no-unused-vars, no-throw-literal*/
/* eslint-disable no-unused-vars, no-throw-literal*/

function RPNCalculator() {
    this.numStack = [];
}

RPNCalculator.prototype.push = function (num) {
    this.numStack.push(num);
};

RPNCalculator.prototype.popCompute = function (operationFunc) {
    if (this.numStack.length < 2) {
        throw 'rpnCalculatorInstance is empty';
    }
    else {
        const num1 = this.numStack.pop();
        const num2 = this.numStack.pop();
        this.push(operationFunc(num1, num2));
    }
};

RPNCalculator.prototype.plus = function () {
    this.popCompute((first, second) => first + second);
};

RPNCalculator.prototype.minus = function () {
    this.popCompute((first, second) => second - first);
};

RPNCalculator.prototype.times = function () {
    this.popCompute((first, second) => first * second);
};

RPNCalculator.prototype.divide = function () {
    this.popCompute((first, second) => second / first);
};

RPNCalculator.prototype.value = function () {
    return this.numStack[this.numStack.length - 1];
};