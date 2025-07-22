/* eslint-disable no-unused-vars, no-prototype-builtins */
const findObjPropsHasOwn = (obj1) => {
  let keys = [];
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            keys.push(key)
        }
    }
    return keys.join(", ");
};