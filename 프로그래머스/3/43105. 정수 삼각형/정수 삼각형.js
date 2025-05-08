// function solution(triangle) {
//     var answer = 0;
//     const n = triangle.length;
//     const dp = Array.from(Array(n), () => Array(n).fill(0));
    
//     dp[0][0] = triangle[0][0]; 
    
//     for (let i=1; i<n; i++) {
//       for (let j=0; j<=i; j++) {
//          if (j === 0) dp[i][j] = triangle[i][j] + dp[i-1][j]; 
//          else if (j === n-1) dp[i][j] = triangle[i][j] + dp[i-1][j-1];
//          else dp[i][j] = triangle[i][j] + Math.max(dp[i-1][j-1], dp[i-1][j]); 
//       }
//     }
    
//     return Math.max(...dp[n-1]);
// }


function solution(triangle) {
    const arr = Array.from({length: triangle.length}, () => Array(triangle.length).fill(0));
    
    arr[0][0] = triangle[0][0]; 
    triangle.forEach((tri, i) => {
        if (i !== 0) {
            tri.forEach((t, j) => {
                if (j === 0) arr[i][j] = t + arr[i-1][j]; 
                else arr[i][j] = t + Math.max(arr[i-1][j-1], arr[i-1][j]);
            })
        }
    })
    
    return Math.max(...arr[triangle.length - 1]);
}