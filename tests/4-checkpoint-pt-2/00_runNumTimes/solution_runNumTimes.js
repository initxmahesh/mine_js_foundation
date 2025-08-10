function runNumTimes(func, num) {
    let res;
    for (let i = 0; i < num; i++){
        res += func()
    }
    return res;
}