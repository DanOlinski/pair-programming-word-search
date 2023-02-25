const wordSearch = (letters, word) => {
  //this stores the matrix in an inverted manner
  const invertedLetters = [];
  
  
  //this loop goes over the array in the column axis (numbers of iterations is the ammount of columns)
  for (let i = 0; i < letters[0].length; i++) {
    const colArr = [];

    //this loop goes over the rows axis (numbers of iterations is the ammount of rows)
    for (let j = 0; j < letters.length; j++) {
      //this pushes into the array inverting cols for rows
      colArr.push(letters[j][i]);
    }
    
    //this places the colArr outside of the loop scope
    invertedLetters.push(colArr);
  }
  
  //map loops through an array and runs a callout function for every item in that array. for this case it is storing data into 'ls' and returning ls.join (this methood joins the items in the nested arrays into strings)
  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log(horizontalJoin)
  const verticalJoin = invertedLetters.map(cs => cs.join(''))
  
  //these loops check the strings and compare them to the second parameter passed into the function. if they find a match they return true (this is what the module .include does). the great thing about this module is that it can analize a infinite sized string, if within it it finds the sequence of letters that match the searched word it will consider it a match
  for (let l of horizontalJoin) {
    if (l.includes(word)) {return true}
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) {return true}
  }

  return false;
};
  

//test code
// console.log(wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'WEFMHFBDZ'));

module.exports = wordSearch;