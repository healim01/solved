function solution(sequence, k) {
    /*
        seq 돌면서 k 되면 추가 
            투포인터 start > end 되면 멈추기 
            
            사이 합이 k 면 기록 
            사이 합이 k 보다 작으면 end++
            사이 합이 k 보다 크거나 같으면 start++ 
            
        추가한 리스트에서 가장 짧은 값을 리턴 
    */
    let answer = [];
    let left = 0, right = 0; 
    let s = sequence[0]; 
    
    while (right < sequence.length) {
        if (s === k) answer.push([left, right]);
        
        if (s < k) {
            right++; 
            s += sequence[right]; 
        }
        else if (s >= k) {
            s -= sequence[left]; 
            left++; 
        }
    }
    
    answer.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));
    return answer[0]; 
}