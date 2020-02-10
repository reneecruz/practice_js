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