function solution(babbling) {
    const words = ['aya', 'ye', 'woo', 'ma'];
    var answer = babbling.length;
    
    babbling.forEach((b) => {
        let word = b;
         let prevWord = '';
        while (word.length > 0) {
          const two = word.slice(0, 2);
          const three = word.slice(0, 3);
            
          if (words.includes(two) && prevWord !== two) {
              word = word.slice(2);
              prevWord = two;
            }
          else if (words.includes(three) && prevWord !== three) {
              word = word.slice(3);
               prevWord = three;
          } 
            else {
                answer -= 1; 
                break;
            }
       }
    })
    
    return answer;
}