//turn sentance into an array
//loop through array
//set count to find index of longest word
//loop through words
//if current word length is less than the next word, set next word to current longest
//output the longest

function findLongestWordLength(sentance){
    let arr = sentance.split(" ")
    let numArr = []
    let mostLetters = 0
    for(i=0; i<arr.length; i++){
      numArr.push(arr[i].length)
    }
    mostLetters = Math.max(...numArr)
    let wordFinder = numArr.indexOf(mostLetters)
    
    return arr[wordFinder]
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");