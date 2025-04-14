function solution(k, dungeons) {
  let maxCount = 0;

  function dfs(currentK, count, visited) {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [minRequired, cost] = dungeons[i];

      if (!visited[i] && currentK >= minRequired) {
        visited[i] = true;
        dfs(currentK - cost, count + 1, visited);
        visited[i] = false;
      }
    }
  }

  const visited = Array(dungeons.length).fill(false);
  dfs(k, 0, visited);

  return maxCount;
}
