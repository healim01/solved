function solution(s) {
    let answer = 0;
    let operator = null;
    s = s.match(/[\d]+|[+-]/g);
    s.forEach((a) => {
        if (a === '+' || a === '-') operator = a;
        
        if (!isNaN(a)) {
            if (operator === '+') answer += a*1;
            if (operator === '-') answer -= a*1;
            if (operator === null) answer = a*1;  
        }
    })
    
    return answer;
}