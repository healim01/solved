function solution(n, times) {
    // 심사대 오름차순 솔팅 
    times.sort((a,b) => a-b); 
    
    // 
    let lo = -1;
    let hi = n * times[times.length -1] + 1;
    
    let answer = hi; // 최대값.
    
    
    while(lo+1 < hi){
        
        let mid = Math.floor((lo + hi) / 2);
        
        //
        let count = 0
        // 심사대 수만큼 for 
        times.forEach(value => {
            // mid / value 심사대에서 걸리는 시간 => 이 시간 동안 value 심사단에서 확인 가능한 사람 수
            count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
            
            // 만약 모든 수가 n 보다 크면 
            if(count >= n) {
                answer = Math.min(mid, answer); // 최솟값
                return;
            };
        });
        
        if (count >= n) hi = mid; 
        else lo = mid; 
    }
    
    return answer;
}