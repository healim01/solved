function solution(n, lost, reserve) {
    let res = reserve.filter((r) => !lost.includes(r)).sort((a,b) => a - b); 
    let lo = lost.filter((l) => !reserve.includes(l)).sort((a,b) => a - b); 

    var answer = lo.length;    
    let point = 0; 
    for (let l of lo) {
        for (let i=point; i<res.length; i++) {
            if (res[i] - 1 <= l && l <= res[i] + 1) {
                 answer--;
                 point = i+1; 
                 break;
            }
        }
    }
    
    return n - answer;
}