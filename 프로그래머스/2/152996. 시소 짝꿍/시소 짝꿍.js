function solution(weights) {
    let answer = 0;
    const arr = {}; 
    // (1,1), (2,3), (2,4), (3,4)
    const dist = [1, 3/2, 2, 4/3]; 
    
    weights.sort((a,b)=> b - a); 
    
    weights.forEach((w) => {
        dist.forEach((i)=>{
            if(arr[w * i]){
              answer += arr[w * i];
            }
        });
        
        if (!arr[w]) arr[w] = 1;
        else arr[w]++;
    });
    
    return answer;
}