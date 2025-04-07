function solution(storey) {
    
    // 36
    // 6 > + 4
    // 4 > + 4
    
    // 32
    // 2 < + 2
    // 3 < + 3
    
    // 86
    // 6 > + 4
    // 9 > + 1
    // 1 > + 1
    
    // 82 
    // 2 < + 2
    // 8 > + 8 
    
    // 35
    // 5 < + 5
    // 3 < + 3
    
    // 85
    // 5 < + 5
    // 9 < + 1
    
    
    let answer = 0; 
    let cnt = 1; 
    
    while (storey > 0) {
        let n = storey % 10;
        storey = Math.floor(storey / 10); 
        
        if (n > 5) {
            answer += (10 - n);
            storey += 1;
        }
        else if (n < 5) {
            answer += n; 
        }
        else {
            if (storey % 10 >= 5) {
                answer += (10 - n);
                storey += 1; 
            }
            else {
                answer += n; 
            }
        }
        
    }
    
    return answer;
}