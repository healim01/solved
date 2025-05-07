function solution(n, lost, reserve) {
    let res = reserve.filter((r) => !lost.includes(r)).sort((a,b) => a - b); 
    let lo = lost.filter((l) => !reserve.includes(l)).sort((a,b) => a - b);
    
    let get = lo.length; 
    let point = 0;
    
    for (let l of lo) {
        for (let i=point; i<res.length; i++) {
            if (res[i] - 1 === l || res[i] + 1 === l) {
                point++; 
                get--;
                break;
            }
        }
    }
    
    return n - get;
}