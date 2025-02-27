function solution(participant, completion) {  
    const hash = {}; 
    
    participant.map((p) => {
        if (hash[p]) {
            hash[p]++;
        }
        else hash[p] = 1
    });
    
    completion.forEach((c) => hash[c]--);
    
     for (let i in hash) {
         if (hash[i] !== 0) return i;
     }
}