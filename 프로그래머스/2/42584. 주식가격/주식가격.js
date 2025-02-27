function solution(prices) {
    var answer = [];
    let sk = []; 

    
    for (let i=0; i<prices.length; i++) {
        let time = 0;
        
        for (let j=i; j<prices.length-1; j++) {
            if (prices[i] <= prices[j]) time++;
            else break; 
        }
        
        answer.push(time); 
    }
    
    return answer;
}