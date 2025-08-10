function keyAdder() {
  let sum = 0;
  for (let key in this) {
    if (this.hasOwnProperty(key) && typeof this[key] === "number") {
      sum += this[key];
    }
  }
  return sum;
}
