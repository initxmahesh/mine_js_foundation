/* eslint-disable no-unused-vars */
function pigify(str) {
  let arr = str.split(" ");
  let vowel = "aeiou";

  return arr
    .reduce((acc, curr) => {
      let indexOfVowel = 0;
      for (let i = 0; i < curr.length; i++) {
        const letter = curr[i];
        if (vowel.includes(letter)) {
          if (letter !== "u" || (letter === "u" && curr[i - 1] !== "q")) {
            indexOfVowel = i;
            break;
          }
        }
      }
      const startNoConsonants = curr.slice(indexOfVowel);
      const consonantsForEnd = curr.slice(0, indexOfVowel);
      acc = [...acc, `${startNoConsonants}${consonantsForEnd}ay`];
      return acc;
    }, [])
    .join(" ");
}
