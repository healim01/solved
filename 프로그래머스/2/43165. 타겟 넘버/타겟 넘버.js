function solution(numbers, target) {
    let answer = 0; 
    
    function dfs(cur, idx) {
        if (idx === numbers.length && cur === target) return answer++; 
        if (idx === numbers.length) return;
        
        dfs(cur + numbers[idx], idx + 1); 
        dfs(cur - numbers[idx], idx + 1); 
    }
    
    dfs(0, 0);
    
    return answer; 
}