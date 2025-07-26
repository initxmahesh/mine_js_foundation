/* eslint-disable no-unused-vars */

const indexAndValue = (arr) => {
  return arr.map((value, index) => {
    return { index, value };
  });
};

const capitalize = (strg) => strg.toUpperCase();
const swapCase = (strg) => {
  return strg
    .split(" ")
    .map((letter, index) => {
      if (index % 2 === 0) return capitalize(letter);
      return letter;
    })
    .join(" ");
};

const extensionSearch = (str, arr) => {
  return arr.filter((file) => file.includes(str));
};

const getPopulation = (array, countries) => {
  return array.reduce((current, country) => {
    if (countries.includes(country.name) || countries.length === 0) {
      return current + country.population;
    }
    return current;
  }, 0);
};

const priorityTodoDuration = (todoList) => {
  return todoList
    .filter((item) => item.priority === "high")
    .reduce((acc, item) => {
      return acc + item.duration;
    }, 0);
};

const mapReduce = (arr, func) => {
  return arr.reduce((acc, currentval) => {
    acc.push(func(currentval));
    return acc;
  }, []);
};

const inYourBudget = (price, arrval) => {
  return arrval.filter((item) => item.price < price).map((item) => item.item);
};

const filterReduce = (arr, func) => {
  return arr.reduce((acc, val) => {
    if (func(val)) acc.push(val);
    return acc;
  }, []);
};

const separateAndReturnNames = (array, search, num) => {
  return array
    .map((superheroes) => {
      const [firstName, lastName] = superheroes.name.split(" ");
      superheroes.firstName = firstName;
      superheroes.lastName = lastName;
      return superheroes;
    })
    .filter((superheroes) => superheroes[search].length <= num)
    .map((superheroes) => superheroes[search]);
};

const keyifyArrayOfObjects = (key, arr) => {
  return arr.reduce((accum, superheroObj) => {
    accum[superheroObj[key]] = superheroObj;
    return accum;
  }, {});
};

const powerLevelAverage = (arr) => {
  return Math.round(
    arr.reduce((accum, superheroObj) => {
      return accum + superheroObj.powerLevel;
    }, 0) / arr.length
  );
};
