function largestOfFour(arr) {
//Create a new array with 4 numbers
    var largestNumber = [0,0,0,0];
//loop through array of arrays
    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
//loop through the arrays within the array
     for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
//number check, assigns largest number by comparing it to the current highest
        if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
           largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
         }
     }
  }
  return largestNumber;
 }
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])