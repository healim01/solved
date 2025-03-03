function solution(n, stations, w) {
    var answer = 0;
    stations.sort((a,b) => a - b); 
    
    let cur = 0; 
    stations.forEach((station) => {
        let start = station - w - 1; 
        answer += Math.ceil((start - cur)/(2 * w + 1)); 
        cur = station + w; 
    })
    
    answer += Math.ceil((n - cur)/(2 * w + 1)); 
    return answer;
}