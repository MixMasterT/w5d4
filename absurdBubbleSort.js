const readLine = require('readline');

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?\n`, function(s) {
    if(s[0] === "y") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      if(isGreaterThan) {
        const temp = arr[i];
        arr[i] = arr[i+1];
        arr[i +1] = temp;
        madeAnySwaps = true;
      }
      //console.log(arr);
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// innerBubbleSortLoop([1, 3, 2], 0, false, () => console.log("Outter Bubble Sort!"));
// reader.close();
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
