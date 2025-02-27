const words = ['[]', '()', '{}'];

function solution(s) {
    var answer = 0;
    let ss = [...s];
    
    for (let i=0; i<s.length; i++) {
        let stack = [];
        ss.map((m) => {
            if (stack.length === 0) stack.push(m); 
            else {
                const top = stack.pop(); 
                const check =  top + m; 
                if (!words.includes(check)) {
                    stack.push(top); 
                    stack.push(m);
                }
            }
        })
        
        if (stack.length === 0) answer++;
        
        const bottom = ss[0]; 
        ss.splice(0,1);
        ss.push(bottom);
    }
    
    return answer;
}