/* eslint-disable no-unused-vars */
const multiplicationTable = (row, column) => {
    result = [];
    for (let i = 0; i < row; i++){
        result[i] = []
        for (let j = 0; j < column; j++){
            result[i][j] =(j+1)*(i+1)
        }
    }
    return result;
}