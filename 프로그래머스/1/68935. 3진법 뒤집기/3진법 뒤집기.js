function solution(n) {
    var answer = '';
    
    while (n > 0) {
        let a = n % 3; 
        n = Math.floor(n / 3); 
        answer += a;
    }
    
    answer = answer.split('').reverse().join('');
    
    const result = Array.from(answer).reduce((ans, cur, i) => {
        return ans + (cur * 3 ** i);  
    }, 0);

    return result;
}