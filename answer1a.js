const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love';
function countWords(para ,word1, word2){
    let word1count = 0;
    let word2count = 0;

    answer = para.split(' ');
    for(let i=0;i<answer.length;i++) {
        if(answer[i] == word1) {
            word1count++;
        };
        if(answer[i] == word2) {
            word2count++;
        };
    };
    
    if(word1count>word2count) {
        return word1;
    }else {
        return word2;
    };
};

console.log(countWords(paragraph,'love', 'you'));