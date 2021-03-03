const sentence =  `I am a teacher and I love teaching . There is nothing as more rewarding as educating and empowering people . I found teaching more interesting than any other jobs . Does this motivate you to be a teacher ?`;
function varietyOfWords(param) {
    answer = param.split(' ');
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
  
    var unique = answer.filter( onlyUnique );
  
    return unique.length;
  }

  console.log(varietyOfWords(sentence));