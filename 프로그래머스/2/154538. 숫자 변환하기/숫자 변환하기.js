function BFS(start, target, n) {
  const queue = [[target, 0]];
  const visited = new Set();
  visited.add(target);

  while (queue.length) {
    const [current, steps] = queue.shift();

    // 목표값 도달 시 최소 연산 횟수 반환
    if (current === start) return steps;

    // 가능한 연산 수행 (-n, /2, /3)
    if (current - n >= start && !visited.has(current - n)) {
      queue.push([current - n, steps + 1]);
      visited.add(current - n);
    }
    if (current % 2 === 0 && !visited.has(current / 2)) {
      queue.push([current / 2, steps + 1]);
      visited.add(current / 2);
    }
    if (current % 3 === 0 && !visited.has(current / 3)) {
      queue.push([current / 3, steps + 1]);
      visited.add(current / 3);
    }
  }

  return -1;
}

function solution(x, y, n) {
  return BFS(x, y, n);
}
