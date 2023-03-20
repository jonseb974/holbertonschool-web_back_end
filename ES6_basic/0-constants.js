export function taskFirst() {
  // const task = 'I prefer const when I can.';
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  //let combination = 'But sometimes let';
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}