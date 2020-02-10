// reduce method from scratch

function reduce(array, combiningFunction, startingIndex) {
    let currentIndex = startingIndex
    for (let element of array) {
      currentIndex = combiningFunction(currentIndex, element);
    }
    return currentIndex;
  }
  
  console.log(reduce([1,2,3,4], (a, b) => a + b, 0));
  // 10 

  // reduce method .reduce() is called on an array and accepts a callback function that is a reducer, or a combining function that performs the operation (summation, or totaling) and it accepts four parameters, two neccessary (accumulator and current value) and two optional (starting index and array its being performed upon)

array = [1, 2, 3, 4]

// ES5 Syntax

array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
}, 0)

// ES6 Arrow Function Syntax

array.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0 )