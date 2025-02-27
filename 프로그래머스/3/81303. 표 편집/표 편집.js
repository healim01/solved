function solution(n, k, cmd) {
    let trash = []; 
    let up = [...new Array(n + 2)].map((_, i) => i - 1);
    let down = [...new Array(n + 1)].map((_, i) => i + 1);
    
    k += 1;
    cmd.map((cm) => {
         const [action, num] = cm.split(' ');
        
        if (action === 'U') {
            const [action, num] = cm.split(' ');
            
            for (let i=0; i<num; i++) {
                k = up[k];
            }
        }
        
         if (action === 'D') {
            const [action, num] = cm.split(' ');
            
            for (let i=0; i<num; i++) {
                k = down[k];
            }
        }
        
        if (action === 'C') {
            trash.push(k);
            
            up[down[k]] = up[k]
            down[up[k]] = down[k]
            
            k = n < down[k] ? up[k] : down[k]
        }
        
        if (action === 'Z') {
            const back = trash.pop(); 
            down[up[back]] = back;
            up[down[back]] = back;
        }
    })
    
    let answer = new Array(n).fill('O')
    for (let i=0; i<trash.length; i++) {
       answer[trash[i] - 1] =  'X'
    }
    
    return answer.join('');
}
