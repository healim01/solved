function solution(n, money) {
    money.sort((a,b) => a-b);
    
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (const coin of money) {
        for (let i = coin; i <= n; i++) {
            dp[i] = (dp[i] + dp[i - coin]) % 1000000007;
        }
    }
    
    
    return dp[n];
}