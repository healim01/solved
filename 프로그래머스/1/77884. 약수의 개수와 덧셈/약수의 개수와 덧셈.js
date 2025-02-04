const factors = (number) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) {
            count++;  
            if (i !== number / i) {
                count++;  
            }
        }
    }
    return count;
}

function solution(left, right) {
    var answer = 0;
    
    for (let i = left; i<=right; i++) {
        let count = factors(i); 
        
        if (count % 2 === 0) answer += i; 
        else answer -= i;
    }
    
    return answer;
}