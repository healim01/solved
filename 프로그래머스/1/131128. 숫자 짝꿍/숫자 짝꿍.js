function solution(X, Y) {
    const arr = Array.from(10).fill(0); 
    
    for (let i=0; i<=9; i++) {
        const x = [...X].filter((a) => a == i); 
        const y = [...Y].filter((a) => a == i); 

        arr[i] = Math.min(x.length, y.length); 
    }
    
    let answer = ''
    for (let i=9; i>=0; i--) {
        answer += String(i).repeat(arr[i]);
    }
    
    if (answer === '') return '-1';
    if (Number(answer) === 0) return '0';
    return answer;
}
