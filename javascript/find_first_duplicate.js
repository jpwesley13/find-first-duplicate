function findFirstDuplicate(arr) {
  // type your code here
  uniques = new Set()
  for (const value of arr) {
    if(uniques.has(value)){
      return value
    }
    uniques.add(value)
  }
  console.log(uniques)
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: 17");
  console.log("=>", findFirstDuplicate([1, 4, 8, 195, 17, 64, 0, 9213, 17, 233, 11, 1]))

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// Create a Set to hold unique values
// Iterate through array
// If the value is present in the set, return the value
// Else place the value in the set
// Return -1 if there is no value to return

// And a written explanation of your solution
// A Set will hold all unique values in the array. The for loop will then iterate through the array value by value from the first index. Each time the loop iterates it will add the value to the set if it's the first instance of that value. However once/if a value is already present in the set, the loop returns that value instead. If the for loop completes without ever coming across a value with more than one occurrence, the code continues and returns -1 instead.