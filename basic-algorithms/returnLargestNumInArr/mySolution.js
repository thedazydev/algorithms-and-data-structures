//Loop through array
//find max
//push max to new array

function largestOfFour(arr) {
    let maxArr = []
    for(i = 0; i < arr.length; i++){
      maxArr.push((Math.max(...arr[i])))
    }
    return maxArr
  }
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);