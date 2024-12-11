function solution(s) {
    const arr = s.split('');
    let answer = [];
  
    for (let i=0; i<s.length; i++) {
        for (let j=i; j>=0; j--) {
            if (arr[i] === arr[j] && i !== j) {
                answer.push(i - j);
                break;
            }
            
            if (j === 0) {
                answer.push(-1);
                break;
            }
        }
    }
    
    return answer;
}
