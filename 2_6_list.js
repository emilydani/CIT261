function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
} //builds up a list structure like the one shown when given [1, 2, 3] as argument

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
} //produces an array from a list

function prepend(value, list) {
  return {value, rest: list};
} //which takes an element and a list and creates a new list that adds the element to the front of the input list

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
} /*which takes a list and a number and returns the element at the given position in the list (with zero referring 
to the first element) or undefined when there is no such element*/

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
