function interleave(...args) {
  const maxLength = Math.max(...args.map((str) => str.length));
  let result = "";
  for (let i = 0; i < maxLength; i++) {
    args.forEach((str) => {
      if (str[i]) {
        result += str[i];
      }
    });
  }
  return result;
}
