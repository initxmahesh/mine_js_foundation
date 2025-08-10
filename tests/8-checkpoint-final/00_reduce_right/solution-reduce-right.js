function reduceRight(arr, start, func) {
    let accumulator = start
    for (let i = arr.length - 1; i >= 0; i--){
        accumulator = func(accumulator, arr[i])
    }
    return accumulator;
}