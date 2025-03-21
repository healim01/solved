function solution(n, arr1, arr2) {
    let answer = Array.from(Array(n), () => Array(n).fill(0));
    
    for (let i=0; i<n; i++) {
        let ar1 = arr1[i].toString(2).padStart(n,0);
        let ar2 = arr2[i].toString(2).padStart(n,0); 
        
        for (let j=n-1; j>=0; j--) {
            if (ar1[j] == 0 && ar2[j] == 0) answer[i][j] = ' ';
            else answer[i][j] = '#'; 
        }
    }
    
    return answer.map((row) => row.join(''));
}