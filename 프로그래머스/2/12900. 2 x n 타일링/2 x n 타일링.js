function solution(n) {
    var answer = 0;
    
    if (n === 1) return 1; 
    if (n === 2) return 2; 
    
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i=3; i<=n; i++) {
         // 타일 가로 배치 한 경우 + 타일 세로 배치한 경우 
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
    }
    
    return dp[n];
}