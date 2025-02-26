function solution(answers) {
    var answer = [];
    const ppls = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    let maxCount = 0; 
    
    ppls.map((ppl, index) => {
        let count = 0; 
        
        for (let i=0; i<answers.length; i++) {
            if (ppl[i % ppl.length] === answers[i]) count++; 
        }
        
        if (count > maxCount) {
            maxCount = count;
            answer = [index + 1];
        } 
        else if (count === maxCount) answer.push(index+1);
    })
    
    return answer;
}