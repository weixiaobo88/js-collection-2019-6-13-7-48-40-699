"use strict";
function map_to_even(collection) {
  let result = [];
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    result.push(element * 2);
  }

  return result;
}
module.exports = map_to_even;
