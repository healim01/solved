function solution(a, b, n) {
    // give a
    // take b
    // mine n
    
    var answer = 0;
    
    while (n >= a) {
    
        let newB = Math.floor(n / a); 
        let leftB = n % a;
        
        answer += newB * b;
        
        n = (newB * b) + leftB;
    }
    
    return answer;
}