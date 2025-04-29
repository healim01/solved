function solution(s){
    const stack = [];
    
    [...s].forEach((a) => {
        if (a === ')') {
            const prev = stack.pop(); 
            if (prev !== '(') {
                stack.push(prev);
                stack.push(a); 
            } 
        }
        else stack.push(a);
    })
    
    return stack.length === 0;
}