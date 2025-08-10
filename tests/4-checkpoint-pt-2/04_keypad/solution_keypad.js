function presses(str) {
  let obj = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
    10: "1",
    11: "2",
    12: "3",
    13: "4",
    14: "5",
    15: "6",
    16: "7",
    17: "8",
    18: "9",
    19: "0",
  };
  let sum = 0;
  let caps = str.toUpperCase();
  if (caps.length === 1) {
    for (let key in obj) {
      if (obj[key].includes(caps)) {
        return obj[key].indexOf(caps) + 1;
      }
    }
  }

  for (let ele of caps) {
    if (ele === " ") {
      sum += 1;
    }
    for (key in obj) {
      if (obj[key].includes(ele)) {
        sum += obj[key].indexOf(ele) + 1;
      }
    }
  }
  return sum;
}
