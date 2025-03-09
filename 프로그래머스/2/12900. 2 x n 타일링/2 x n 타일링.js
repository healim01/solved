function solution(n) {
    const dp = [0,1,2];
    
    for (let i=3; i<=n; i++) {
         // 타일 가로 배치 한 경우 + 타일 세로 배치한 경우 
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
    }
    
    return dp[n];
}