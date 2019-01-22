function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) { //loops the array from 0 to the half of the array (rounded to lower number), increases 
        //i by one each time.
      let old = array[i]; //temporarely stores the current value of the array at the position i in the variable old.
      array[i] = array[array.length - 1 - i]; //sets the value of the i position to the value of the last element of the array minus the current i.
      array[array.length - 1 - i] = old;//sets the value of the last element of the array minus the current i to the previous value (stored in 
      //the old variable).
    }
    return array;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);