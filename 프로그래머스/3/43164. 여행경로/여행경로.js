function solution(tickets) {
  const answer = [];
  const visited = Array(tickets.length).fill(false);

  tickets.sort((a, b) => a[1].localeCompare(b[1]));

  function dfs(path, count) {
    if (count === tickets.length) {
      answer.push([...path]);
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];
      if (!visited[i] && path[path.length - 1] === from) {
        visited[i] = true;
        path.push(to);
          
        dfs(path, count + 1);
        path.pop();    
        visited[i] = false;
      }
    }
  }

  dfs(["ICN"], 0);

  return answer[0]; 
}
