/* eslint-disable no-unused-vars, no-prototype-builtins */
/* eslint-disable no-unused-vars, no-prototype-builtins */
const soup = (phrase, bank) => {
  let phraseArr = phrase.split("");
  let isFalse = false;

  if (bank.length < phrase.length) {
    return false;
  }
  for (let i = 0; i < phrase.length; i++) {
    if (bank.includes(phraseArr[i])) {
      isFalse = true;
      continue;
    } else {
      isFalse = false;
      break;
    }
  }

  return isFalse;
};