function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: n }, (_, i) => i);

  const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;
    parent[rootB] = rootA;
    return true;
  };
    

  let answer = 0;
  for (const [a, b, cost] of costs) {
    if (union(a, b)) {
      answer += cost;
    }
  }
    
  return answer;
}
