/* eslint-disable no-unused-vars */
function vowelsCount(str) {
    let lowerCap = str.toLowerCase();
    let map = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        total: 0
    }
    for (let char of lowerCap) {
        if (char === 'a') map.a++
        if (char === 'e') map.e++
        if (char === 'i') map.i++
        if (char === 'o') map.o++
        if (char === 'u') map.u++
    }
    let vals = Object.values(map)
    map.total = vals.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return map;
}


// function vowelsCount(str) {
//     let strlower = str.toLowerCase();
//     let map = {
//         a: 0,
//         e: 0,
//         i: 0,
//         o: 0,
//         u:0
//     }
//     for (let char of str) {
//         if (char === 'a') map.a++;
//         if (char === "e") map.e++;
//         if (char === "i") map.i++;
//          if (char === "o") map.o++;
//           if (char === "u") map.u++;
//     }

//     let values = Object.values(map);
//     map.total = values.reduce(())




// }