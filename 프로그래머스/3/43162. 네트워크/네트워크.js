function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    
    const bfs = (start) => {
        const queue = [start]; 
        visited[start] = true; 
        
        while (queue.length) {
            const node = queue.shift();
            
            for (let j=0; j<n; j++) {
                if (computers[node][j] === 1 && !visited[j]) {
                    visited[j] = true; 
                    queue.push(j); 
                }
            }  
        } 
    }
    
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            bfs(i); 
            answer++; 
        }
    }
    
    return answer;
}
