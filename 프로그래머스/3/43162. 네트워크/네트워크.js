function dfs(computers, visited, node) {
    visited[node] = true;
    
    for (let i=0; i<computers.length; i++) {
        if (computers[node][i] === 1 && !visited[i]) {
            dfs(computers, visited, i);
        }
    }
}

function solution(n, computers) {
    let count = 0;
    const visited = Array(n).fill(false); 
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            dfs(computers, visited, i); 
            count++; 
        }
    }
    
    return count;
}