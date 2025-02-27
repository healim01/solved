function solution(s)
{
    let stack = []; 
    
    [...s].map(s => {
        if (stack.length === 0) stack.push(s); 
        else {
            const top = stack.pop(); 
            if (top !== s) {
                stack.push(top);
                stack.push(s); 
            }
        }
    })
    
    
    if (stack.length === 0) return 1; 
    return 0;
}