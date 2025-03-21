function solution(number, k) {
    let answer = []; 
    let cnt = 0; 
    
    [...number].forEach((n) => {            
        while (answer.length > 0 && answer[answer.length - 1] < n && cnt < k) {
            answer.pop(); 
            cnt++;
        }
        
        answer.push(n);
    })
    
     if (answer.length > number.length - k) {
        answer = answer.slice(0, number.length - k);
    }
    
    return answer.join('');
}