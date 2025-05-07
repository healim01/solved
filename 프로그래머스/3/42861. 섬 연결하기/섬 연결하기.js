function solution(n, costs) {
    let answer = 0;
    costs.sort((a,b) => a[2] - b[2]); 
    
    const parent = Array.from({length: n}).map((_, i) => i); 
    
    const find = (x) => parent[x] === x ? x : parent[x] = find(parent[x]); 
    const union = (a,b) => {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA === rootB) return false; 
        parent[rootB] = rootA; 
        return true;
    }
    
    for (let [a,b,cost] of costs) {
        if (union(a,b)) {
            answer += cost;
        }
    }
    
    return answer;
}
