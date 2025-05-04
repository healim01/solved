function solution(n) {
    let count = 0;
    
    for (let i = 1; i * (i - 1) / 2 < n; i++) {
        const num = n - (i * (i - 1)) / 2;
        if (num % i === 0) {
            count++;
        }
    }

    return count;
}