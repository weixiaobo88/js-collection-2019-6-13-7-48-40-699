"use strict";

function choose_multiples_of_three(collection) {
  let result = [];
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    if (element % 3 === 0) {
      result.push(element);
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
