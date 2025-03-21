const alphaCount = (str) => {
    let a = 'A'.charCodeAt(); 
    let z = 'Z'.charCodeAt(); 
    let s = str.charCodeAt(); 
    return Math.min(s - a, z - s + 1); 
}

function solution(name) {
    var answer = 0;

    let arr = [...name].map((n) => alphaCount(n)); 
    let minMove = arr.length - 1;
    
    arr.forEach((ar, idx) => {
        answer += ar; 
        
        let cursor = idx + 1;
        while(cursor < arr.length && arr[cursor] === 0) cursor++;
        
        minMove = Math.min(minMove, 
                          (idx * 2) + arr.length - cursor, 
                          idx + 2 * (arr.length - cursor)); 
    });
    
    return answer + minMove;
}