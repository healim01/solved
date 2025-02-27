function solution(progresses, speeds) {
    let answer = [];
    let front = 0; 
    
    while (1) {
      progresses = progresses.map((p,i) => p + speeds[i]); 
        
    let cnt = 0; 
    while (1) {
        if (progresses[front] >= 100) {
            cnt++; 
            front++;
        }
        else break;
    }
        
     if (cnt) answer.push(cnt);
     if (front === progresses.length) break;
    }
    
    return answer;
}