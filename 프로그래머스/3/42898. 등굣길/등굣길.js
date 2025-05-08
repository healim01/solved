function solution(m, n, puddles) {
  const MOD = 1_000_000_007;
  const dp = Array.from({ length: n }, () => Array(m).fill(0));

  const isPuddle = Array.from({ length: n }, () => Array(m).fill(false));
  for (const [x, y] of puddles) {
    isPuddle[y - 1][x - 1] = true;
  }

  // 시작점
  dp[0][0] = 1;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (isPuddle[y][x]) continue;
        
      if (y > 0) dp[y][x] = (dp[y][x] + dp[y - 1][x]) % MOD;
      if (x > 0) dp[y][x] = (dp[y][x] + dp[y][x - 1]) % MOD;
    }
  }

  return dp[n - 1][m - 1];
}
