function range(start, end, step) {
  if ((step == null) || (typeof step == 'undefined')) step = 1;
  var array = [];
    if (step > 0) {
        for (var i = start; i <= end; i+= step)
            array.push(i);
    } else {
        for (var i = start; i >= end; i+= step) {
            array.push(i);
          }
        }
    return array;
};

function sumOfArray(array) {
    var sumTotal = 0;
    for (var i = 0; i < array.length; i++)
        sumTotal += array[i];
    return sumTotal;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(sumOfArray(range(1, 10)));