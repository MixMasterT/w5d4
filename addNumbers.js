const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum = 0, numsLeft, completionCallback) {
  if (numsLeft > 0) {
      reader.question("Input number:\n", function(num) {
      const inputNum = parseInt(num);
      sum += inputNum;
      console.log(sum);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
