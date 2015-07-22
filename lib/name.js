


function spaceBreaker (string) {
  return string.toUpperCase().split(' ').join("").split('')
}


function cheerYeller (array) {
  var an = ['A', 'E', 'F', 'H', 'I', 'L', 'M', 'N', 'O', 'R', 'S', 'X']
  var a = ['B', 'C', 'D', 'G', 'J', 'K', 'L', 'P', 'Q', 'T', 'U', 'V', 'W', 'Y', 'Z']
  var yell = "";
  var article;
  array.forEach(function (letter) {
    article = (an.indexOf(letter) === -1)? 'a':'an'
    yell += "Give me " + article + " " + letter + "!\n"
  })
  return yell
}

module.exports = {
  spaceBreaker: spaceBreaker,
  cheerYeller: cheerYeller,
}
