"use strict";

function grouping_count(collection) {
  let result = {};
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    if (result[element]) {
      result[element] = result[element] + 1;
    } else {
      result[element] = 1;
    }
  }
  return result;
}

module.exports = grouping_count;
