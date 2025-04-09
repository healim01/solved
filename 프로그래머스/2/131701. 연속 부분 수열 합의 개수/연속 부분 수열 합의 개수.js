function solution(elements) {
    let sum = []; 
    let n = elements.length;
    
    for (let i=1; i<=n; i++) {
        for (let j=0; j<n; j++) {
            let end = (j + i) % n;
            let arr = [];

            if (end > j) {
                arr = elements.slice(j, end);
            } else {
                arr = [...elements.slice(j), ...elements.slice(0, end)];
            }

            sum.push(arr.reduce((a,c)=>a+c)); 
        }
    }
    
    return [...new Set(sum)].length;
} 