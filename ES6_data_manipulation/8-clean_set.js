function cleanSet(set, startString) {
  const result = [];
  set.forEach(value => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });
  return result.join("-");
}

module.exports = cleanSet;
