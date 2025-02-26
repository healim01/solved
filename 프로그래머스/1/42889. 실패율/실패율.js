function solution(N, stages) {
    var answer = [];
    let fail = 0; 
    
    stages.sort((a,b) => a-b);
    
    for (let i=1; i<=N; i++) {
        let count = stages.filter(s => s === i).length; 
       
        answer.push([i, count / (stages.length - fail)])
        fail += count;
    }
    
    answer.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    
    return answer.map((a) => a[0]);
}
