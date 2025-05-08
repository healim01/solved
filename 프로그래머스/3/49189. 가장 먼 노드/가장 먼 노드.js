function solution(n, edge) {
    var answer = 0;
    edge.sort((a,b) => a[0] - b[0]);
    const graph = {};
    
    edge.forEach((ed) => {
       if (!graph[ed[0]]) graph[ed[0]] = []; 
       if (!graph[ed[1]]) graph[ed[1]] = []; 
        graph[ed[0]].push(ed[1]); 
        graph[ed[1]].push(ed[0]); 
    })
    
    const visited = Array.from({length: n + 1}).fill(false); 
    const path = Array.from({length: n + 1}).fill(0); 
    
    const queue = [];
    queue.push('1'); 
    visited[1] = true;
    
    while (queue.length) {
        const node = queue.shift();
        const eds = graph[node];  
        // console.log(node, path[node], eds);
        
        eds.forEach((ed) => {
            if (!visited[ed]) {
                queue.push(String(ed)); 
                path[ed] = path[node] + 1;
                visited[ed] = true; 
            }
        }); 
    }
    
    const farSize = Math.max(...path); 
    return path.filter((p) => p === farSize).length;
}