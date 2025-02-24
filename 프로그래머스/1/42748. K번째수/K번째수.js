function solution(array, commands) {
    var answer = [];
    
    commands.forEach((command) => {
        const [i, j, k] = command;       
        const arr = array.slice(i-1, j).sort((a,b) => a - b);
      
        answer.push(arr[k-1]);
    })
    
    return answer;
}