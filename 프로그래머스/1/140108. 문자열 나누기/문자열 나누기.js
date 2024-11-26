function solution(s) {    
    let x = null; 
    let word = 0; 
    
    
    let xCnt = 0, yCnt = 0;
    Array.from(s).forEach((a) => {
        // console.log(a);
        if (x === null) x = a;
        
        if (a === x) xCnt++; 
        else yCnt++; 
        
        // console.log(x, xCnt, yCnt);
        if (xCnt === yCnt) {
            word++; 
            x = null; 
            xCnt=0; 
            yCnt=0;
        }
    })
    
    if (x !== null) word++;
    
    return word;
}