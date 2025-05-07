function solution(maps) {
  const direction = [
    [0, 1], 
    [0, -1], 
    [1, 0], 
    [-1, 0]
  ];
  
  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );
  const queue = [{ position: [0, 0], paths: 1 }];
  visited[0][0] = true;

  while (queue.length) {
    const { position, paths } = queue.shift();
    const [x, y] = position;

    if (x === maps[0].length - 1 && y === maps.length - 1) return paths;

    for (let [dx, dy] of direction) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 && newY >= 0 &&
        newX < maps[0].length && newY < maps.length &&
        maps[newY][newX] === 1 && !visited[newY][newX]
      ) {
        visited[newY][newX] = true;
        queue.push({ position: [newX, newY], paths: paths + 1 });
      }
    }
  }

  return -1;
}
