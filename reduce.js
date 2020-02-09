// reduce method from scratch

function reduce(array, combining_function, starting_index) {
    let current_index = starting_index
    for (let element of array) {
      current_index = combining_function(current_index, element);
    }
    return current_index;
  }
  
  console.log(reduce([1,2,3,4], (a, b) => a + b, 0));
  // 10 