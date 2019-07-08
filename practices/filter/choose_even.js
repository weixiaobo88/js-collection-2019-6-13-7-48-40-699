"use strict";

function choose_even(collection) {
  let result = [];
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    if (element % 2 === 0) {
      result.push(element);
    }
  }
  return result;
}

module.exports = choose_even;
