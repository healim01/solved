function solution(info, n, m) {
    info.sort((a,b) => b[0]/b[1] - a[0]/a[1])
    
    let curA = 0, curB =0; 
    for (let i of info) {
        const [a,b] = i;

        if (curB + b < m) curB += b;
        else {  
            if (curA + a >= n) return -1; 
            curA += a; 
        }
    }

    return curA;
}