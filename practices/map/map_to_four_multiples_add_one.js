"use strict";
var map_to_four_multiples_add_one = function(collection) {
  let result = [];
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    result.push(element * 4 + 1);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
