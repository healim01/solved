function solution(k, tangerine) {
    var answer = 0;
    
    let tangerineCnt = new Map();
    tangerine.forEach((t) => {
        tangerineCnt.set(t, (tangerineCnt.get(t) || 0) + 1);
    });
    tangerineCnt = [...new Set(tangerineCnt)].sort((a,b) => b[1] - a[1]);

    let cnt = 0; 
    while (cnt < k) {
        cnt += tangerineCnt[answer][1]; 
        answer++; 
    }
        
    return answer;
}