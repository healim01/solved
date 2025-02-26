function solution(arr1, arr2) {
    var answer = [];
    const rarr2 = Array.from({ length: arr2[0].length }, (_, idx) => arr2.map(a2 => a2[idx]));
    
    for (let i=0; i<arr1.length; i++) {
        const arr = rarr2.map((a2) => {
           return a2.reduce((a, b, idx) => a + b * arr1[i][idx], 0);
        });
        
        answer.push(arr);
    }
    
    return answer;
}