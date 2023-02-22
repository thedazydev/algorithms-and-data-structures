function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    
    //loops through string 
    for (let i = 0; i < str.length; i++) {
    //finds the words by identifying which indexes are equal to space
      if (str[i] === " ") {
    //assigns which word is the longest length through comparison with current length
        if (currentLength > longestLength) {
          longestLength = currentLength;
        }
    //resets the current length when the index is a space
        currentLength = 0;
      } 
    //incremenets the current length for the letters of each word
      else {
        currentLength++;
      }
    }
    //changes the current length if the current length is greater than the current longest
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    
    return longestLength;
    }
    
    findLongestWordLength('You will need to figure out a way to keep track globally of the greatest current length.')
    