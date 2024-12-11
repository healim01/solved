function solution(k, score) {
    let crown = [ ];
    let answer = [];
    
    for (let i of score) {
        crown.push(i);
        crown.sort((a, b) => b - a);
        
        if (crown.length <= k) {
            answer.push(crown[crown.length -1]);
        }
        else answer.push(crown[k-1]);
        
    }
    
    return answer;
}